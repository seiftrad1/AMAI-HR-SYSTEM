import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Link from "next/link";
import gql from "graphql-tag";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, intervalToDuration, parseISO, set } from "date-fns";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthState, useAuthDispatch } from "../../context/auth";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { hasuraUserClient } from "../../lib/hasura-user-client";
const today = new Date().toISOString().substring(0, 19);
const mindate = new Date().toISOString().substring(0, 10);
import { differenceInHours } from "date-fns";
import { differenceInDays } from "date-fns";
// import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { isWithinInterval } from "date-fns";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    fontSize: 60,
  },
}));
const Dot = styled.span`
  padding: 20px;
  background-color: #f44336;
  color: white;
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
`;
const Dot2 = styled.span`
  .closebtn:hover {
    color: black;
  }
`;
const useStyless = makeStyles((theme) => ({
  hover: {
    color: black,
  },
}));
const GetUsersId = gql`
  {
    User {
      id
      Last_Name
      Name
      Avatar
      email
      Role
      Phone_Number
      Domain
      password
      File
    }
  }
`;
const getLeave = gql`
  query MyQuery($id: Int!) {
    leave(where: { user_id: { _eq: $id } }) {
      id
      reason
      start_date
      end_date
      count_d
      status
      user_id
    }
  }
`;
const count = gql`
  query MyQuery {
    leave_aggregate {
      aggregate {
        count
      }
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

const insertLeave = gql`
  mutation MyMutation(
    $user_id: Int!
    $end_date: timestamp!
    $start_date: timestamp!
    $reason: String!
    $count_d: Int!
  ) {
    insert_leave_one(
      object: {
        user_id: $user_id
        start_date: $start_date
        end_date: $end_date
        status: 0
        reason: $reason
        count_d: $count_d
      }
    ) {
      start_date
      end_date
      count_d
    }
  }
`;
const sumLeave = gql`
  query MyQuery($id: Int!) {
    leave_aggregate(where: { user_id: { _eq: $id } }) {
      aggregate {
        sum {
          count_d
        }
      }
    }
  }
