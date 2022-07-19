import { gql } from "graphql-request";
import { useRouter } from "next/router";
import useSWR from "swr";
import { hasuraUserClient } from "../lib/hasura-user-client";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useAuthState, useAuthDispatch } from "../context/auth";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import formatRelative from "date-fns/formatRelative";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import { differenceInHours } from "date-fns";
import { differenceInDays } from "date-fns";

const today = new Date();

const Dot = styled.span`
  background-color: #4cd137;
  position: absolute;

  height: 20px;
  width: 20px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: -20px;
  margin-left: 55px;
`;

const DotAway = styled.span`
  background-color: #f5c71a;
  position: absolute;

  height: 20px;
  width: 20px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: -20px;
  margin-left: 55px;
`;
const Users = gql`
  query MyQuery {
    User_aggregate {
      aggregate {
        count
      }
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
const Projects = gql`
  query Query {
    Project_aggregate {
      aggregate {
        count
      }
    }
  }
`;
const Candidats = gql`
  query Query {
    Candidate_aggregate(where: { Status: { _eq: 0 } }) {
      aggregate {
        count
      }
    }
  }
`;
const CandidatsA = gql`
  query Query {
    Candidate_aggregate(where: { Status: { _eq: 1 } }) {
      aggregate {
        count
      }
    }
  }
`;
const CandidatsR = gql`
  query Query {
    Candidate_aggregate(where: { Status: { _eq: 2 } }) {
      aggregate {
        count
      }
    }
  }
`;

const GetUsers = gql`
  {
    User(order_by: { created_at: asc }) {
      id
      Name
      created_at
      last_seen
      Avatar
      last_seen_url
    }
  }
