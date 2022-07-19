import { useRouter } from "next/router";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { gql, hasuraUserClient } from "../../lib/hasura-user-client";
import { useAuthState, useAuthDispatch } from "../../context/auth";
import { useEffect } from "react";

const getTaskIds = gql`
  {
    Task {
      id
      name
      Description
      Date
      user_id
      Project_id
    }
  }
`;
const getTaskById = gql`
  query GetTaskByID($id: Int!) {
    Task_by_pk(id: $id) {
      id
      name
      Description
      Date
      user_id
      User {
        Avatar
        Name
        email
        Domain
      }
      Project_id
    }
  }
`;
const GetUsersWithnT = gql`
  query getusers {
    User(where: { _not: { Tasks: {} } }) {
      id
      email
      Name
      Avatar
      Domain
    }
  }
`;
const GetAllUsers = gql`
  query getusers {
    User {
      id
      email
      Name
      Avatar
      Domain
      Tasks_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
const UpdateTask = gql`
  mutation update_Task_by_pk($id: Int!, $name: String!, $Description: String!) {
    update_Task_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, Description: $Description }
    ) {
      id
      name
      Description
    }
  }
`;
const UpdateProject = gql`
  mutation update_Project_by_pk($id: Int!) {
    update_Project_by_pk(pk_columns: { id: $id }, _set: { status: 1 }) {
      id
      assigned
    }
  }
`;
const UpdateUser = gql`
  mutation update_Candidate_by_pk($id: Int!, $user_id: Int!) {
    update_Task_by_pk(pk_columns: { id: $id }, _set: { user_id: $user_id }) {
      id
      user_id
    }
  }