`;

export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { User } = await hasura.request(GetUsersId);

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

  const initialData = await hasura.request(getLeave, { id });
  const DataCount = await hasura.request(sumLeave, { id });
  const Count = await hasura.request(count);
  const Admins = await hasura.request(getAdminIDs);

  return {
    props: {
      initialData,
      DataCount,
      id,
      Count,
      Admins,
    },
    revalidate: 1,
  };
};

export default function Calendar({
  initialData,
  id,
  DataCount,
  Count,
  Admins,
}) {
  const { isAuthenticated, user } = useAuthState();

  const classNamees = useStyles();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const sumLeave = DataCount.leave_aggregate.aggregate.sum.count_d || 0;
  const [hide, sethide] = useState(true);
  const [hidef, sethidef] = useState(false);
  console.log(sumLeave);
  function toggle() {
    sethide(!hide);
  }
  function togglefile() {
    sethidef(true);
  }
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const hasura = hasuraUserClient();
  const router = useRouter();
  const { data } = useSWR(getLeave, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const t = data.leave.map(({ id, reason, start_date, end_date }) => {
    const start = format(parseISO(start_date), "yyyy-MM-dd");
    return start;
  });
  const e = data.leave.map(({ id, reason, start_date, end_date }) => {
    const end = format(parseISO(end_date), "yyyy-MM-dd");
    return end;
  });

  const onSubmit = async ({ reason, start_date, end_date }) => {
    const m = Admins.User.map(({ id }) => {
      return {
        name: "Leave request",
        description: "Leave request submitted by employee",
        user_id: id,
        seen: false,
      };
    });
    try {
      const user_id = id;
      const count_d = differenceInDays(
        Date.parse(end_date),
        Date.parse(start_date)
      );
      console.log(count_d);

      if (count_d < 1) {
        alert("please enter a valid period");
      } else if (sumLeave >= 20 || 20 - count_d < sumLeave) {
        alert(
          "please contact the manager , you looks like you got no more  days left on your calendar or you may surpassed your limit"
        );
      } else if (t.includes(start_date) || e.includes(end_date)) {
        alert(
          "you already signed for those days , please try again or contact the admin"
        );
      } else {
        const { insert_leave_one } = await hasura.request(insertLeave, {
          reason,
          start_date,
          count_d,
          end_date,
          user_id,
        });
        const { insert_notification } = await hasura.request(AddNotification, {
          objects: m,
        });
        alert(
          "your request has been submitted, please wait until we review it"
        );
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
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
    if (confirm("are you sure you want to cancel this request ")) {
      try {
        await hasura.request(Delete, { id });
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else return null;
  };
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(`date ${arg.dateStr} marked`);
    // alert("Coordinates: " + arg.jsEvent.pageX + "," + arg.jsEvent.pageY);
    // alert("Current view: " + arg.view.type);
    // change the day's background color just for fun
    arg.dayEl.style.backgroundColor = "#FF5C5C";
  };

  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        {/* <h1 className="page-title"> Calendar</h1> */}

        <div className="portlet light portlet-fit bordered calendar">
          <div className="portlet-title">
            <div className="caption">
              <i className=" icon-layers font-green"></i>
              <span className="caption-subject font-green sbold uppercase">
                Holidays
              </span>
            </div>
          </div>
          <div className="portlet-body " style={{ paddingTop: 45 }}>
            <div className="row">
              <div className="col-md-3 ">
                {20 - sumLeave <= 0 ? (
                  <div
                    style={{
                      display: hide ? "block" : "none",
                    }}
                  >
                    {" "}
                    <div className="alert alert-danger fade in">
                      {" "}
                      <strong>Error!</strong>
                      <p>
                        you have no days remaining on your calendar , feel free
                        to contact the administration .{" "}
                      </p>
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={toggle}
                      >
                        {" "}
                        <strong>Close </strong>
                      </span>{" "}
                    </div>{" "}
                    <br />{" "}
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        display: hide ? "block" : "none",
                      }}
                    >
                      <div className="alert alert-warning alert-dismissible fade in">
                        {" "}
                        <strong>Warning!</strong>
                        <p>
                          {" "}
                          you have <strong>{20 - sumLeave} </strong>days remaing
                          in this year , please feel free to contact us if you
                          got an urgent situation for leave. have a nice day!{" "}
                        </p>
                        <span
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={toggle}
                        >
                          {" "}
                          <strong>Close </strong>
                        </span>{" "}
                      </div>{" "}
                      <br />
                    </div>{" "}
                    <div id="external-events">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {" "}
                        <div className="form-group">
                          <strong>Reason:</strong>

                          <input
                            type="textarea"
                            name="reason"
                            className="form-control"
                            placeholder="Reason?..."
                            id="reason"
                            ref={register({
                              required:
                                "You must provide a reason in order to move forward",
                            })}
                          />
                          {errors.reason && (
                            <span>{errors.reason.message}</span>
                          )}
                        </div>{" "}
                        <div className="form-group">
                          Medical Issue?{" "}
                          <span
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={togglefile}
                          >
                            {" "}
                            <strong>add proof </strong>
                          </span>{" "}
                        </div>
                        <div
                          className="form-group"
                          style={{
                            display: hidef ? "block" : "none",
                          }}
                        >
                          <input type="file" />
                        </div>
                        <div className="form-group">
                          <label>start day</label> <br />
                          <br />{" "}
                          <div className="form-group">
                            <TextField
                              id="start_date"
                              name="start_date"
                              type="date"
                              defaultValue={today}
                              className={classNamees.textField}
                              inputRef={register}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                min: `${mindate}`,
                              }}
                              required
                            />{" "}
                          </div>
                          <div className="form-group">
                            <label>end day</label>
                            <br />
                            <br />
                            <TextField
                              id="end_date"
                              name="end_date"
                              type="date"
                              defaultValue={today}
                              className={classNamees.textField}
                              inputRef={register}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{ min: `${mindate}` }}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn green"
                            disabled={isSubmitting}
                          >
                            {" "}
                            submit demand{" "}
                          </button>
                        </div>
                      </form>
                      <hr />
                      <div>
                        {" "}
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th> Color</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {" "}
                                <div
                                  style={{
                                    width: 50,
                                    height: 50,
                                    objectFit: "cover",
                                    backgroundColor: "#58D68D",
                                  }}
                                />
                              </td>{" "}
                              <td>accepted</td>{" "}
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <div
                                  style={{
                                    width: 50,
                                    height: 50,
                                    objectFit: "cover",
                                    backgroundColor: "#F39C12",
                                  }}
                                />
                              </td>
                              <td> pending</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <div
                                  style={{
                                    width: 50,
                                    height: 50,
                                    objectFit: "cover",
                                    backgroundColor: "#E74C3C",
                                  }}
                                />
                              </td>
                              <td>rejected</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr className="visible-xs" />{" "}
                    </div>
                  </div>
                )}
                <div>
                  {" "}
                  Total leave days:{sumLeave}
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        {" "}
                        <th> edit</th>
                        <th> reason</th>
                        <th>start date</th>
                        <th>end date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.leave.map(
                        ({
                          id,
                          reason,
                          start_date,
                          end_date,
                          status,
                          user_id,
                        }) => {
                          const end = format(parseISO(end_date), "yyyy-MM-dd");
                          const start = format(
                            parseISO(start_date),
                            "yyyy-MM-dd"
                          );
                          return (
                            <tr key={id} className="odd gradeX">
                              {" "}
                              <td>
                                {status === 1 ? (
                                  <span className="label label-sm label-success">
                                    {" "}
                                    nothing to edit
                                  </span>
                                ) : status === 2 ? (
                                  <span className="label label-sm label-success">
                                    {" "}
                                    nothing to edit
                                  </span>
                                ) : (
                                  <a
                                    className=" btn-sm btn-warning"
                                    href={`/${user_id}/${id}`}
                                  >
                                    Edit
                                  </a>
                                )}
                              </td>
                              <td>{reason}</td>
                              <td>{start_date}</td>
                              <td>{end_date}</td>{" "}
                              <td>
                                {status === 1 ? (
                                  <span className="label label-sm label-success">
                                    {" "}
                                    Approved{" "}
                                  </span>
                                ) : status === 2 ? (
                                  <span className="label label-sm label-danger">
                                    {" "}
                                    Declined{" "}
                                  </span>
                                ) : (
                                  <button
                                    className=" btn-sm btn-warning"
                                    onClick={() => cancelrequest(id)}
                                  >
                                    Cancel
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-9">
                <FullCalendar
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                  ]}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekNumbers={true}
                  themeSystem="bootstrap"
                  events={data.leave.map(
                    ({ id, reason, start_date, end_date, status }) => {
                      const end = format(parseISO(end_date), "yyyy-MM-dd");
                      const start = format(parseISO(start_date), "yyyy-MM-dd");
                      if (status === 1) {
                        return {
                          id: id,
                          start: start,
                          end: end,
                          backgroundColor: "#58D68D",
                          display: "background",
                        };
                      } else if (status === 0) {
                        return {
                          id: id,
                          start: start,
                          end: end,
                          backgroundColor: "#F39C12",
                          display: "background",
                        };
                      } else {
                        return {
                          id: id,
                          start: start,
                          end: end,
                          backgroundColor: "#E74C3C",
                          display: "background",
                        };
                      }
                    }
                  )}
                  dateClick={handleDateClick}
                  // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                  // select={this.handleDateSelect}
                  // eventContent={renderEventContent} // custom render function
                  // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                // */
                  //       validRange={{
                  //         start: "2021-08-03",
                  //         end: "2021-08-07",
                  //       }}
                  weekends={false}
                  // select={color}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
