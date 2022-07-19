import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { gql, hasuraUserClient } from "../../lib/hasura-user-client";
import { format, parseISO } from "date-fns";
import { mutate } from "swr";

const from = new Date().toISOString();

const getProjectsIds = gql`
  {
    Project {
      id
      Title
      Description
      file
      assigned
    }
  }
`;
const GetUsers = gql`
  query MyQuery {
    User {
      id
      Name
      Domain
      Avatar
    }
  }
`;
const insertmultiple = gql`
  mutation MyMutation(
    $Description: String!
    $Project_id: Int!
    $name: String!
    $from: timestamptz!
  ) {
    insert_Task(
      objects: {
        Date: $from
        Description: $Description
        completed: false
        Project_id: $Project_id
        name: $name
      }
    ) {
      affected_rows
    }
  }
`;
const GetUsersbyproject = gql`
  query MyQuery($id: Int!) {
    User(
      where: {
        _not: { project_assignments: { Task: { Project_id: { _eq: $id } } } }
      }
    ) {
      Name
      Avatar
      Last_Name
      email
    }
  }
`;
const getTasks = gql`
  query MyQuery($id: Int!) {
    Task(where: { Project_id: { _eq: $id } }) {
      id
      Description
      Date
      completed
      name
      User {
        Avatar
        email
      }
    }
  }
`;