`;

export const getStaticProps = async () => {
  const hasura = hasuraUserClient();

  const initialData = await hasura.request(Users);
  const ProjectData = await hasura.request(Projects);
  const CandidatsData = await hasura.request(Candidats);
  const CandidatsDataA = await hasura.request(CandidatsA);
  const CandidatsDataR = await hasura.request(CandidatsR);

  const Events = await hasura.request(GetEvents);
  const users = await hasura.request(GetUsers);

  return {
    props: {
      initialData,
      ProjectData,
      CandidatsData,
      Events,
      users,
      CandidatsDataA,
      CandidatsDataR,
    },
    revalidate: 1,
  };
};

export default function Home({
  initialData,
  ProjectData,
  CandidatsData,
  CandidatsDataR,
  CandidatsDataA,
  Events,
  users,
}) {
  const hasura = hasuraUserClient();
  const router = useRouter();
  const { isAuthenticated } = useAuthState();
  const [loaded, setLoaded] = useState(false);
  const [hide, sethide] = useState(true);
  const [show, setShow] = useState(true);

  ///////////////////////////
  ///////redirectifnotloggedin

  function toggle() {
    sethide(true);
  }
  function hidet() {
    sethide(false);
  }
  function mouseEnter() {
    setShow(false);
  }

  function mouseLeave() {
    setShow(true);
  }
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setLoaded(true);
    }
  }, []);

  ////
  const { data } = useSWR(Users, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const { datay } = useSWR(GetUsers, (query) => hasura.request(query), {
    users,
    revalidateOnMount: true,
  });
  const { dataEvents } = useSWR(GetEvents, (query) => hasura.request(query), {
    Events,
    revalidateOnMount: true,
  });
  if (!loaded) {
    return <div></div>; //show nothing or a loader
  }
  const datasta = {
    labels: ["Users", "projects", "Candidates"],
    datasets: [
      {
        label: "Statistics",
        data: [
          data.User_aggregate.aggregate.count,
          ProjectData.Project_aggregate.aggregate.count,
          CandidatsData.Candidate_aggregate.aggregate.count,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataCand = {
    labels: [
      "Approved Candidates",
      "Rejected Candidates",
      "Pending Candidates",
    ],
    datasets: [
      {
        label: "Statistics",
        data: [
          CandidatsDataA.Candidate_aggregate.aggregate.count,
          CandidatsDataR.Candidate_aggregate.aggregate.count,
          CandidatsData.Candidate_aggregate.aggregate.count,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="page-content-wrapper">
        <div className="page-content" style={{ minHeight: 1500 }}>
          <div className="col-md-8">
            {" "}
            <div className="portlet light bordered">
              <h1 className="page-title"> Admin Dashboard</h1>
              <small>statistics, charts, recent events and reports</small>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a className="dashboard-stat dashboard-stat-v2 blue" href="#">
                    <div className="visual">
                      <i className="fa fa-comments"></i>
                    </div>
                    <div className="details">
                      <div className="number">
                        <span data-counter="counterup" data-value="1349">
                          {data.User_aggregate.aggregate.count}
                        </span>
                      </div>
                      <div className="desc"> Users </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a className="dashboard-stat dashboard-stat-v2 red" href="#">
                    <div className="visual">
                      <i className="fa fa-bar-chart-o"></i>
                    </div>
                    <div className="details">
                      <div className="number">
                        <span data-counter="counterup" data-value="12,5"></span>
                        {ProjectData.Project_aggregate.aggregate.count}
                      </div>
                      <div className="desc"> Projects </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a
                    className="dashboard-stat dashboard-stat-v2 green"
                    href="#"
                  >
                    <div className="visual">
                      <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div className="details">
                      <div className="number">
                        <span data-counter="counterup" data-value="549">
                          {CandidatsData.Candidate_aggregate.aggregate.count}
                        </span>
                      </div>
                      <div className="desc"> Pending Candidats </div>
                    </div>
                  </a>
                </div>
              </div>{" "}
              <hr />
              {hide ? (
                <div className="row">
                  <div className="portlet light bordered">
                    <div className="portlet-title">
                      <div className="caption">
                        <i className="icon-bubble font-dark hide"></i>
                      </div>
                      {users.User.map(
                        ({
                          created_at,
                          id,
                          last_seen,
                          Name,
                          Avatar,
                          last_seen_url,
                        }) => {
                          const formattedJoinedAt = formatRelative(
                            Date.parse(created_at),
                            today,
                            {
                              weekStartsOn: 1,
                            }
                          );

                          const formattedLastSeen = differenceInMinutes(
                            today,
                            Date.parse(last_seen)
                          );

                          const formattedLastSeeninHours = differenceInHours(
                            today,
                            Date.parse(last_seen)
                          );
                          const formattedLastSeenindays = differenceInDays(
                            today,
                            Date.parse(last_seen)
                          );
                          const isUserOnline = 2 >= formattedLastSeen;

                          return (
                            <div className="col-md-1">
                              <div className="mt-img">
                                {Avatar ? (
                                  <div className="profile-userpic">
                                    {" "}
                                    <img
                                      style={{
                                        display: "inline",
                                        width: 75,
                                        height: 75,
                                        objectFit: "cover",
                                      }}
                                      src={`../${Avatar}`}
                                      onMouseEnter={mouseEnter}
                                      onMouseLeave={mouseLeave}
                                    />{" "}
                                  </div>
                                ) : (
                                  <div className="profile-userpic">
                                    <img
                                      style={{
                                        display: "inline",
                                        width: 75,
                                        height: 75,
                                        objectFit: "cover",
                                      }}
                                      src={`../profile.png`}
                                    />{" "}
                                  </div>
                                )}{" "}
                                {isUserOnline ? (
                                  <Dot />
                                ) : (
                                  <div>
                                    <DotAway />
                                    {!show ? (
                                      <div>{formattedLastSeen} min ago</div>
                                    ) : (
                                      <div></div>
                                    )}
                                  </div>
                                )}
                              </div>

                              <h3 className="mt-username">{Name}</h3>
                            </div>
                          );
                        }
                      )}{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          marginLeft: 820,
                        }}
                        onClick={hidet}
                      >
                        <strong>hide list</strong>
                      </span>
                    </div>
                  </div>{" "}
                </div>
              ) : (
                <span
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={toggle}
                >
                  <strong>show online users </strong>
                </span>
              )}
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
                eventRemove
                events={Events.Event.map(({ id, Title, start_date }) => {
                  return { title: Title, date: start_date };
                })}
                eventColor="#378006"

                // weekends={this.state.weekendsVisible}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // select={this.handleDateSelect}
                // eventContent={renderEventContent} // custom render function
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                */
              />
              <div className="clearfix"></div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            {" "}
            <div className="portlet light bordered">
              {" "}
              <Bar data={datasta} width={400} height={200} />
            </div>
            <div className="portlet light bordered">
              <Doughnut data={datasta} width={400} height={400} />
            </div>
            <div className="portlet light bordered">
              <Pie data={dataCand} width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
