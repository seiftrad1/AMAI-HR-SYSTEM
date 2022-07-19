import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";

import { useAuthState, useAuthDispatch } from "../context/auth";
import { gql, hasuraAdminClient } from "../lib/hasura-admin-client";
import { hasuraUserClient } from "../lib/hasura-user-client";
import { format, parseISO } from "date-fns";

const from = new Date().toISOString();

const GetUsers = gql`
  {
    User(
      where: {
        _not: { todo_users: { Todo: { Type: { _eq: "Offboarding" } } } }
      }
    ) {
      Name
      id
      notifications_aggregate(
        where: { seen: { _eq: false } }
        order_by: { created_at: desc }
      ) {
        aggregate {
          count
        }
      }
      notifications(where: { seen: { _eq: false } }) {
        id
        description
      }
    }
  }
`;
// _not: { todo_users: {} },

const getAdminIDs = gql`
  query MyQuery {
    User(where: { Role: { _eq: "HR manager" } }) {
      id
      Name
    }
  }
`;

const GetTodos = gql`
  {
    Todo(where: { Type: { _eq: "Offboarding" } }) {
      id
      Description
      Name
    }
  }
`;
const GetTodoshr = gql`
  {
    Todo(
      where: { Member: { _eq: "HR manager" }, Type: { _eq: "Offboarding" } }
    ) {
      id
      Description
      Name
    }
  }
`;
const GetUserById = gql`
  query GetUserById($user_id: Int!) {
    User_by_pk(id: $user_id) {
      id
      notifications_aggregate(where: { seen: { _eq: false } }) {
        aggregate {
          count
        }
      }
      notifications(where: { seen: { _eq: false } }) {
        id
        description
      }
    }
  }
`;
const AddNotification = gql`
  mutation MyMutation($user_id: Int!) {
    insert_notification_one(
      object: {
        user_id: $user_id
        name: "Offboarding"
        seen: false
        description: "you are assigned to your offboarding tasks. "
      }
    ) {
      user_id
      seen
      name
      id
      description
    }
  }
`;
const GetUsersOn = gql`
  {
    User(
      where: {
        todo_users: {
          Todo: { Member: { _eq: "Employee" }, Type: { _eq: "Offboarding" } }
        }
      }
      order_by: { created_at: desc }
    ) {
      Name
      id
      email
      created_at
      Avatar
      Last_Name
    }
  }
`;
const InsertTask = gql`
  mutation InsertTask(
    $Description: String!
    $Name: String!
    $from: timestamptz!
    $Member: String!
  ) {
    insert_Todo_one(
      object: {
        Description: $Description
        Name: $Name
        Date: $from
        Type: "Offboarding"
        Member: $Member
      }
    ) {
      Description
      Date
      Name
    }
  }
`;

export const getStaticProps = async () => {
  const { User } = await hasuraAdminClient.request(GetUsers);
  const initialData = await hasuraAdminClient.request(GetTodos);
  const Todoshr = await hasuraAdminClient.request(GetTodoshr);
  const Admins = await hasuraAdminClient.request(getAdminIDs);
  const UserOn = await hasuraAdminClient.request(GetUsersOn);

  return {
    props: {
      User,
      initialData,
      Todoshr,
      Admins,
      UserOn,
    },
  };
};

