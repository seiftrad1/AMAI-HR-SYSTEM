import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import gql from "graphql-tag";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO, set } from "date-fns";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import { TextField } from "@material-ui/core";
import { useAuthState } from "../../context/auth";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { hasuraUserClient } from "../../lib/hasura-user-client";
const mindate = new Date().toISOString().substring(0, 10);
import { differenceInDays } from "date-fns";

const GetUsersId = gql`
  {
    leave {
      id
      user_id
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

const UpdateLeave = gql`
  mutation update_leave_by_pk(
    $id: Int!
    $reason: String!
    $start_date: timestamp!
    $end_date: timestamp!
    $count_d: Int!
  ) {
    update_leave_by_pk(
      pk_columns: { id: $id }
      _set: {
        reason: $reason
        start_date: $start_date
        end_date: $end_date
        count_d: $count_d
      }
    ) {
      id
      reason
      start_date
      end_date
      count_d
      status
    }
  }
`;
const leavebyID = gql`
  query MyQuery($id: Int = 10) {
    leave_by_pk(id: $id) {
      count_d
      end_date
      file
      id
      reason
      start_date
      status
      user_id
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

  const { leave } = await hasura.request(GetUsersId);

  return {
    paths: leave.map(({ id, user_id }) => ({
      params: {
        id: id.toString(),
        p1: user_id.toString(),
      },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const hasura = hasuraUserClient();
  const { id } = params;
  const { p1 } = params;
  console.log(id);
  console.log(p1);

  const initialData = await hasura.request(getLeave, { id });
  const DataCount = await hasura.request(sumLeave, { id: p1 });
  const Count = await hasura.request(count);
  const leave = await hasura.request(leavebyID, { id });
  const Admins = await hasura.request(getAdminIDs);

  return {
    props: {
      initialData,
      DataCount,
      id,
      Count,
      leave,
      p1,
      Admins,
    },
    revalidate: 1,
  };
};
export default function leaveupdate({
  initialData,
  id,
  p1,
  DataCount,
  Count,
  leave,
  Admins,
}) {
  const { isAuthenticated, user } = useAuthState();
  console.log(p1);
  const sumLeave = DataCount.leave_aggregate.aggregate.sum.count_d;
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
  const startdate = format(
    parseISO(leave.leave_by_pk.start_date),
    "yyyy-MM-dd"
  );
  const endate = format(parseISO(leave.leave_by_pk.end_date), "yyyy-MM-dd");

  const onSubmit = async ({ reason, start_date, end_date }) => {
    try {
      const count_d = differenceInDays(
        Date.parse(end_date),
        Date.parse(start_date)
      );
      if (count_d < 1) {
        alert("please enter a valid period");
      } else if (t.includes(start_date) || e.includes(end_date)) {
        alert(
          "you already signed for those days , please try again or contact the admin"
        );
      } else {
        const idt = leave.leave_by_pk.id;
        const t = Admins.User.map(({ id }) => {
          return {
            name: "Leave request update",
            description: "Leave request updated",
            user_id: id,
            seen: false,
          };
        });
        const { update_leave_by_pk } = await hasura.request(UpdateLeave, {
          id: idt,
          reason,
          start_date,
          count_d,
          end_date,
        });
        const { insert_notification } = await hasura.request(AddNotification, {
          objects: t,
        });
        alert(
          "your leave request  has been updated, please wait until we review it"
        );
        const pathname = `/leave/${p1}`;

        location.replace(pathname);
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
                        in this year , please feel free to contact us if you got
                        an urgent situation for leave. have a nice day!{" "}
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
                          defaultValue={leave.leave_by_pk.reason}
                          placeholder="Reason?..."
                          id="reason"
                          ref={register({
                            required:
                              "You must provide a reason in order to move forward",
                          })}
                        />
                        {errors.reason && <span>{errors.reason.message}</span>}
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
                            defaultValue={startdate}
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
                            defaultValue={endate}
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
                          update demand{" "}
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
