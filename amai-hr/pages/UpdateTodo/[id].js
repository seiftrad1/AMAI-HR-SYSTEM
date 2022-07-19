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
      where: { Todo: { Type: { _eq: "Onboarding" } }, user_id: { _eq: $id } }
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
        Todo: { Type: { _eq: "Onboarding" } }
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
    User(where: { Role: { _eq: "HR manager" } }) {
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

  console.log(params);

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
    console.log(id);
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
        <div class="profile-content">
          {" "}
          <div class="row">
            <div className="col-md-12">
              {" "}
              {data.todo_user_aggregate.aggregate.count === 0 ? (
                <div class="col-md-9">
                  <div class="card card-white">
                    <div class="card-body">
                      {" "}
                      <div class="portlet-title">
                        <div class="caption font-dark">
                          <i class="icon-settings font-dark"></i>
                          <span class="caption-subject bold uppercase">
                            {" "}
                            Onboarding Todos
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
                <div class="col-md-9">
                  <div class="card card-white">
                    <div class="card-body" style={{ paddingBottom: 270 }}>
                      {" "}
                      <div class="portlet-title">
                        <div class="caption font-dark">
                          <i class="icon-settings font-dark"></i>
                          <span class="caption-subject bold uppercase">
                            {" "}
                            Onboarding Todos
                          </span>
                        </div>
                      </div>{" "}
                      <hr />
                      <ul class="nav nav-pills todo-nav">
                        <li
                          role="presentation"
                          class="nav-item all-task active"
                        >
                          <a href="#" class="nav-link">
                            All
                          </a>
                        </li>
                        <li role="presentation" class="nav-item active-task">
                          <a href="#" class="nav-link">
                            Active
                          </a>
                        </li>
                        <li role="presentation" class="nav-item completed-task">
                          <a href="#" class="nav-link">
                            Completed
                          </a>
                        </li>
                      </ul>{" "}
                      <div>
                        {data.todo_user.map(({ id, completed, Todo }) => {
                          return (
                            <div key={id} class="todo-list">
                              {completed === false ? (
                                <div class="todo-item">
                                  <div class="checker">
                                    <span class="">
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
                              class="float-right remove-todo-item"
                              onClick={() => deleteTodo({ id })}
                            >
                              <i class="icon-close"></i>
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
                  <div class="portlet light ">
                    <div class="portlet-body" style={{ paddingBottom: 70 }}>
                      {" "}
                      {acc ? (
                        <div class="card-body">
                          {" "}
                          <div class="portlet-title">
                            <span class="caption-subject bold uppercase">
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
                        <div class="card-body">
                          {" "}
                          <div class="portlet-title">
                            <span class="caption-subject bold uppercase">
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
                  <div class="portlet light ">
                    <div class="portlet-body" style={{ paddingBottom: 70 }}>
                      {" "}
                      {data.todo_user_aggregate.aggregate.count === 0 ? (
                        <div class="card-body">
                          {" "}
                          <div class="portlet-title">
                            <span class="caption-subject bold uppercase">
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
                        <div class="card-body">
                          {" "}
                          <div class="portlet-title">
                            <span class="caption-subject bold uppercase">
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