export default function OffBoarding({
  User,
  initialData,
  Todoshr,
  Admins,
  UserOn,
}) {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthState();
  const hasura = hasuraUserClient();
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm();
  const {
    register: register3,
    errors: errors3,
    handleSubmit: handleSubmit3,
  } = useForm();
  const { updateUser } = useAuthDispatch();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;
  const { data } = useSWR(GetTodos, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });

  const onSubmit = async ({ Description, Name, Member }) => {
    console.log(from);
    try {
      const { insert_Todo_one } = await hasura.request(InsertTask, {
        Description,
        from,
        Name,
        Member,
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const Assign = async ({ user_id }) => {
    const u_id = user_id;
    console.log(u_id);
    const t = data.Todo.map(({ id }) => {
      return { todo_id: id, user_id: u_id, completed: false };
    });
    const query = gql`
      mutation insert_todo_user($objects: [todo_user_insert_input!]!) {
        insert_todo_user(objects: $objects) {
          affected_rows
        }
      }
    `;
    if (confirm(`are you sure you want to assign those tasks to ${u_id}`)) {
      try {
        const { insert_todo_user } = await hasura.request(query, {
          objects: t,
        });
        const { insert_notification_one } = await hasura.request(
          AddNotification,
          { user_id: u_id }
        );
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };

  const deleteTodo = gql`
    mutation MyMutation($id: Int!) {
      delete_Todo_by_pk(id: $id) {
        id
      }
    }
  `;

  const deleteATodo = async (id) => {
    if (confirm("are you sure you want to delete this todo?")) {
      try {
        await hasura.request(deleteTodo, { id });
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const AssignHR = async ({ user_id }) => {
    const u_id = user_id;
    console.log(u_id);
    const t = Todoshr.Todo.map(({ id }) => {
      return { todo_id: id, user_id: u_id, completed: false };
    });
    const query = gql`
      mutation insert_todo_user($objects: [todo_user_insert_input!]!) {
        insert_todo_user(objects: $objects) {
          affected_rows
        }
      }
    `;
    if (confirm(`are you sure you want to assign those tasks to ${u_id}`)) {
      try {
        const { insert_todo_user } = await hasura.request(query, {
          objects: t,
        });
        const { insert_notification_one } = await hasura.request(
          AddNotification,
          { user_id: u_id }
        );
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };

  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div class="profile-content">
          <div class="row">
            {" "}
            <div class="col-md-6">
              <div class="portlet light ">
                <div class="portlet-body">
                  {" "}
                  <h3>Add new offboarding Task</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                      <label class="control-label">Name</label>
                      <input
                        name="Name"
                        id="Name"
                        type="text"
                        placeholder="Todo Name"
                        class="form-control"
                        ref={register}
                        required
                      />{" "}
                    </div>
                    <div class="form-group">
                      <label class="control-label">Description</label>
                      <textarea
                        name="Description"
                        id="Description"
                        type="textarea"
                        placeholder="Description"
                        class="form-control"
                        ref={register}
                        required
                      />{" "}
                    </div>{" "}
                    <div class="form-group">
                      {" "}
                      which role?
                      <select
                        name="Member"
                        id="Member"
                        ref={register}
                        required
                        className="form-control select2 "
                      >
                        <option>HR manager</option>
                        <option>Employee</option>
                      </select>{" "}
                    </div>
                    <div class="margiv-top-10">
                      <button
                        type="submit"
                        class="btn green"
                        disabled={isSubmitting}
                      >
                        {" "}
                        Save Changes{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>{" "}
              <div class="portlet light ">
                <div class="portlet-body">
                  <h3>Users already assigned</h3>
                  <div class="tab-content">
                    <div class="portlet-body">
                      <div class="tab-content">
                        <div class="tab-pane active" id="tab_actions_pending">
                          {UserOn.User.map(
                            ({
                              id,
                              created_at,
                              Name,
                              email,
                              Avatar,
                              Last_Name,
                            }) => {
                              const formattedJoinedAt = format(
                                parseISO(created_at),
                                "dd-MM-yyyy"
                              );
                              return (
                                <div class="mt-actions">
                                  <div class="mt-action">
                                    <div class="mt-action-img">
                                      <div className="profile-userpic">
                                        {" "}
                                        {Avatar ? (
                                          <img
                                            style={{
                                              width: 50,
                                              height: 50,
                                              objectFit: "cover",
                                            }}
                                            src={`../../${Avatar}`}
                                          />
                                        ) : (
                                          <img
                                            style={{
                                              width: 50,
                                              height: 50,
                                              objectFit: "cover",
                                            }}
                                            src={`../../profile.png`}
                                          />
                                        )}
                                      </div>
                                    </div>
                                    <div class="mt-action-body">
                                      <div class="mt-action-row">
                                        <div class="mt-action-info ">
                                          <div class="mt-action-details ">
                                            <span class="mt-action-author">
                                              {Name}
                                            </span>{" "}
                                            <span class="mt-action-author">
                                              {Last_Name}
                                            </span>
                                            <p class="mt-action-desc">
                                              {email}
                                            </p>
                                          </div>
                                        </div>{" "}
                                        <div class="mt-action-datetime ">
                                          <span class="mt-action-date">
                                            joined : {formattedJoinedAt}
                                          </span>
                                          <span class="mt-action-dot bg-green"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
            <div class="col-md-6">
              <div class="portlet light ">
                <div class="portlet-body">
                  <h3> offboarding Tasks</h3>{" "}
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab_1_1" data-toggle="tab">
                        Employee
                      </a>
                    </li>
                    <li>
                      <a href="#tab_1_2" data-toggle="tab">
                        HR manager
                      </a>
                    </li>{" "}
                  </ul>{" "}
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1_1">
                      <div class="table-container">
                        <table
                          class="table table-striped table-bordered table-hover"
                          id="sample_3"
                        >
                          <thead>
                            <tr>
                              <th> Name </th>
                              <th> Description </th> <th> Edit </th>
                              <th> Delete </th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th> </th>
                              <th> </th> <th> </th> <th> </th>
                            </tr>
                          </tfoot>
                          <tbody>
                            {data.Todo.map(({ id, Description, Name }) => {
                              return (
                                <tr key={id} class="odd gradeX">
                                  <td>{Name}</td>
                                  <td>{Description}</td>{" "}
                                  <td>
                                    <a
                                      class="btn btn-circle blue btn-sm "
                                      href={`/todo/${id}`}
                                    >
                                      edit
                                    </a>
                                  </td>{" "}
                                  <td>
                                    <button
                                      class="btn btn-circle red btn-sm "
                                      onClick={() => deleteATodo(id)}
                                    >
                                      {" "}
                                      delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>{" "}
                        <form onSubmit={handleSubmit2(Assign)}>
                          <div class="form-group">
                            <label>Users:</label>
                            <select
                              name="user_id"
                              id="user_id"
                              ref={register2}
                              required
                              className="form-control select2 "
                            >
                              {User.map(({ id, Name }) => (
                                <React.Fragment key={id}>
                                  <option value={id}>{Name}</option>
                                </React.Fragment>
                              ))}
                            </select>
                          </div>
                          <div class="btn-group">
                            <button
                              className="btn green"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              {" "}
                              assign
                            </button>
                          </div>{" "}
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane active " id="tab_1_2">
                      <div class="table-container">
                        <table
                          class="table table-striped table-bordered table-hover"
                          id="sample_3"
                        >
                          <thead>
                            <tr>
                              <th> Name </th>
                              <th> Description </th> <th> Edit </th>
                              <th> Delete </th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th> </th>
                              <th> </th> <th> </th> <th> </th>
                            </tr>
                          </tfoot>
                          <tbody>
                            {Todoshr.Todo.map(({ id, Description, Name }) => {
                              return (
                                <tr key={id} class="odd gradeX">
                                  <td>{Name}</td>
                                  <td>{Description}</td>{" "}
                                  <td>
                                    <a
                                      class="btn btn-circle blue btn-sm "
                                      href={`/todo/${id}`}
                                    >
                                      edit
                                    </a>
                                  </td>{" "}
                                  <td>
                                    <button
                                      class="btn btn-circle red btn-sm "
                                      onClick={() => deleteATodo(id)}
                                    >
                                      {" "}
                                      delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>{" "}
                        <form onSubmit={handleSubmit3(AssignHR)}>
                          <div class="form-group">
                            <label>Users:</label>
                            <select
                              name="user_id"
                              id="user_id"
                              ref={register3}
                              required
                              className="form-control select2 "
                            >
                              {Admins.User.map(({ id, Name }) => (
                                <React.Fragment key={id}>
                                  <option value={id}>{Name}</option>
                                </React.Fragment>
                              ))}
                            </select>
                          </div>
                          <div class="btn-group">
                            <button
                              className="btn green"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              {" "}
                              assign
                            </button>
                          </div>{" "}
                        </form>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
