import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { useAuthState } from "../../context/auth";
import { useEffect } from "react";
import gql from "graphql-tag";
import Link from "next/link";
import { hasuraUserClient } from "../../lib/hasura-user-client";
import { format, parseISO } from "date-fns";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import { useForm } from "react-hook-form";

const GetProjects = gql`
  query MyQuery {
    Project {
      id
      Title
      Description
      created_at
      delivery_date
      status
      company_name
    }
  }
`;
export const getStaticProps = async () => {
  const hasura = hasuraUserClient();

  const initialData = await hasura.request(GetProjects);

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};

export default function ListProject({ initialData }) {
  const hasura = hasuraUserClient();
  const router = useRouter();
  const { isAuthenticated, user } = useAuthState();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const { data } = useSWR(GetProjects, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const deleteProject = async (id) => {
    const query = gql`
      mutation delete_Project($id: Int!) {
        delete_Project(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;
    if (confirm(`are you sure you want to delete this project? `)) {
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
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  const onSubmit = async ({ datetime }) => {
    console.log(datetime);
  };
  const addproject = () => {
    const pathname = `/Project`;
    location.replace(pathname);
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="portlet light bordered">
              <div className="portlet-title">
                <div className="row">
                  {" "}
                  <div className="col-md-11">
                    <h3> Projects List</h3>
                  </div>
                  <div className="col-md-1">
                    <div className="btn-group">
                      {" "}
                      <a
                        id="sample_editable_1_2_new"
                        className="btn sbold green"
                        onClick={() => addproject()}
                      >
                        Add New <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portlet-body">
                <table
                  className="table table-striped table-bordered table-hover table-checkable order-column"
                  id="sample_1_2"
                >
                  <thead>
                    <tr>
                      {" "}
                      <th> Client </th>
                      <th> Title </th>
                      <th> Creation date </th>
                      <th> Actions </th>
                      <th> edit </th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th> </th>
                      <th> </th>
                      <th> </th>
                      <th> </th>
                      <th> </th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {data.Project.map(
                      ({ id, Title, company_name, created_at }) => {
                        const formattedJoinedAt = format(
                          parseISO(created_at),
                          "yyyy-MM-dd"
                        );

                        return (
                          <tr key={id} className="odd gradeX">
                            {" "}
                            <td>{company_name} </td>
                            <td>{Title}</td>
                            <td className="center"> {formattedJoinedAt} </td>
                            <td>
                              <div className="btn-group">
                                <button
                                  className="btn btn-xs green dropdown-toggle"
                                  type="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  {" "}
                                  Actions
                                  <i className="fa fa-angle-down"></i>
                                </button>
                                <ul
                                  className="dropdown-menu pull-left"
                                  role="menu"
                                >
                                  <li>
                                    <Link href={`/Assign/${id}`}>
                                      <a>More info & assignment </a>
                                    </Link>
                                  </li>
                                  <li className="divider"> </li>{" "}
                                  <li>
                                    <a
                                      className="closeBtn"
                                      onClick={() => deleteProject(id)}
                                    >
                                      Delete Project
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>{" "}
                            <td>
                              {" "}
                              <Link
                                className="btn btn-circle btn-icon-only btn-default"
                                href={`/Project/${id}`}
                              >
                                <i className="icon-wrench"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>{" "}
              </div>{" "}
            </div>
          </div>
        </div>{" "}
        <div className="portlet light portlet-fit portlet-datatable bordered">
          <div className="portlet-title">
            <div className="caption">
              <i className="icon-settings font-green"></i>
              <span className="caption-subject font-green sbold uppercase">
                Tools
              </span>
            </div>
            <div className="actions">
              <div className="btn-group">
                <a
                  className="btn red btn-outline btn-circle"
                  href="javascript:;"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-share"></i>
                  <span className="hidden-xs"> Trigger Tools </span>
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu pull-right" id="sample_3_tools">
                  <li>
                    <a
                      href="javascript:;"
                      data-action="0"
                      className="tool-action"
                    >
                      <i className="icon-printer"></i> Print
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      data-action="1"
                      className="tool-action"
                    >
                      <i className="icon-check"></i> Copy
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      data-action="2"
                      className="tool-action"
                    >
                      <i className="icon-doc"></i> PDF
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      data-action="3"
                      className="tool-action"
                    >
                      <i className="icon-paper-clip"></i> Excel
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      data-action="4"
                      className="tool-action"
                    >
                      <i className="icon-cloud-upload"></i> CSV
                    </a>
                  </li>
                  <li className="divider"> </li>
                  <li>
                    <a
                      href="javascript:;"
                      data-action="5"
                      className="tool-action"
                    >
                      <i className="icon-refresh"></i> Reload
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="portlet-body">
            <div className="table-container">
              <table
                className="table table-striped table-bordered table-hover"
                id="sample_3"
              >
                <thead>
                  <tr>
                    <th> Client</th>
                    <th> Project title</th>
                    <th> created at </th>
                    <th> delivery date </th> <th> status </th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {data.Project.map(
                    ({
                      id,
                      Title,
                      status,
                      created_at,
                      delivery_date,
                      company_name,
                    }) => {
                      const formattedJoinedAt = format(
                        parseISO(created_at),
                        "yyyy-MM-dd"
                      );

                      const formattedddate = format(
                        parseISO(delivery_date),
                        "yyyy-MM-dd"
                      );
                      return (
                        <tr key={id}>
                          {" "}
                          <td>{company_name} </td>
                          <td>{Title} </td>
                          <td> {formattedJoinedAt}</td>{" "}
                          <td> {formattedddate} </td>
                          <td>
                            {" "}
                            <div className="mt-action-buttons ">
                              <div className="btn-group btn-group-circle">
                                {" "}
                                {status === 0 ? (
                                  <span className="label label-sm label-info">
                                    {" "}
                                    not assigned{" "}
                                  </span>
                                ) : status === 1 ? (
                                  <span className="label label-sm label-success">
                                    {" "}
                                    assigned{" "}
                                  </span>
                                ) : (
                                  <span className="label label-sm label-danger">
                                    {" "}
                                    delivered{" "}
                                  </span>
                                )}
                              </div>
                            </div>{" "}
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
  );
}
