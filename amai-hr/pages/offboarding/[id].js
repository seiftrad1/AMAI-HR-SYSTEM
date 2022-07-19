import useSWR, { mutate } from "swr";
import { useState } from "react";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { hasuraUserClient } from "../../lib/hasura-user-client";
const Todos = gql`
  query MyQuery {
    User {
      id
    }
  }
`;
const GetCandidats = gql`
  query MyQuery($id: Int!) {
    todo_user(
      where: { Todo: { Type: { _eq: "Offboarding" } }, user_id: { _eq: $id } }
    ) {
      id
      todo_id
      completed
      user_id
      Todo {
        Description
        Name
        Type
        id
        Date
      }
    }
    todo_user_aggregate(
      where: {
        Todo: { Type: { _eq: "Offboarding" } }
        completed: { _eq: false }
        user_id: { _eq: $id }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const UpdateCompleted = gql`
  mutation MyMutation($id: Int!) {
    update_todo_user_by_pk(pk_columns: { id: $id }, _set: { completed: true }) {
      id
    }
  }
`;
const getAdminIDs = gql`
  query MyQuery {
    User(where: { Role: { _eq: "Admin" } }) {
      id
    }
  }
`;
const AddNotification = gql`
  mutation MyMutation($objects: [notification_insert_input!]!) {
    insert_notification(objects: $objects) {
      affected_rows
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { User } = await hasura.request(Todos);

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

  const initialData = await hasura.request(GetCandidats, { id });
  const Admins = await hasura.request(getAdminIDs);

  return {
    props: {
      initialData,
      Admins,
    },
    revalidate: 1,
  };
};

export default function TodoList({ initialData, Admins }) {
  const hasura = hasuraUserClient();
  const { query } = useRouter();
  const { id } = query;
  const [acc, setAcc] = useState(true);

  const { data } = useSWR(
    [GetCandidats, id],

    (query, id) => hasura.request(query),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  const view = () => {
    if (data.todo_user_aggregate.aggregate.count === 0) {
      setAcc(false);
    } else
      alert(
        "oh wait there buddy ,you didn't complete all the tasks , cmon you can do it ! finish it all !"
      );
  };
  const dontshow = () => {
    setAcc(true);
  };
  const Complete = async ({ id }) => {
    try {
      const { update_todo_user_by_pk } = await hasura.request(UpdateCompleted, {
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const whencompleted = async () => {
    const t = Admins.User.map(({ id }) => {
      return {
        name: "onboarding tasks",
        description: "onboarding tasks completed",
        user_id: id,
        seen: false,
      };
    });
    if (confirm("want to move forward with your request ? ")) {
      try {
        const { insert_notification } = await hasura.request(AddNotification, {
          objects: t,
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
              {data.todo_user_aggregate.aggregate.count === 0 ? (
                <div className="col-md-9">
                  <div className="card card-white">
                    <div className="card-body">
                      {" "}
                      <div className="portlet-title">
                        <div className="caption font-dark">
                          <i className="icon-settings font-dark"></i>
                          <span className="caption-subject bold uppercase">
                            {" "}
                            Offboarding Todos
                          </span>
                        </div>
                      </div>{" "}
                      <hr />
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
                        <div className="caption font-dark">
                          <i className="icon-settings font-dark"></i>
                          <span className="caption-subject bold uppercase">
                            {" "}
                            Offboarding Todos
                          </span>
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
                        {data.todo_user.map(({ id, completed, Todo }) => {
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
                                    {Todo.Name}: {Todo.Description}
                                  </span>
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
                        })}{" "}
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
                              inform admin
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
                              ping Manager
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
                              ping Manager
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
                      {data.todo_user_aggregate.aggregate.count === 0 ? (
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
                              {data.todo_user_aggregate.aggregate.count}
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
