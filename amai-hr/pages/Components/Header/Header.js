import React from "react";
import Link from "next/link";
import { useAuthState, useAuthDispatch } from "../../../context/auth";
import gql from "graphql-tag";
import { hasuraUserClient } from "../../../lib/hasura-user-client";
const updateN = gql`
  mutation MyMutation($_eq: Int!) {
    update_notification(
      where: { user_id: { _eq: $_eq } }
      _set: { seen: true }
    ) {
      affected_rows
    }
  }
`;
const GetUserById = gql`
  query GetUserById($user_id: Int!) {
    User_by_pk(id: $user_id) {
      id
      notifications_aggregate(where: { seen: { _eq: false } }) {
        aggregate {
          count
        }
      }
      notifications(where: { seen: { _eq: false } }) {
        id
        description
        created_at
      }
    }
  }
`;
export default function Header() {
  const { logout } = useAuthDispatch();
  const { updateUser } = useAuthDispatch();
  const hasura = hasuraUserClient();
  const { isAuthenticated, user } = useAuthState();
  const UpdateUser = async () => {
    updateUser(user.notifications);
    console.log(user.notifications);
  };
  const Complete = async () => {
    try {
      if (isAuthenticated) {
        const { update_notification } = await hasura.request(updateN, {
          _eq: user.id,
        });
        const { User_by_pk } = await hasura.request(GetUserById, {
          user_id: user.id,
        });
        updateUser(User_by_pk);
      }
      window.location.reload;
    } catch (err) {
      console.log(err);
    }
  };
  const submit = (id) => {
    const pathname = `/Task/${id}`;
    location.replace(pathname);
  };
  const sub = (id) => {
    const pathname = `/UpdateTodo/${id}`;
    location.replace(pathname);
  };
  const suboff = (id) => {
    const pathname = `/offboarding/${id}`;
    location.replace(pathname);
  };
  return (
    <div>
      {isAuthenticated ? (
        <div className="page-header navbar navbar-fixed-top ">
          <div className="page-header navbar navbar-fixed-top ">
            <div className="page-header-inner ">
              <div className="page-logo">
                <Link href="/">
                  <a href="#">
                    <div style={{ marginTop: -35 }}>
                      <img
                        src="../svg/AMAI-AI-Experts.inline.svg"
                        alt="logo"
                        className="logo-default"
                      />{" "}
                    </div>
                  </a>
                </Link>
                <div className="menu-toggler sidebar-toggler ">
                  <span></span>
                </div>
              </div>
              <a
                href="#"
                className="menu-toggler responsive-toggler"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span></span>
              </a>{" "}
              <div className="page-top">
                <div className="top-menu">
                  <ul className="nav navbar-nav pull-right">
                    <li className="separator hide"> </li>

                    <li className="dropdown dropdown-user dropdown-dark">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        data-hover="dropdown"
                        data-close-others="true"
                      >
                        <i className="icon-bell"></i>
                        <span className="badge badge-danger">
                          {user.notifications_aggregate.aggregate.count}
                        </span>
                      </a>

                      <ul className="dropdown-menu dropdown-menu-default">
                        {" "}
                        <li>
                          <span>
                            {" "}
                            <a>
                              {user.notifications_aggregate.aggregate.count}{" "}
                              pending notifications{" "}
                            </a>{" "}
                            <a onClick={Complete}>view all</a>
                          </span>{" "}
                          <hr />
                        </li>
                        {user.notifications.map(({ id, description }) => {
                          return (
                            <li key={id}>
                              {" "}
                              <i></i>
                              <span>
                                {" "}
                                <a>{description}</a>
                              </span>{" "}
                              <li className="divider"> </li>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="dropdown dropdown-user dropdown-dark">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        data-hover="dropdown"
                        data-close-others="true"
                      >
                        {user.Avatar ? (
                          <img
                            style={{
                              marginRight: 6,
                              objectFit: "cover",
                              width: 38,
                              height: 38,
                            }}
                            className="image_inner_containerHeader"
                            src={`../${user.Avatar}`}
                          />
                        ) : (
                          <img
                            style={{
                              marginRight: 6,
                              objectFit: "cover",
                              width: 38,
                              height: 38,
                            }}
                            src={`../profile.png`}
                          />
                        )}{" "}
                        <span className="username username-hide-on-mobile">
                          {" "}
                          {user.Name}{" "}
                        </span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-default">
                        <li>
                          <Link href={`../Profile/${user.id}`}>
                            <a>
                              <i className="icon-user"></i> My Profile{" "}
                            </a>
                          </Link>{" "}
                        </li>
                        <li>
                          <a onClick={() => submit(user.id)}>
                            <i className="icon-rocket"></i> My Tasks{" "}
                          </a>
                        </li>{" "}
                        <li></li>
                        <li>
                          <Link href="/Calendar">
                            <a>
                              <i className="icon-calendar"></i>My Calendar{" "}
                            </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link href={`../leave/${user.id}`}>
                            <a>
                              <i className="fa fa-plane" aria-hidden="true"></i>
                              My Holidays{" "}
                            </a>
                          </Link>
                        </li>
                        <li className="divider"> </li>{" "}
                        <li>
                          <a onClick={() => sub(user.id)}>
                            <i className="icon-lock"></i>Onboarding{" "}
                          </a>
                        </li>{" "}
                        <li>
                          <a onClick={() => suboff(user.id)}>
                            <i className="icon-lock"></i>Offboarding{" "}
                          </a>
                        </li>{" "}
                        <Link href="/login">
                          <li>
                            <a href="page_user_login_1.html" onClick={logout}>
                              <i className="icon-key"></i> Log Out{" "}
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-quick-sidebar-toggler">
                      <a href="#" className="dropdown-toggle">
                        <i className="icon-logout"></i>
                      </a>
                    </li>
                  </ul>
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
