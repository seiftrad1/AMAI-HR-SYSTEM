import useSWR, { mutate } from "swr";
import formatRelative from "date-fns/formatRelative";
import differenceInMinutes from "date-fns/differenceInMinutes";
import Link from "next/link";
import Layout from "../pages/Components/Layout";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";

import { hasuraUserClient } from "../lib/hasura-user-client";

const today = new Date();

const GetCandidats = gql`
  query MyQuery {
    Candidate {
      Email
      Last_Name
      Name
      domain
      id
      phone_number
      Status
      joined
    }
  }
`;

export const getStaticProps = async () => {
  const hasura = hasuraUserClient();

  const initialData = await hasura.request(GetCandidats);

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};

export default function CandidatList({ initialData }) {
  const hasura = hasuraUserClient();
  const router = useRouter();

  const { data } = useSWR(GetCandidats, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });
  const deleteATodo = async (id) => {
    const query = gql`
      mutation delete_Candidate($id: Int!) {
        delete_Candidate(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;
    if (confirm("are you sure you want to delete this candidat ")) {
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
  const updateStatus = async (id) => {
    try {
      router.push(`/RegisterCandidatAccount/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const DeclineCandidat = async (id) => {
    const SetStatus = gql`
      mutation MyMutation($id: Int!) {
        update_Candidate_by_pk(pk_columns: { id: $id }, _set: { Status: 2 }) {
          id
          Status
        }
      }
    `;
    if (confirm("are you sure you want to decline this candidat ")) {
      try {
        await hasura.request(SetStatus, { id });
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
        <div class="row">
          <div class="col-md-12">
            <div class="portlet light bordered">
              <div class="portlet-title">
                <div class="caption font-dark">
                  <i class="icon-settings font-dark"></i>
                  <span class="caption-subject bold uppercase">
                    {" "}
                    Candidate list
                  </span>
                </div>
              </div>
              <div class="portlet-body">
                <div class="table-toolbar">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="btn-group">
                        {" "}
                        <a
                          href={`/Candidat`}
                          id="sample_editable_1_2_new"
                          class="btn sbold green"
                        >
                          {" "}
                          Add New <i className="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
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
                <table
                  class="table table-striped table-bordered table-hover"
                  id="sample_3"
                >
                  <thead>
                    <tr>
                      <th> Username </th>
                      <th> Email </th>
                      <th> Status </th> <th> Domain </th>
                      <th> Joined </th>
                      <th> Actions </th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th> </th>
                      <th> </th>
                      <th> </th>
                      <th> </th> <th> </th>
                      <th> </th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {data.Candidate.map(
                      ({
                        Email,
                        Last_Name,
                        Name,
                        domain,
                        id,
                        phone_number,
                        Status,
                        joined,
                      }) => {
                        const formattedJoinedAt = format(
                          parseISO(joined),
                          "MM/dd/yyyy"
                        );
                        return (
                          <tr key={id} class="odd gradeX">
                            <td>{Name}</td>
                            <td>{Email}</td>
                            <td>
                              {Status === 1 ? (
                                <span class="label label-sm label-success">
                                  {" "}
                                  Approved{" "}
                                </span>
                              ) : Status === 2 ? (
                                <span class="label label-sm label-danger">
                                  {" "}
                                  Rejected{" "}
                                </span>
                              ) : (
                                <span class="label label-sm label-warning">
                                  {" "}
                                  ON HOLD{" "}
                                </span>
                              )}
                            </td>
                            <th> {domain} </th>
                            <td class="center">{formattedJoinedAt} </td>
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
                                <ul class="dropdown-menu pull-left" role="menu">
                                  {/* <li>
                                    <a href="javascript:;">
                                      <i class="icon-docs"></i> New Post{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i class="icon-tag"></i> New Comment{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i class="icon-user"></i> New User{" "}
                                    </a>
                                  </li>
                                  <li class="divider"> </li> */}
                                  {Status === 1 ? (
                                    <li></li>
                                  ) : Status === 2 ? (
                                    <li></li>
                                  ) : (
                                    <li>
                                      <a
                                        className="closeBtn"
                                        onClick={() => updateStatus(id)}
                                      >
                                        {" "}
                                        <i class="icon-user"></i>Approve
                                        Candidat
                                      </a>
                                    </li>
                                  )}
                                  <li>
                                    <Link href={`/CandidatOne/${id}`}>
                                      <a>Edit</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <a
                                      className="closeBtn"
                                      onClick={() => deleteATodo(id)}
                                    >
                                      Delete Candidat
                                    </a>
                                  </li>
                                  {Status === 1 ? (
                                    <li></li>
                                  ) : Status === 2 ? (
                                    <li></li>
                                  ) : (
                                    <li>
                                      {" "}
                                      <a
                                        className="closeBtn"
                                        onClick={() => DeclineCandidat(id)}
                                      >
                                        Decline Candidat
                                      </a>
                                    </li>
                                  )}{" "}
                                </ul>
                              </div>
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
    </div>
  );
}
