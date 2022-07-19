import useSWR, { mutate } from "swr";

import gql from "graphql-tag";
import { format, parseISO } from "date-fns";
import { hasuraUserClient } from "../lib/hasura-user-client";
import { ToastContainer, toast } from "react-toastify";

const today = new Date();

const GetUsers = gql`
  query MyQuery {
    User {
      id
      Name
      email
      created_at
      Last_Name
      Avatar
      status
    }
  }
`;
export const getStaticProps = async () => {
  const hasura = hasuraUserClient();

  const initialData = await hasura.request(GetUsers);

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};

export default function MembersPage({ initialData }) {
  const hasura = hasuraUserClient();

  const { data } = useSWR(GetUsers, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });

  const delete_User = async (id) => {
    const query = gql`
      mutation delete_User($id: Int!) {
        delete_User(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;
    if (confirm("Are you sure you want to delete this User")) {
      try {
        await hasura.request(query, { id });
        mutate();
        toast("Account deleted");

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const desactivateacc = async (id) => {
    const query = gql`
      mutation MyMutation($id: Int!) {
        update_User_by_pk(pk_columns: { id: $id }, _set: { status: false }) {
          id
        }
      }
    `;
    if (confirm("Are you sure you want to desactivate this user account")) {
      try {
        await hasura.request(query, { id });
        mutate();
        toast("Account desactivated");

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const activateacc = async (id) => {
    const query = gql`
      mutation MyMutation($id: Int!) {
        update_User_by_pk(pk_columns: { id: $id }, _set: { status: true }) {
          id
        }
      }
    `;
    if (confirm("Are you sure you want to activate this acc")) {
      try {
        await hasura.request(query, { id });
        mutate();
        toast("Account activated");

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
        <div class="row">
          <div class="col-md-12">
            <div class="portlet light bordered">
              <div class="portlet-title">
                <div class="caption font-dark">
                  <i class="icon-settings font-dark"></i>
                  <span class="caption-subject bold uppercase">
                    {" "}
                    Users (Employees)
                  </span>
                </div>
              </div>
              <div class="portlet-body">
                <div class="table-toolbar">
                  <div class="row">
                    <div class="col-md-6">
                      {" "}
                      <div class="actions">
                        <div class="btn-group">
                          <a
                            class="btn red btn-outline btn-circle"
                            href="javascript:;"
                            data-toggle="dropdown"
                          >
                            <i class="fa fa-share"></i>
                            <span class="hidden-xs"> Tools </span>
                            <i class="fa fa-angle-down"></i>
                          </a>
                          <ul
                            class="dropdown-menu pull-right"
                            id="sample_3_tools"
                          >
                            <li>
                              <a
                                href="javascript:;"
                                data-action="0"
                                class="tool-action"
                              >
                                <i class="icon-printer"></i> Print
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-action="1"
                                class="tool-action"
                              >
                                <i class="icon-check"></i> Copy
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-action="2"
                                class="tool-action"
                              >
                                <i class="icon-doc"></i> PDF
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-action="3"
                                class="tool-action"
                              >
                                <i class="icon-paper-clip"></i> Excel
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-action="4"
                                class="tool-action"
                              >
                                <i class="icon-cloud-upload"></i> CSV
                              </a>
                            </li>
                            <li class="divider"> </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-action="5"
                                class="tool-action"
                              >
                                <i class="icon-refresh"></i> Reload
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="portlet-body">
                  <div class="table-container">
                    <table
                      class="table table-striped table-bordered table-hover"
                      id="sample_3"
                    >
                      <thead>
                        <tr>
                          {" "}
                          <th> Avatar </th>
                          <th> Name </th>
                          <th> Last name </th>
                          <th> Email </th>
                          <th> Joined </th>
                          <th> Actions </th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          {" "}
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {data.User.map(
                          ({
                            id,
                            Name,
                            Last_Name,
                            email,
                            created_at,
                            Avatar,
                            status,
                          }) => {
                            const formattedJoinedAt = format(
                              parseISO(created_at),
                              "MM/dd/yyyy"
                            );
                            return (
                              <tr key={id} class="odd gradeX">
                                <td>
                                  {" "}
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
                                </td>
                                <td>{Name}</td>
                                <td>{Last_Name}</td>
                                <td>{email}</td>
                                {/* <td>
                                  {" "}
                                  <Spinner
                                    size={120}
                                    spinnerColor={"#333"}
                                    spinnerWidth={2}
                                    visible={true}
                                  />
                                </td> */}
                                <td class="center">{formattedJoinedAt}</td>
                                <td>
                                  <div class="btn-group">
                                    <button
                                      class="btn btn-xs green dropdown-toggle"
                                      type="button"
                                      data-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      {" "}
                                      Actions
                                      <i class="fa fa-angle-down"></i>
                                    </button>
                                    <ul
                                      class="dropdown-menu pull-left"
                                      role="menu"
                                    >
                                      <li>
                                        <a href={`/User/${id}`}>
                                          <i class="icon-wrench"></i> Edit User
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="closeBtn"
                                          onClick={() => delete_User(id)}
                                        >
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                          Delete Employee Account
                                        </a>
                                      </li>{" "}
                                      {status === true ? (
                                        <li>
                                          <a
                                            className="closeBtn"
                                            onClick={() => desactivateacc(id)}
                                          >
                                            <i
                                              class="fa fa-power-off"
                                              aria-hidden="true"
                                            ></i>
                                            Desactivate account
                                          </a>
                                        </li>
                                      ) : (
                                        <li>
                                          <a
                                            className="closeBtn"
                                            onClick={() => activateacc(id)}
                                          >
                                            <i
                                              class="fa fa-toggle-on"
                                              aria-hidden="true"
                                            ></i>
                                            Activate account
                                          </a>
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>{" "}
                  <ToastContainer hideProgressBar={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
