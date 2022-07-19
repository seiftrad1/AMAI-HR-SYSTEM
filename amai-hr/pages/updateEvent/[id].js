import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import gql from "graphql-tag";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, intervalToDuration, parseISO } from "date-fns";
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

const GetUsersId = gql`
  {
    Event {
      id
    }
  }
`;
const GetEvents = gql`
  query MyQuery {
    Event {
      id
      Title
      description
      start_date
    }
  }
`;
const geteventbyid = gql`
  query MyQuery($id: Int!) {
    Event_by_pk(id: $id) {
      id
      Title
      description
      start_date
    }
  }
`;
const getUserEmail = gql`
  query MyQuery {
    User {
      email
    }
  }
`;
const AddNotification = gql`
  mutation MyMutation {
    insert_notification_one(
      object: {
        name: "Event"
        seen: false
        description: "a new event has been added to your calendar!"
      }
    ) {
      seen
      name
      id
      description
    }
  }
`;
const UpdateEvent = gql`
  mutation update_leave_by_pk(
    $id: Int!
    $Title: String!
    $description: String!
    $start_date: timestamp!
    $manager_id: Int!
  ) {
    update_Event_by_pk(
      pk_columns: { id: $id }
      _set: {
        Title: $Title
        start_date: $start_date
        description: $description
        manager_id: $manager_id
      }
    ) {
      id
      Title
      description
      start_date
    }
  }
`;
const getNotifications = gql`
  query MyQuery {
    notification(where: { user_id: { _is_null: true } }) {
      description
      name
      seen
    }
    notification_aggregate(where: { user_id: { _is_null: true } }) {
      aggregate {
        count
      }
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { Event } = await hasura.request(GetUsersId);

  return {
    paths: Event.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const hasura = hasuraUserClient();
  const initialData = await hasura.request(GetEvents);
  const datar = await hasura.request(getNotifications);
  const emails = await hasura.request(getUserEmail);
  const event = await hasura.request(geteventbyid, { id });

  return {
    props: {
      initialData,
      datar,
      emails,
      event,
    },
    revalidate: 1,
  };
};

export default function Calendar({ initialData, datar, emails, event }) {
  const { isAuthenticated, user } = useAuthState();

  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const hasura = hasuraUserClient();
  const router = useRouter();
  const { data } = useSWR(GetEvents, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const { datat } = useSWR(getUserEmail, (query) => hasura.request(query), {
    emails,
    revalidateOnMount: true,
  });
  const onSubmit = async ({ Title, datetime, description }) => {
    const start_date = datetime;

    try {
      const idt = event.Event_by_pk.id;

      const { update_Event_by_pk } = await hasura.request(UpdateEvent, {
        id: idt,
        Title,
        description,
        start_date,
        manager_id: user.id,
      });
      if (isAuthenticated) {
        const { insert_notification_one } = await hasura.request(
          AddNotification
        );
      }
      window.location.reload();
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(emails),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteEvent = gql`
    mutation MyMutation($id: Int = 10) {
      delete_Event_by_pk(id: $id) {
        id
      }
    }
  `;
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(`date ${arg.dateStr} marked`);
    // alert("Coordinates: " + arg.jsEvent.pageX + "," + arg.jsEvent.pageY);
    // alert("Current view: " + arg.view.type);
    // change the day's background color just for fun
    arg.dayEl.style.backgroundColor = "#FF5C5C";
  };
  const handleevebt = async (arg) => {
    if (
      confirm(`are you sure you want to delete this event ${arg.event.title}?`)
    ) {
      const c = { id: arg.event.id };
      try {
        await hasura.request(deleteEvent, c);
        mutate();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      return null;
    }
  };
  const weekendsVisible = (arg) => {
    // alert("Coordinates: " + arg.jsEvent.pageX + "," + arg.jsEvent.pageY);
    // alert("Current view: " + arg.view.type);
    // change the day's background color just for fun
    return (arg.dayEl.style.backgroundColor = "#FF5C5C");
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="portlet light portlet-fit bordered calendar">
          <div className="portlet-title">
            <div className="caption">
              <i className=" icon-layers font-green"></i>
              <span className="caption-subject font-green sbold uppercase">
                Calendar
              </span>
            </div>
          </div>
          <div className="portlet-body " style={{ paddingTop: 45 }}>
            <div className="row">
              <div className="col-md-3 ">
                <h3 className="event-form-title margin-bottom-20">Event</h3>
                {isAuthenticated ? (
                  user.Role === "Manager" ? (
                    <div id="external-events">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {" "}
                        <div className="form-group">
                          <input
                            type="text"
                            name="Title"
                            className="form-control"
                            placeholder="Event Type..."
                            defaultValue={event.Event_by_pk.Title}
                            id="event_title"
                            ref={register({
                              required: "You must provide a the event",
                            })}
                          />{" "}
                          {errors.Title && <span>{errors.Title.message}</span>}
                        </div>{" "}
                        <div className="form-group">
                          <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            id="event_title"
                            ref={register}
                            defaultValue={event.Event_by_pk.description}
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label>Next appointment</label> <br />
                          <br />
                          <TextField
                            id="datetime"
                            name="datetime"
                            type="datetime-local"
                            defaultValue={event.Event_by_pk.start_date}
                            inputRef={register}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn green"
                            disabled={isSubmitting}
                          >
                            {" "}
                            Update Event{" "}
                          </button>
                        </div>
                      </form>
                      <hr />
                      <hr className="visible-xs" />{" "}
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col-md-9 ">
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
                  themeSystem="bootstrap"
                  events={data.Event.map(({ id, Title, start_date }) => {
                    return {
                      id: id,
                      title: Title,
                      date: start_date,
                      color: "red",
                    };
                  })}
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
                  eventClick={handleevebt}
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
