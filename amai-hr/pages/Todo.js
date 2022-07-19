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
      where: { _not: { todo_users: {} }, Role: { _eq: "Employee" } }
      order_by: { created_at: desc }
    ) {
      Name
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
const GetUserHR = gql`
  {
    User(where: { Role: { _eq: "HR manager" } }) {
      Name
      id
    }
  }
`;
const GetManagers = gql`
  {
    User(where: { Role: { _eq: "Manager" } }) {
      Name
      id
    }
  }
`;

const GetUsersOn = gql`
  {
    User(
      where: {
        todo_users: {
          Todo: { Member: { _eq: "Employee" }, Type: { _eq: "Onboarding" } }
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
const GetTodos = gql`
  {
    Todo(where: { Member: { _eq: "Employee" }, Type: { _eq: "Onboarding" } }) {
      id
      Description
      Name
    }
  }
`;
const GetTodoshr = gql`
  {
    Todo(where: { Member: { _eq: "Manager" }, Type: { _eq: "Onboarding" } }) {
      id
      Description
      Name
    }
  }
`;
const GetTodohr = gql`
  {
    Todo(where: { Member: { _eq: "HR" }, Type: { _eq: "Onboarding" } }) {
      id
      Description
      Name
    }
  }
`;

const AddNotification = gql`
  mutation MyMutation($user_id: Int!) {
    insert_notification_one(
      object: {
        user_id: $user_id
        name: "Onboarding"
        seen: false
        description: "you are assigned to your onboarding tasks. "
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
        Type: "Onboarding"
        Member: $Member
      }
    ) {
      Description
      Date
      Name
    }
  }
`;
const deleteTodo = gql`
  mutation MyMutation($id: Int!) {
    delete_Todo_by_pk(id: $id) {
      id
    }
  }
`;

export const getStaticProps = async () => {
  const hasura = hasuraUserClient();

  const { User } = await hasura.request(GetUsers);
  const HR = await hasura.request(GetUserHR);
  const Manager = await hasura.request(GetManagers);
  const initialData = await hasura.request(GetTodos);
  const UserOn = await hasura.request(GetUsersOn);
  const Todoshr = await hasuraAdminClient.request(GetTodoshr);
  const Todohr = await hasuraAdminClient.request(GetTodohr);
  console.log(HR);
  console.log(User);

  return {
    props: {
      User,
      initialData,
      UserOn,
      Todoshr,
      Todohr,
      HR,
      Manager,
    },
  };
};

export default function Todos({
  User,
  initialData,
  UserOn,
  Todoshr,
  Todohr,
  HR,
  Manager,
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
  const { updateUser } = useAuthDispatch();
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
  const {
    register: register4,
    errors: errors4,
    handleSubmit: handleSubmit4,
  } = useForm();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;
  const { data } = useSWR(GetTodos, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const { datal } = useSWR(GetTodoshr, (query) => hasura.request(query), {
    Todoshr,
    revalidateOnMount: true,
  });
  console.log(UserOn);
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
    if (
      confirm(`are you sure you want to assign those tasks to this employee`)
    ) {
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

  const AssignHR = async ({ user_id }) => {
    const u_id = user_id;
    const t = Todohr.Todo.map(({ id }) => {
      return { todo_id: id, user_id: u_id, completed: false };
    });
    const query = gql`
      mutation insert_todo_user($objects: [todo_user_insert_input!]!) {
        insert_todo_user(objects: $objects) {
          affected_rows
        }
      }
    `;
    if (
      confirm(`are you sure you want to assign those tasks to this employee`)
    ) {
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

  const AssignManager = async ({ user_id }) => {
    const u_id = user_id;
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
    if (
      confirm(`are you sure you want to assign those tasks to this employee`)
    ) {
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
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div class="profile-content">
          <div class="row">
            {" "}
            <div class="col-md-8">
              <div class="portlet light ">
                <div class="portlet-body">
                  <h3> onboarding Tasks</h3>
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
                    <li>
                      <a href="#tab_1_3" data-toggle="tab">
                        Manager
                      </a>
                    </li>
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
                              {" "}
                              <th> title </th>
                              <th> task </th> <th> Edit </th>
                              <th> Delete </th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th> </th> <th> </th>
                              <th> </th> <th> </th>
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
                        <div class="portlet light ">
                          <div class="portlet-body">
                            <h3>Assign tasks to:</h3>{" "}
                            <form onSubmit={handleSubmit2(Assign)}>
                              {" "}
                              <div class="form-group">
                                <select
                                  name="user_id"
                                  id="user_id"
                                  ref={register2}
                                  required
                                  className="form-control select2 "
                                >
                                  {User.map(({ id, Name }) => (
                                    <React.Fragment key={id}>
                                      {" "}
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
                                  Assign
                                </button>
                              </div>{" "}
                            </form>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="tab-pane " id="tab_1_2">
                      <div class="table-container">
                        <table
                          class="table table-striped table-bordered table-hover"
                          id="sample_3"
                        >
                          <thead>
                            <tr>
                              {" "}
                              <th> title </th>
                              <th> task </th> <th> Edit </th>
                              <th> Delete </th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th> </th> <th> </th>
                              <th> </th> <th> </th>
                            </tr>
                          </tfoot>
                          <tbody>
                            {Todohr.Todo.map(({ id, Description, Name }) => {
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
                      </div>
                      <div class="portlet light ">
                        <div class="portlet-body">
                          <h3>Assign tasks to:</h3>{" "}
                          <form onSubmit={handleSubmit3(AssignHR)}>
                            {" "}
                            <div class="form-group">
                              <select
                                name="user_id"
                                id="user_id"
                                ref={register3}
                                required
                                className="form-control select2 "
                              >
                                {HR.User.map(({ id, Name }) => (
                                  <React.Fragment key={id}>
                                    {" "}
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
                                Assign
                              </button>
                            </div>{" "}
                          </form>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="tab-pane " id="tab_1_3">
                      <div class="table-container">
                        <table
                          class="table table-striped table-bordered table-hover"
                          id="sample_3"
                        >
                          <thead>
                            <tr>
                              {" "}
                              <th> title </th>
                              <th> task </th> <th> Edit </th>
                              <th> Delete </th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th> </th> <th> </th>
                              <th> </th> <th> </th>
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
                        <div class="portlet light ">
                          <div class="portlet-body">
                            <h3>Assign tasks to:</h3>{" "}
                            <form onSubmit={handleSubmit4(AssignManager)}>
                              {" "}
                              <div class="form-group">
                                <select
                                  name="user_id"
                                  id="user_id"
                                  ref={register4}
                                  required
                                  className="form-control select2 "
                                >
                                  {Manager.User.map(({ id, Name }) => (
                                    <React.Fragment key={id}>
                                      {" "}
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
                                  Assign
                                </button>
                              </div>{" "}
                            </form>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portlet light ">
                <div class="portlet-body">
                  <h3>Add new onboarding Task</h3>

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
                        <option>Manager</option>
                        <option>Employee</option>
                        <option>HR</option>
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
              </div>
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
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