const GetUsersWorkingOnthisProject = gql`
  query MyQuery($id: Int!) {
    User(
      where: { project_assignments: { Task: { Project_id: { _eq: $id } } } }
    ) {
      id
      Name
      Domain
      Avatar
    }
  }
`;
const GetProjectByID = gql`
  query GetProjectByID($id: Int!) {
    Project_by_pk(id: $id) {
      id
      Title
      Description
      company_name
      income
      file
      assigned
      status
    }
  }
`;
const assignu = gql`
  mutation MyMutation($project_id: Int!, $user_id: Int!) {
    insert_user_project_one(
      object: { project_id: $project_id, user_id: $user_id }
    ) {
      project_id
      user_id
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { Project } = await hasura.request(getProjectsIds);

  return {
    paths: Project.map(({ id }) => ({
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

  const initialData = await hasura.request(GetProjectByID, { id });
  const dataU = await hasura.request(GetUsers);
  const tasks = await hasura.request(getTasks, { id });

  return {
    props: {
      initialData,
      dataU,

      tasks,
    },
    revalidate: 1,
  };
};

export default function AssignP({ initialData, dataU, dataz, dataf, tasks }) {
  const hasura = hasuraUserClient();
  const { query } = useRouter();
  const router = useRouter();
  const { idP } = query;
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
    defaultValues: { ...defaultValues },
  } = useForm();
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
    formState: { isSubmitting2 },
  } = useForm();

  const onSubmit = async ({ Description, name, user_id }) => {
    try {
      const { insert_Task_one } = await hasura.request(insertmultiple, {
        Description,
        from,
        name,
        Project_id: query.id,
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteATodo = async (id) => {
    const query = gql`
      mutation delete_Candidate($id: Int!) {
        delete_Task(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;
    if (confirm("are you sure you want to delete this task ")) {
      try {
        await hasura.request(query, { id });
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const UpdateProject = gql`
    mutation update_Candidate_by_pk($id: Int!) {
      update_Project_by_pk(pk_columns: { id: $id }, _set: { status: 2 }) {
        id
        Title
        Description
        created_at
        delivery_date
        assigned
        contact_date
        company_name
        type
        income
      }
    }
  `;
  const deliver = async () => {
    try {
      const id = initialData.Project_by_pk.id;
      const { update_Project_by_pk } = await hasura.request(UpdateProject, {
        id,
      });

      mutate();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        {" "}
        <div className="col-md-12">
          <div className="col-md-6">
            <div className="portlet light portlet-fit bordered">
              <div className="portlet-title">
                <div className="caption">
                  <i className="icon-share font-green"></i>
                  <span className="caption-subject font-green bold uppercase">
                    Project details
                  </span>
                </div>
              </div>
              <div className="portlet-body" style={{ paddingBottom: 150 }}>
                <div className="pricing-content-1">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="price-column-container border-active">
                        <div className="price-table-head bg-blue">
                          <h2 className="no-margin">Client</h2>
                        </div>
                        <div className="arrow-down border-top-blue"></div>
                        <div className="price-table-pricing">
                          <h3>
                            {/* <sup className="price-sign">£</sup> */}
                            {initialData.Project_by_pk.company_name}
                          </h3>
                        </div>
                        {/* <div className="price-table-content">
                      <div className="row mobile-padding">
                        <div className="col-xs-3 text-right mobile-padding">
                          <i className="icon-user"></i>
                        </div>
                        <div className="col-xs-9 text-left mobile-padding">
                          3 Members
                        </div>
                      </div>
                    </div> */}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="price-column-container border-active">
                        <div className="price-table-head bg-red">
                          <h2 className="no-margin">Title</h2>
                        </div>
                        <div className="arrow-down border-top-red"></div>
                        <div className="price-table-pricing">
                          <h3>{initialData.Project_by_pk.Title}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="price-column-container border-active">
                        <div className="price-table-head bg-purple">
                          <h2 className="no-margin">Files</h2>

                          <div
                            id="myModal"
                            className="modal fade"
                            role="dialog"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <a
                                    href="javascript:;"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                  ></a>
                                  <h4 className="modal-title">Pdf file</h4>
                                </div>
                                <div className="modal-body">
                                  {" "}
                                  <embed
                                    src={`../../${initialData.Project_by_pk.file}`}
                                    type="application/pdf"
                                    width="570"
                                    height="800"
                                    frameborder="0"
                                    allowfullscreen
                                  />
                                </div>
                                <div className="modal-footer">
                                  <a
                                    href="javascript:;"
                                    className="btn grey-salsa btn-outline"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </a>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div className="arrow-down border-top-purple"></div>
                        <div className="margin-top-20 profile-desc-link">
                          <img
                            src="../../assets/global/img/pdf.png"
                            href="#myModal"
                            style={{ maxWidth: 35 }}
                          />{" "}
                          {initialData.Project_by_pk.Title} <br />
                          <br />
                          <a
                            href="#myModal"
                            role="button"
                            className="btn red btn-outline"
                            data-toggle="modal"
                          >
                            {" "}
                            View file{" "}
                          </a>{" "}
                          <br />
                          <br />
                          <a
                            href={`../../${initialData.Project_by_pk.file}`}
                            className="fa fa-download"
                            download
                          >
                            download{" "}
                          </a>
                        </div>
                        <div className="price-table-pricing">
                          <h3>
                            <sup className="price-sign"></sup>
                            {/* {initialData.Project_by_pk.company_name} */}
                          </h3>
                        </div>
                        <div className="price-table-content"></div>
                        <div className="arrow-down arrow-grey"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-6">
            <div className="tab-content">
              <div className="tab-pane active" id="tab_1_1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="portlet light portlet-fit bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className=" icon-layers font-green"></i>
                          <span className="caption-subject font-green bold uppercase">
                            Task Management
                          </span>
                        </div>
                      </div>{" "}
                      <div className="portlet-body">
                        <div className="mt-element-card mt-card-round mt-element-overlay">
                          <div className="row">
                            {" "}
                            <div className="col-md-12">
                              <div className="portlet light ">
                                <div className="portlet-body">
                                  <div className="tab-content">
                                    <div
                                      className="tab-pane active"
                                      id="tab_1_1"
                                    >
                                      <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                          <label className="control-label">
                                            Name
                                          </label>
                                          <input
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Todo Name"
                                            className="form-control"
                                            ref={register({
                                              required:
                                                "You must select a category for your thread",
                                            })}
                                          />{" "}
                                        </div>
                                        <div className="form-group">
                                          <label className="control-label">
                                            Description
                                          </label>
                                          <textarea
                                            name="Description"
                                            id="Description"
                                            type="textarea"
                                            placeholder="Description"
                                            className="form-control"
                                            ref={register({
                                              required:
                                                "You must select a category for your thread",
                                            })}
                                          />{" "}
                                        </div>
                                        {/* <select
                                  name="user_id"
                                  id="user_id"
                                  ref={register({
                                    required:
                                      "You must select a category for your thread",
                                  })}
                                  className="form-control select2"
                                  aria-label="Default select example"
                                >
                                  {dataz.User.map(({ id, Name }) => (
                                    <option value={id}>{Name}</option>
                                  ))}
                                </select>{" "} */}
                                        <br></br>
                                        <div className="margiv-top-10 col-md-6">
                                          <button
                                            type="submit"
                                            className="btn green"
                                            disabled={isSubmitting}
                                          >
                                            Submit
                                          </button>{" "}
                                        </div>
                                      </form>{" "}
                                      <form onSubmit={handleSubmit2(deliver)}>
                                        no more tasks? Deliver project{" "}
                                        <button
                                          type="submit"
                                          className="btn red"
                                          disabled={isSubmitting2}
                                        >
                                          Deliver
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>

                <div className="portlet light bordered">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="icon-social-dribbble font-green"></i>
                      <span className="caption-subject font-green bold uppercase">
                        Tasks
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div className="table-scrollable">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th> Title </th>
                            <th> Date </th>
                            <th> User </th> <th> status </th>
                            <th> Edit </th>
                            <th> Delete </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tasks.Task.map(
                            ({
                              id,
                              name,
                              Description,
                              Date,
                              User,
                              completed,
                            }) => {
                              const formattedJoinedAt = format(
                                parseISO(Date),
                                "yyyy-MM-dd"
                              );

                              return (
                                <tr key={id}>
                                  <td> {name} </td>
                                  <td> {formattedJoinedAt} </td>
                                  {User ? (
                                    <td>
                                      {User.Avatar ? (
                                        <div>
                                          <img
                                            src={`../../${User.Avatar}`}
                                            style={{
                                              display: "inline",
                                              width: 38,
                                              height: 38,
                                              objectFit: "cover",
                                              borderRadius: "50%",
                                            }}
                                            alt=""
                                          />
                                          {User.email}
                                        </div>
                                      ) : (
                                        <div>
                                          <img
                                            src={`../profile.png`}
                                            style={{
                                              display: "inline",
                                              width: 38,
                                              height: 38,
                                              borderRadius: "50%",
                                              objectFit: "cover",
                                            }}
                                          />{" "}
                                          {User.email}
                                        </div>
                                      )}
                                    </td>
                                  ) : (
                                    <td>
                                      {" "}
                                      <span className="label label-sm label-danger">
                                        {" "}
                                        not assigned yet{" "}
                                      </span>
                                    </td>
                                  )}{" "}
                                  {completed ? (
                                    <td>
                                      {" "}
                                      <span className="label label-sm label-success">
                                        {" "}
                                        completed
                                      </span>
                                    </td>
                                  ) : (
                                    <td>
                                      {" "}
                                      <span className="label label-sm label-warning">
                                        {" "}
                                        in progress{" "}
                                      </span>
                                    </td>
                                  )}
                                  <td>
                                    {" "}
                                    <Link href={`/AssignTask/${id}`}>
                                      <a>Edit</a>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <a
                                      className="closeBtn"
                                      onClick={() => deleteATodo(id)}
                                    >
                                      Delete task
                                    </a>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
