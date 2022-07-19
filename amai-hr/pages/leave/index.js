import useSWR, { mutate } from "swr";

import gql from "graphql-tag";
import { format, parseISO } from "date-fns";
import { hasuraUserClient } from "../../lib/hasura-user-client";
import { useAuthState } from "../../context/auth";
import { useEffect } from "react";

const GetUsers = gql`
  query MyQuery {
    leave {
      id
      reason
      start_date
      end_date
      count_d
      status
      user_id
      User {
        Name
        Last_Name
        email
        Avatar
      }
    }
    leave_aggregate(where: { status: { _eq: 0 } }) {
      aggregate {
        count
      }
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
  const { isAuthenticated, user } = useAuthState();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const { data } = useSWR(GetUsers, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const deleteATodo = async (id) => {
    const query = gql`
      mutation delete_User($id: Int!) {
        delete_User(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;

    try {
      await hasura.request(query, { id });
      mutate();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const query = gql`
    mutation MyMutation($id: Int = 10) {
      update_leave_by_pk(pk_columns: { id: $id }, _set: { status: 1 }) {
        status
        user_id
        start_date
        reason
        id
      }
    }
  `;
  const AddAcceptNotification = gql`
    mutation MyMutation($user_id: Int!) {
      insert_notification_one(
        object: {
          name: "Approve"
          seen: false
          description: "Leave request approved"
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
  const AddRejectedNotification = gql`
    mutation MyMutation($user_id: Int!) {
      insert_notification_one(
        object: {
          name: "Reject "
          seen: false
          description: "your demand was rejected, please contact the HR manager for more info "
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

  const Approve = async (id, user_id) => {
    if (confirm(`are you sure you want to approve this request ? `)) {
      try {
        await hasura.request(query, { id });
        mutate();
        const { insert_notification_one } = await hasura.request(
          AddAcceptNotification,
          { user_id }
        );
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const Reject = async (id, user_id) => {
    const query = gql`
      mutation MyMutation($id: Int = 10) {
        update_leave_by_pk(
          pk_columns: { id: $id }
          _set: { status: 2, count_d: 0 }
        ) {
          status
          user_id
          start_date
          reason
          id
        }
      }
    `;
    let t = confirm(`are you sure you want to decline this request ? `);

    if (t) {
      try {
        await hasura.request(query, { id });
        mutate();
        const { insert_notification_one } = await hasura.request(
          AddRejectedNotification,
          { user_id }
        );
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const cancelrequest = async (id) => {
    const Delete = gql`
      mutation MyMutation($id: Int!) {
        delete_leave(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;
    if (confirm("are you sure you want to delete this request ")) {
      try {
        await hasura.request(Delete, { id });
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else return null;
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="row">
          {" "}
          <div className="col-lg-6 col-xs-12 col-sm-12">
            <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                <div className="caption">
                  <i className=" icon-social-twitter font-dark hide"></i>
                  <span className="caption-subject font-dark bold uppercase">
                    Requests
                  </span>
                </div>
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab_actions_pending" data-toggle="tab">
                      {" "}
                      Pending{" "}
                    </a>
                  </li>
                </ul>
              </div>
              {data.leave_aggregate.aggregate.count === 0 ? (
                <img
                  style={{
                    display: "block",
                    objectFit: "cover",
                    margin: "auto",
                    width: "auto",
                    height: "auto",
                  }}
                  src="../nothing_here.png"
                ></img>
              ) : (
                <div className="portlet-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_actions_pending">
                      {" "}
                      {data.leave.map(
                        ({
                          id,
                          reason,
                          start_date,
                          end_date,
                          count_d,
                          status,
                          User,
                          user_id,
                        }) => {
                          const formattedJoinedAt = format(
                            parseISO(start_date),
                            "dd-MM"
                          );
                          const formattedend = format(
                            parseISO(end_date),
                            "dd-MM"
                          );
                          return (
                            <div className="mt-actions">
                              {status === 0 ? (
                                <div className="mt-action">
                                  <div className="mt-action-img">
                                    <div className="profile-userpic">
                                      {" "}
                                      <img
                                        style={{
                                          width: 50,
                                          height: 50,
                                          objectFit: "cover",
                                        }}
                                        src={`../../${User.Avatar}`}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className="mt-action-body">
                                    <div className="mt-action-row">
                                      <div className="mt-action-info ">
                                        <div className="mt-action-icon ">
                                          <i className="icon-action-redo"></i>
                                        </div>
                                        <div className="mt-action-details ">
                                          <span className="mt-action-author">
                                            {User.Name} {User.Last_Name}
                                          </span>
                                          <p className="mt-action-desc">
                                            Leaving request
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-action-datetime ">
                                        <span className="mt-action-date">
                                          from {formattedJoinedAt} to{" "}
                                          {formattedend}
                                        </span>
                                        <span className="mt-action-dot bg-green"></span>
                                        <span className="mt=action-time">
                                          {count_d} days
                                        </span>
                                      </div>
                                      <div className="mt-action-buttons ">
                                        <div className="btn-group btn-group-circle">
                                          <button
                                            style={{ fontSize: 10 }}
                                            type="button"
                                            className="btn btn-outline green btn-sm"
                                            onClick={() => Approve(id, user_id)}
                                          >
                                            Appove
                                          </button>{" "}
                                          <button
                                            style={{ fontSize: 10 }}
                                            type="button"
                                            className="btn btn-outline red btn-sm"
                                            onClick={() => Reject(id, user_id)}
                                          >
                                            Reject
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>{" "}
          <div className="col-lg-6 col-xs-12 col-sm-12">
            <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                <div className="caption">
                  <i className=" icon-social-twitter font-dark hide"></i>
                  <span className="caption-subject font-dark bold uppercase">
                    Quick Actions
                  </span>
                </div>
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab_actions_pending" data-toggle="tab">
                      {" "}
                      Checked{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  <div className="tab-pane active" id="tab_actions_pending">
                    {data.leave.map(
                      ({
                        id,
                        reason,
                        start_date,
                        end_date,
                        count_d,
                        status,
                        User,
                      }) => {
                        const formattedJoinedAt = format(
                          parseISO(start_date),
                          "dd-MM"
                        );
                        const formattedend = format(
                          parseISO(end_date),
                          "dd-MM"
                        );
                        return (
                          <div className="mt-actions">
                            <div className="mt-action">
                              <div className="mt-action-img">
                                <div className="profile-userpic">
                                  {" "}
                                  <img
                                    style={{
                                      width: 50,
                                      height: 50,
                                      objectFit: "cover",
                                    }}
                                    src={`../../${User.Avatar}`}
                                  />{" "}
                                </div>
                              </div>
                              <div className="mt-action-body">
                                <div className="mt-action-row">
                                  <div className="mt-action-info ">
                                    <div className="mt-action-icon ">
                                      <i className="icon-action-redo"></i>
                                    </div>
                                    <div className="mt-action-details ">
                                      <span className="mt-action-author">
                                        {User.Name} {User.Last_Name}
                                      </span>
                                      <p className="mt-action-desc">
                                        Leaving request
                                      </p>
                                    </div>
                                  </div>{" "}
                                  <div className="mt-action-datetime ">
                                    <span className="mt-action-date">
                                      from {formattedJoinedAt} to {formattedend}
                                    </span>
                                  </div>
                                  <div className="mt-action-buttons ">
                                    <div className="btn-group btn-group-circle">
                                      {" "}
                                      {status === 0 ? (
                                        <span className="label label-sm label-info">
                                          {" "}
                                          pending{" "}
                                        </span>
                                      ) : status === 1 ? (
                                        <span className="label label-sm label-success">
                                          {" "}
                                          Approved{" "}
                                        </span>
                                      ) : (
                                        <span className="label label-sm label-danger">
                                          {" "}
                                          Rejected{" "}
                                        </span>
                                      )}
                                    </div>
                                  </div>{" "}
                                  <div className="mt-action-buttons ">
                                    <div className="btn-group btn-group-circle">
                                      {" "}
                                      <button
                                        className=" btn-sm btn-warning"
                                        onClick={() => cancelrequest(id)}
                                      >
                                        Delete request
                                      </button>
                                    </div>
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
            </div>{" "}
          </div>
          <div className="col-md-12">
            <div className="portlet light bordered">
              <div className="portlet-title">
                <div className="caption font-dark">
                  <i className="icon-settings font-dark"></i>
                  <span className="caption-subject bold uppercase">
                    {" "}
                    Leaving Requests
                  </span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="table-toolbar">
                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <div className="actions">
                        <div className="btn-group">
                          <a
                            className="btn red btn-outline btn-circle"
                            href="javascript:;"
                            data-toggle="dropdown"
                          >
                            <i className="fa fa-share"></i>
                            <span className="hidden-xs"> Tools </span>
                            <i className="fa fa-angle-down"></i>
                          </a>
                          <ul
                            className="dropdown-menu pull-right"
                            id="sample_3_tools"
                          >
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
                          <th> Reason </th>
                          <th> Email </th>
                          <th> start </th>
                          <th> end </th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {data.leave.map(
                          ({
                            id,
                            reason,
                            start_date,
                            end_date,
                            count_d,
                            status,
                            User,
                          }) => {
                            const start = format(
                              parseISO(start_date),
                              "MM/dd/yyyy"
                            );
                            const end = format(
                              parseISO(end_date),
                              "MM/dd/yyyy"
                            );
                            return (
                              <tr key={id} className="odd gradeX">
                                <td>{reason}</td>
                                <td> {User.email}</td>
                                <td>{start}</td>
                                <td>{end}</td>
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
        </div>
      </div>
    </div>
  );
}
