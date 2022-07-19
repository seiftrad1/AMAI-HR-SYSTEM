import useSWR, { mutate } from "swr";
import { useForm } from "react-hook-form";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { hasuraUserClient } from "../../lib/hasura-user-client";
import { useState } from "react";

const from = new Date().toISOString();
const Users = gql`
  query MyQuery {
    User {
      id
    }
  }
`;
const getManagerIDs = gql`
  query MyQuery($id: Int!) {
    User_by_pk(id: $id) {
      id
      manager_id
    }
  }
`;
const GetTasks = gql`
  query MyQuery($id: Int!) {
    Task(where: { user_id: { _eq: $id } }) {
      id
      name
      user_id
      Description
      completed
      Project {
        Title
        id
        status
      }
    }
    Task_aggregate(
      where: { user_id: { _eq: $id }, completed: { _eq: false } }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const Updatecompleted = gql`
  mutation MyMutation($id: Int!) {
    update_Task_by_pk(pk_columns: { id: $id }, _set: { completed: true }) {
      completed
    }
  }
`;
const InsertTask = gql`
  mutation InsertTask(
    $Description: String!
    $name: String!
    $from: timestamptz!
    $user_id: Int!
  ) {
    insert_Task_one(
      object: {
        Description: $Description
        name: $name
        Date: $from
        user_id: $user_id
        completed: false
      }
    ) {
      Description
      Date
      name
      user_id
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { User } = await hasura.request(Users);

  return {
    paths: User.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const hasura = hasuraUserClient();
  const { id } = params;

  const initialData = await hasura.request(GetTasks, { id });
  const manager = await hasura.request(getManagerIDs, { id });

  return {
    props: {
      initialData,
      manager,
    },
    revalidate: 1,
  };
};
const AddNotification = gql`
  mutation MyMutation($manager_id: Int!) {
    insert_notification_one(
      object: {
        name: "Project Task"
        seen: false
        description: " tasks completed"
        user_id: $manager_id
      }
    ) {
      seen
      name
      id
      description
      user_id
    }
  }
`;
export default function Task({ initialData, manager }) {
  const hasura = hasuraUserClient();
  const { query } = useRouter();
  const { id } = query;
  const [acc, setAcc] = useState(true);

  const { data } = useSWR(
    [GetTasks, id],

    (query, id) => hasura.request(query),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  const view = () => {
    if (data.Task_aggregate.aggregate.count === 0) {
      setAcc(false);
    } else
      alert(
        "oh wait there buddy ,you didn't complete all the tasks , cmon you can do it ! finish it all !"
      );
  };
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const Complete = async ({ id }) => {
    try {
      const { update_Task_by_pk } = await hasura.request(Updatecompleted, {
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const refresh = () => {
    window.location.reload();
  };
  const onSubmit = async ({ Description, name }) => {
    try {
      const { insert_Task_one } = await hasura.request(InsertTask, {
        Description,
        from,
        name,
        user_id: id,
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const whencompleted = async () => {
    const manager_id = manager.User_by_pk.manager_id;
    if (confirm("want to move forward with your request ? ")) {
      try {
        const { insert_notification } = await hasura.request(AddNotification, {
          manager_id,
        });
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    } else return null;
  };
  return (
    <div className="page-content-wrapper">
      {" "}
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="profile-content">
          {" "}
          <div className="row">
            <div className="col-md-12">
              {" "}
              {data.Task_aggregate.aggregate.count === 0 ? (
                <div className="col-md-9">
                  <div className="card card-white">
                    <div className="card-body">
                      {" "}
                      <div className="portlet-title">
                        {" "}
                        <div className="col-md-12">
                          <div className="col-md-10">
                            <div className="caption font-dark">
                              <i className="icon-settings font-dark"></i>
                              <span className="caption-subject bold uppercase">
                                {" "}
                                Project tasks
                              </span>
                            </div>{" "}
                          </div>
                          <div className="col-md-2">
                            <div className="btn-group">
                              {" "}
                              <a
                                onClick={() => refresh()}
                                id="sample_editable_1_2_new"
                                className="btn sbold green"
                              >
                                {" "}
                                refresh <i className="fa fa-refresh"></i>
                              </a>
                            </div>
                          </div>{" "}
                          <hr /> <hr />
                        </div>
                      </div>{" "}
                      <p>
                        Nothing to show here , oh wait you already completed
                        your tasks ! inform the <strong> ADMIN</strong> on your
                        right side !
                      </p>
                      <div>
                        <img
                          style={{
                            display: "block",
                            objectFit: "cover",
                            margin: "auto",
                            width: 1280,
                            height: 770,
                          }}
                          src="../nothing.png"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-md-9">
                  <div className="card card-white">
                    <div className="card-body" style={{ paddingBottom: 270 }}>
                      {" "}
                      <div className="portlet-title">
                        <div className="row">
                          <div className="col-md-10">
                            <div className="caption font-dark">
                              <i className="icon-settings font-dark"></i>
                              <span className="caption-subject bold uppercase">
                                {" "}
                                Project tasks
                              </span>
                            </div>{" "}
                          </div>{" "}
                          <div className="col-md-2">
                            <div className="btn-group">
                              {" "}
                              <a
                                onClick={() => refresh()}
                                id="sample_editable_1_2_new"
                                className="btn sbold green"
                              >
                                {" "}
                                refresh <i className="fa fa-refresh"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <hr />
                      <ul className="nav nav-pills todo-nav">
                        <li
                          role="presentation"
                          className="nav-item all-task active"
                        >
                          <a href="#" className="nav-link">
                            All
                          </a>
                        </li>
                        <li
                          role="presentation"
                          className="nav-item active-task"
                        >
                          <a href="#" className="nav-link">
                            Active
                          </a>
                        </li>
                        <li
                          role="presentation"
                          className="nav-item completed-task"
                        >
                          <a href="#" className="nav-link">
                            Completed
                          </a>
                        </li>
                      </ul>{" "}
                      <div>
                        {data.Task.map(
                          ({ id, completed, name, Description, Project }) => {
                            return (
                              <div key={id} className="todo-list">
                                {completed === false ? (
                                  <div className="todo-item">
                                    <div className="checker">
                                      <span className="">
                                        <input
                                          name="Completed"
                                          type="checkbox"
                                          onChange={() => Complete({ id })}
                                        />
                                      </span>
                                    </div>{" "}
                                    {""}
                                    <span>
                                      {name}: {Description}
                                    </span>
                                    <div style={{ marginLeft: 23 }}>
                                      <strong> Project:</strong>
                                      {Project.Title}
                                    </div>
                                    {/* <a
                              href="javascript:void(0);"
                              className="float-right remove-todo-item"
                              onClick={() => deleteTodo({ id })}
                            >
                              <i className="icon-close"></i>
                            </a> */}
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                              </div>
                            );
                          }
                        )}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="col">
                <div className="col-md-3">
                  <div className="portlet light ">
                    <div className="portlet-body" style={{ paddingBottom: 70 }}>
                      {" "}
                      {acc ? (
                        <div className="card-body">
                          {" "}
                          <div className="portlet-title">
                            <span className="caption-subject bold uppercase">
                              inform manager
                            </span>
                          </div>{" "}
                          <hr />
                          <div className="col-md-6">
                            Completed? {""}
                            <button
                              className=" btn btn-circle blue btn-sm "
                              type="submit"
                              onClick={() => view()}
                            >
                              yes
                            </button>
                          </div>
                          <div className="col-md-6">
                            <button
                              onClick={() => whencompleted()}
                              className="btn btn-primary btn-sm"
                              type="submit"
                              disabled
                            >
                              {" "}
                              ping admin
                            </button>
                          </div>
                          <img
                            style={{
                              display: "block",
                              objectFit: "cover",
                              width: "auto",
                              height: 200,
                              margin: "auto",
                            }}
                            src="../yes.png"
                          ></img>
                        </div>
                      ) : (
                        <div className="card-body">
                          {" "}
                          <div className="portlet-title">
                            <span className="caption-subject bold uppercase">
                              inform admin
                            </span>
                          </div>{" "}
                          <hr />
                          <div className="col-md-6">
                            {" "}
                            Not yet? {""}
                            <button
                              className=" btn btn-circle red btn-sm "
                              type="submit"
                              onClick={() => dontshow()}
                            >
                              {" "}
                              no
                            </button>{" "}
                          </div>
                          <div className="col-md-6">
                            <button
                              onClick={() => whencompleted()}
                              className="btn btn-primary btn-sm active"
                              type="submit"
                            >
                              {" "}
                              ping admin
                            </button>
                          </div>{" "}
                          <img
                            style={{
                              display: "block",
                              objectFit: "cover",
                              width: "auto",
                              height: 200,
                            }}
                            src="../no.png"
                          ></img>
                        </div>
                      )}
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-3">
                  <div className="portlet light ">
                    <div className="portlet-body" style={{ paddingBottom: 70 }}>
                      {" "}
                      {data.Task_aggregate.aggregate.count === 0 ? (
                        <div className="card-body">
                          {" "}
                          <div className="portlet-title">
                            <span className="caption-subject bold uppercase">
                              More info
                            </span>
                          </div>{" "}
                          <hr />
                          <div>
                            hohohoho you completed all the tasks !! congaaatz
                          </div>
                          <img
                            style={{
                              display: "block",
                              objectFit: "cover",
                              width: "auto",
                              height: 200,
                              margin: "auto",
                            }}
                            src="../yees.png"
                          ></img>
                        </div>
                      ) : (
                        <div className="card-body">
                          {" "}
                          <div className="portlet-title">
                            <span className="caption-subject bold uppercase">
                              More info
                            </span>
                          </div>{" "}
                          <hr />
                          <div>
                            you still have{" "}
                            <strong>
                              {" "}
                              {data.Task_aggregate.aggregate.count}{" "}
                            </strong>{" "}
                            task to go !!! lets do it
                          </div>{" "}
                          <img
                            style={{
                              display: "block",
                              objectFit: "cover",
                              width: "auto",
                              height: 200,
                            }}
                            src="../notyet.png"
                          ></img>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