`;
const AddNotification = gql`
  mutation MyMutation($user_id: Int!) {
    insert_notification_one(
      object: {
        name: "Task"
        seen: false
        description: "you are assigned to a new task , please check your tasks in your profile"
        user_id: $user_id
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
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { Task } = await hasura.request(getTaskIds);

  return {
    paths: Task.map(({ id }) => ({
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

  const initialData = await hasura.request(getTaskById, { id });
  const datauser = await hasura.request(GetUsersWithnT);
  const users = await hasura.request(GetAllUsers);

  return {
    props: {
      initialData,
      datauser,
      users,
    },
    revalidate: 1,
  };
};
export default function AssignTask({ initialData, datauser, users }) {
  const hasura = hasuraUserClient();
  const { query } = useRouter();
  const router = useRouter();
  const { isAuthenticated, user } = useAuthState();

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);
  const { id } = query;
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
    defaultValues: { ...defaultValues },
  } = useForm();
  const { data, mutate } = useSWR(
    [getTaskById, id],
    (query, id) => hasura.request(query, { id }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  const onSubmit = async ({ name, Description }) => {
    try {
      const id = data.Task_by_pk.id;
      const { update_Task_by_pk } = await hasura.request(UpdateTask, {
        id,
        name,
        Description,
      });

      mutate({
        ...data,
        ...update_Task_by_pk,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async ({ id }) => {
    if (
      confirm(
        `are you sure that you want to assign this task to the following employee `
      )
    ) {
      try {
        const t_id = data.Task_by_pk.id;
        const id_p = data.Task_by_pk.Project_id;

        const { update_Task_by_pk } = await hasura.request(UpdateUser, {
          id: t_id,
          user_id: id,
        });
        const { insert_notification_one } = await hasura.request(
          AddNotification,
          { user_id: id }
        );
        const { update_Project_by_pk } = await hasura.request(UpdateProject, {
          id: id_p,
        });
        mutate({
          ...data,
          ...update_Task_by_pk,
        });
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    } else {
      return null;
    }
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="profile-content">
          <div className="row">
            <div className="col-md-12">
              <div className="portlet light ">
                <div className="portlet-body">
                  <div className="row">
                    {" "}
                    <div className="col-md-11">
                      {" "}
                      <h3 className="caption-subject font-blue-madison bold uppercase">
                        Update task information
                      </h3>{" "}
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a href="#tab_1_1" data-toggle="tab">
                            Edit Task
                          </a>
                        </li>
                        <li>
                          <a href="#tab_1_2" data-toggle="tab">
                            Assign Task
                          </a>
                        </li>
                        <li>
                          <a href="#tab_1_3" data-toggle="tab">
                            change User
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  <hr></hr>{" "}
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1_1">
                      {" "}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {" "}
                        <div className="form-group">
                          <label className="control-label">Name</label>
                          <input
                            defaultValue={data.Task_by_pk.name}
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Description"
                            className="form-control"
                            ref={register}
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label className="control-label">Description</label>
                          <input
                            defaultValue={data.Task_by_pk.Description}
                            name="Description"
                            id="Description"
                            type="text"
                            placeholder="Description"
                            className="form-control"
                            ref={register}
                          />{" "}
                        </div>{" "}
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn green"
                            disabled={isSubmitting}
                          >
                            {" "}
                            Save Changes{" "}
                          </button>
                        </div>
                      </form>
                    </div>{" "}
                    <div className="tab-pane " id="tab_1_2">
                      {data.Task_by_pk.user_id ? (
                        <div>
                          {" "}
                          <div
                            style={{ marginRight: 1200 }}
                            className="alert alert-warning alert-dismissible fade in"
                          >
                            <strong>
                              Task already assigned! to{" "}
                              {data.Task_by_pk.User.email}
                            </strong>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                          </div>{" "}
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br> <br></br>
                        </div>
                      ) : (
                        <div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="portlet light portlet-fit bordered">
                                <div className="portlet-title">
                                  <div className="caption">
                                    <i className=" icon-layers font-green"></i>
                                    <span className="caption-subject font-green bold uppercase">
                                      Employees with no tasks
                                    </span>
                                  </div>
                                </div>{" "}
                                <div className="portlet-body">
                                  <div className="mt-element-card mt-card-round mt-element-overlay">
                                    <div className="row">
                                      -{" "}
                                      {datauser.User.map(
                                        ({ id, Name, Domain, Avatar }) => {
                                          return (
                                            <div
                                              className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                                              key={id}
                                            >
                                              <div className="mt-card-item">
                                                <div className="mt-card-avatar mt-overlay-1">
                                                  {Avatar ? (
                                                    <img
                                                      src={`../../${Avatar}`}
                                                      style={{
                                                        display: "inline",
                                                        width: 150,
                                                        height: 170,
                                                        objectFit: "cover",
                                                      }}
                                                      alt=""
                                                    />
                                                  ) : (
                                                    <img
                                                      src={`../profile.png`}
                                                      style={{
                                                        display: "inline",
                                                        width: 150,
                                                        height: 170,
                                                        objectFit: "cover",
                                                      }}
                                                    />
                                                  )}{" "}
                                                  <div className="mt-overlay">
                                                    <ul className="mt-info">
                                                      <li>
                                                        <Link
                                                          className="btn default btn-outline"
                                                          href={`/Profile/${id}`}
                                                        >
                                                          <i className="icon-magnifier"></i>
                                                        </Link>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>{" "}
                                                <div className="mt-card-content">
                                                  <h3 className="mt-card-name">
                                                    {Name}
                                                  </h3>
                                                  <p className="mt-card-desc font-grey-mint">
                                                    {Domain}
                                                  </p>{" "}
                                                  <p className="mt-card-desc font-grey-mint">
                                                    Tasks:{" "}
                                                  </p>
                                                  <div className="mt-card-social">
                                                    <ul>
                                                      <li>
                                                        <a href="javascript:;">
                                                          <i className="icon-social-facebook"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="javascript:;">
                                                          <i className="icon-social-twitter"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="javascript:;">
                                                          <i className="icon-social-dribbble"></i>
                                                        </a>
                                                      </li>
                                                    </ul>{" "}
                                                    <div className="price-table-footer">
                                                      <button
                                                        type="button"
                                                        className="btn grey-salsa btn-outline sbold uppercase price-button"
                                                        onClick={() =>
                                                          updateUser({ id })
                                                        }
                                                      >
                                                        Hire me!
                                                      </button>
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
                          </div>
                        </div>
                      )}
                    </div>{" "}
                    <div className="tab-pane " id="tab_1_3">
                      {" "}
                      <div>
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <h1>Emlpoyees with no tasks assigned</h1>
                              <div className="portlet-body">
                                <div className="mt-element-card mt-card-round mt-element-overlay">
                                  {datauser.User.map(
                                    ({ id, Name, Domain, Avatar }) => {
                                      return (
                                        <div
                                          className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                                          key={id}
                                        >
                                          <div className="mt-card-item">
                                            <div className="mt-card-avatar mt-overlay-1">
                                              {Avatar ? (
                                                <img
                                                  src={`../../${Avatar}`}
                                                  style={{
                                                    display: "inline",
                                                    width: 150,
                                                    height: 170,
                                                    objectFit: "cover",
                                                  }}
                                                  alt=""
                                                />
                                              ) : (
                                                <img
                                                  src={`../profile.png`}
                                                  style={{
                                                    display: "inline",
                                                    width: 150,
                                                    height: 170,
                                                    objectFit: "cover",
                                                  }}
                                                />
                                              )}{" "}
                                              <div className="mt-overlay">
                                                <ul className="mt-info">
                                                  <li>
                                                    <Link
                                                      className="btn default btn-outline"
                                                      href={`/Profile/${id}`}
                                                    >
                                                      <i className="icon-magnifier"></i>
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>{" "}
                                            <div className="mt-card-content">
                                              <h3 className="mt-card-name">
                                                {Name}
                                              </h3>
                                              <p className="mt-card-desc font-grey-mint">
                                                {Domain}
                                              </p>{" "}
                                              <div className="mt-card-social">
                                                <ul>
                                                  <li>
                                                    <a href="javascript:;">
                                                      <i className="icon-social-facebook"></i>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="javascript:;">
                                                      <i className="icon-social-twitter"></i>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="javascript:;">
                                                      <i className="icon-social-dribbble"></i>
                                                    </a>
                                                  </li>
                                                </ul>{" "}
                                                <div className="price-table-footer">
                                                  <button
                                                    type="button"
                                                    className="btn grey-salsa btn-outline sbold uppercase price-button"
                                                    onClick={() =>
                                                      updateUser({ id })
                                                    }
                                                  >
                                                    Hire me!
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <hr></hr>
                      <div className="row">
                        <div className="col-md-12">
                          <div>
                            <h1>All Employees</h1>
                            <div className="portlet-body">
                              <div className="mt-element-card mt-card-round mt-element-overlay">
                                {users.User.map(
                                  ({
                                    id,
                                    Name,
                                    Domain,
                                    Avatar,
                                    Tasks_aggregate,
                                  }) => {
                                    return (
                                      <div
                                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                                        key={id}
                                      >
                                        <div className="mt-card-item">
                                          <div className="mt-card-avatar mt-overlay-1">
                                            {Avatar ? (
                                              <img
                                                src={`../../${Avatar}`}
                                                style={{
                                                  display: "inline",
                                                  width: 150,
                                                  height: 170,
                                                  objectFit: "cover",
                                                }}
                                                alt=""
                                              />
                                            ) : (
                                              <img
                                                src={`../profile.png`}
                                                style={{
                                                  display: "inline",
                                                  width: 150,
                                                  height: 170,
                                                  objectFit: "cover",
                                                }}
                                              />
                                            )}{" "}
                                            <div className="mt-overlay">
                                              <ul className="mt-info">
                                                <li>
                                                  <Link
                                                    className="btn default btn-outline"
                                                    href={`/Profile/${id}`}
                                                  >
                                                    <i className="icon-magnifier"></i>
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>{" "}
                                          <div className="mt-card-content">
                                            <h3 className="mt-card-name">
                                              {Name}
                                            </h3>
                                            <p className="mt-card-desc font-grey-mint">
                                              {Domain}
                                            </p>{" "}
                                            <p className="mt-card-desc font-grey-mint">
                                              Tasks:
                                              {}
                                              {Tasks_aggregate.aggregate.count}
                                            </p>
                                            <div className="mt-card-social">
                                              <ul>
                                                <li>
                                                  <a href="javascript:;">
                                                    <i className="icon-social-facebook"></i>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:;">
                                                    <i className="icon-social-twitter"></i>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:;">
                                                    <i className="icon-social-dribbble"></i>
                                                  </a>
                                                </li>
                                              </ul>{" "}
                                              <div className="price-table-footer">
                                                <button
                                                  type="button"
                                                  className="btn grey-salsa btn-outline sbold uppercase price-button"
                                                  onClick={() =>
                                                    updateUser({ id })
                                                  }
                                                >
                                                  Hire me!
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
