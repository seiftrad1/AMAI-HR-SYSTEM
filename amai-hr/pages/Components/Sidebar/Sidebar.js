import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState, useAuthDispatch } from "../../../context/auth";

const Sidebar = () => {
  const { logout } = useAuthDispatch();
  const router = useRouter();

  const { isAuthenticated, user } = useAuthState();

  const submit = (id) => {
    const pathname = `/UpdateTodo/${id}`;
    location.replace(pathname);
  };
  const tousers = () => {
    const pathname = `/UsersList`;
    location.replace(pathname);
  };
  const toprojects = () => {
    const pathname = `/Project/List`;
    location.replace(pathname);
  };
  const toleave = () => {
    const pathname = `/leave`;
    location.replace(pathname);
  };
  const Online = () => {
    const pathname = `/UsersList`;
    location.replace(pathname);
  };
  const onboarding = () => {
    const pathname = `/Todo`;
    location.replace(pathname);
  };

  const tocand = () => {
    const pathname = `/CandidatList`;
    location.replace(pathname);
  };
  return (
    <div>
      {" "}
      {isAuthenticated ? (
        <div className="page-sidebar-wrapper">
          <div className="page-sidebar navbar-collapse collapse">
            <ul
              className="page-sidebar-menu  page-header-fixed "
              data-keep-expanded="false"
              data-auto-scroll="true"
              data-slide-speed="200"
            >
              <li className="sidebar-toggler-wrapper hide">
                <div className="sidebar-toggler">
                  <span></span>
                </div>
              </li>

              <li className="nav-item start active open">
                <a href="#" className="nav-link nav-toggle">
                  <i className="icon-home"></i>
                  <span className="title">Dashboard</span>
                  <span className="selected"></span>
                  <span className="arrow open"></span>
                </a>
                <ul className="sub-menu">
                  <li className="nav-item start ">
                    {" "}
                    <Link href="/"> Dashboard</Link>{" "}
                  </li>
                </ul>{" "}
                {user.Role == "HR manager" ? (
                  <ul className="sub-menu">
                    <li className="nav-item start ">
                      {" "}
                      <a onClick={() => toleave()} className="nav-link ">
                        <span className="title">Holidays</span>
                      </a>{" "}
                    </li>{" "}
                  </ul>
                ) : (
                  <li></li>
                )}
              </li>
              {user.Role == "Manager" ? (
                <li className="nav-item start active open">
                  <a href="#" className="nav-link nav-toggle">
                    <i className="icon-notebook"></i>
                    <span className="title">Projects</span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <Link href="/Project">
                        <a href="charts_amcharts.html" className="nav-link ">
                          <span className="title">New Project</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item  ">
                      <a onClick={() => toprojects()} className="nav-link ">
                        <span className="title">Projects List</span>
                      </a>
                    </li>
                  </ul>
                </li>
              ) : user.Role == "HR manager" ? (
                <li className="nav-item start active open">
                  <a href="#" className="nav-link nav-toggle">
                    <i className="icon-notebook"></i>
                    <span className="title">Projects</span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a onClick={() => toprojects()} className="nav-link ">
                        <span className="title">Projects List</span>
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <div></div>
              )}

              {user.Role == "HR manager" ? (
                <ul
                  className="page-sidebar-menu  page-header-fixed "
                  data-keep-expanded="false"
                  data-auto-scroll="true"
                  data-slide-speed="200"
                >
                  {" "}
                  <li className="nav-item start active open">
                    <a href="#" className="nav-link nav-toggle">
                      <i className="icon-user"></i>
                      <span className="title">Users</span>
                      <span className="arrow open"></span>{" "}
                      <span className="selected"></span>
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a onClick={() => tousers()} className="nav-link ">
                          <span className="title">Users</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item start active open">
                    <a href="#" className="nav-link nav-toggle">
                      <i className="icon-user"></i>
                      <span className="title">Candidats</span>
                      <span className="arrow open"></span>
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <Link href="/Candidat">
                          <a href="charts_amcharts.html" className="nav-link ">
                            <span className="title">Add new Candidat</span>
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item  ">
                        <a onClick={() => tocand()} className="nav-link ">
                          <span className="title">Candidat List</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item start active open">
                    <a href="#" className="nav-link nav-toggle">
                      <i className="icon-settings"></i>
                      <span className="title">Settings</span>
                      <span className="arrow open"></span>
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <Link href={`../Profile/${user.id}`}>
                          <a href="charts_amcharts.html" className="nav-link ">
                            <span className="title">Account Settings</span>
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item  ">
                        <Link href="/register">
                          <a href="charts_amcharts.html" className="nav-link ">
                            <span className="title">
                              Register new employee account
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item  ">
                        <a onClick={() => onboarding()} className="nav-link ">
                          <span className="title">Onboarding</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <Link href="/Offboarding">
                          <a href="charts_amcharts.html" className="nav-link ">
                            <span className="title">Offboarding </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <div></div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="page-sidebar-wrapper" style={{}}>
          <div className="page-sidebar navbar-collapse collapse">
            <ul
              className="page-sidebar-menu  page-header-fixed "
              data-keep-expanded="false"
              data-auto-scroll="true"
              data-slide-speed="200"
            ></ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
