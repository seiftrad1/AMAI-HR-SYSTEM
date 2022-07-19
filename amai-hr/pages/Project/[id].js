import { useRouter } from "next/router";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { gql, hasuraUserClient } from "../../lib/hasura-user-client";
import { useAuthState } from "../../context/auth";
import { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { differenceInDays } from "date-fns";

const getProjectsIds = gql`
  {
    Project {
      id
      Description
      created_at
      Title
      delivery_date
      assigned
      contact_date
      company_name
      type
      file
      income
    }
  }
`;

const GetProjectByID = gql`
  query GetProjectByID($id: Int!) {
    Project_by_pk(id: $id) {
      id
      Description
      created_at
      Title
      delivery_date
      assigned
      contact_date
      company_name
      type
      file
      income
    }
  }
`;
const GetProjectByUser = gql`
  query User($id: Int!) {
    User(where: { project_id: { _is_null: true } }) {
      id
      Name
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { Project } = await hasura.request(getProjectsIds);

  return {
    paths: Project.map(({ id }) => ({
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

  const initialData = await hasura.request(GetProjectByID, { id });

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};
const UpdateProject = gql`
  mutation update_Candidate_by_pk(
    $id: Int!
    $Title: String!
    $Description: String!
    $company_name: String!
    $type: String!
    $income: String!
  ) {
    update_Project_by_pk(
      pk_columns: { id: $id }
      _set: {
        Title: $Title
        Description: $Description
        company_name: $company_name
        type: $type
        income: $income
      }
    ) {
      id
      Title
      Description
      created_at
      delivery_date
      assigned
      contact_date
      company_name
      type
      income
    }
  }
`;
const Updatedates = gql`
  mutation update_Candidate_by_pk(
    $id: Int!
    $contact_date: timestamp!
    $delivery_date: timestamp!
  ) {
    update_Project_by_pk(
      pk_columns: { id: $id }
      _set: { contact_date: $contact_date, delivery_date: $delivery_date }
    ) {
      id
      Title
      Description
      created_at
      delivery_date
      assigned
      contact_date
      company_name
      type
      income
    }
  }
`;
export default function ProjectEdit({ initialData }) {
  const hasura = hasuraUserClient();
  const { query } = useRouter();
  const router = useRouter();
  const { isAuthenticated, user } = useAuthState();
  const [File, setFile] = useState(null);
  const [state, setState] = useState(false);

  const [createObjectURL, setCreateObjectURL] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const { id } = query;
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
    defaultValues: { ...defaultValues },
  } = useForm();
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm();
  const { data, mutate } = useSWR(
    [GetProjectByID, id],
    (query, id) => hasura.request(query, { id }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  const startdate = format(
    parseISO(data.Project_by_pk.contact_date),
    "yyyy-MM-dd"
  );
  const endate = format(
    parseISO(data.Project_by_pk.delivery_date),
    "yyyy-MM-dd"
  );
  const uploadFileToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
      setState(true);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const uploadFileToServer = async () => {
    const body = new FormData();
    body.append("file", File);
    const response = await fetch("/api/file/", {
      method: "POST",
      body,
    });

    const UploadFile = gql`
      mutation MyMutation($file: String!, $id: Int!) {
        update_Project_by_pk(pk_columns: { id: $id }, _set: { file: $file }) {
          file
        }
      }
    `;
    try {
      const { update_Project_by_pk } = await hasura.request(UploadFile, {
        id,
        file: File.name,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
    return;
  };
  const onSubmit = async ({
    Title,
    Description,
    company_name,
    income,
    type,
  }) => {
    try {
      const id = data.Project_by_pk.id;
      const { update_Project_by_pk } = await hasura.request(UpdateProject, {
        id,
        Title,
        Description,
        company_name,
        income,
        type,
      });

      mutate({
        ...data,
        ...update_Project_by_pk,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const addproject = () => {
    const pathname = `/Project/List`;
    location.replace(pathname);
  };
  const updatedate = async ({ delivery_date, contact_date }) => {
    try {
      const count_d = differenceInDays(
        Date.parse(delivery_date),
        Date.parse(contact_date)
      );
      if (count_d < 1) {
        alert("please enter a valid period");
      } else {
        const idt = data.Project_by_pk.id;
        const { update_Project_by_pk } = await hasura.request(Updatedates, {
          id: idt,
          contact_date,
          delivery_date,
        });

        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="profile-content">
          <div className="row">
            <div className="col-md-12">
              <div className="portlet light ">
                <div className="portlet-body">
                  <div className="row">
                    {" "}
                    <div className="col-md-11">
                      {" "}
                      <h3 className="caption-subject font-blue-madison bold uppercase">
                        Update Project information
                      </h3>{" "}
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a href="#tab_1_1" data-toggle="tab">
                            General Info
                          </a>
                        </li>
                        <li>
                          <a href="#tab_1_2" data-toggle="tab">
                            Update file/Contract
                          </a>
                        </li>
                        <li>
                          <a href="#tab_1_3" data-toggle="tab">
                            Update dates
                          </a>
                        </li>{" "}
                      </ul>
                    </div>
                    <div className="col-md-1">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <a
                          id="sample_editable_1_2_new"
                          className="btn sbold green"
                          onClick={() => addproject()}
                        >
                          Back <i className="icon-logout"></i>
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                  <hr></hr>{" "}
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1_1">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {" "}
                        <div className="form-group">
                          <label className="control-label">Client</label>
                          <input
                            defaultValue={data.Project_by_pk.company_name}
                            name="company_name"
                            id="company_name"
                            type="text"
                            placeholder="Client"
                            className="form-control"
                            ref={register}
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label className="control-label">Project Title</label>
                          <input
                            defaultValue={data.Project_by_pk.Title}
                            name="Title"
                            id="Title"
                            type="text"
                            placeholder="Project Title"
                            className="form-control"
                            ref={register}
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label className="control-label">
                            Project Description
                          </label>
                          <textarea
                            defaultValue={data.Project_by_pk.Description}
                            name="Description"
                            id="Description"
                            type="textarea"
                            placeholder="Description"
                            className="form-control"
                            ref={register}
                          />{" "}
                        </div>{" "}
                        <div className="form-group">
                          <label>Income</label>
                          <div className="form-group">
                            <input
                              defaultValue={data.Project_by_pk.income}
                              name="income"
                              className="form-control"
                              id="income"
                              type="text"
                              ref={register}
                            />
                            <span className="help-block"> </span>
                          </div>
                        </div>{" "}
                        <div className="form-group">
                          <label className="control-label">type</label>
                          <input
                            defaultValue={data.Project_by_pk.type}
                            name="type"
                            id="type"
                            type="text"
                            placeholder="type"
                            className="form-control"
                            ref={register}
                          />{" "}
                        </div>
                        {/*make it tabs  */}
                        <br />
                        <br />
                        <div className="margiv-top-10">
                          <button
                            type="submit"
                            className="btn green"
                            disabled={isSubmitting}
                          >
                            {" "}
                            Save Changes{" "}
                          </button>
                        </div>
                      </form>{" "}
                    </div>{" "}
                    <div className="tab-pane " id="tab_1_2">
                      <form action="#" role="form">
                        <div className="form-group">
                          <div
                            className="fileinput fileinput-new"
                            data-provides="fileinput"
                          >
                            <img
                              src="../../assets/global/img/pdf.png"
                              href="#myModal"
                              style={{ maxWidth: 35 }}
                            />{" "}
                            {data.Project_by_pk.file}
                            <br /> <br />
                            <div>
                              <span className="btn default btn-file">
                                <input
                                  type="file"
                                  name="File"
                                  onChange={uploadFileToClient}
                                  required
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="margin-top-10">
                          {state ? (
                            <button
                              onClick={uploadFileToServer}
                              className="btn green"
                            >
                              {" "}
                              Submit{" "}
                            </button>
                          ) : (
                            <button
                              onClick={uploadFileToServer}
                              className="btn green"
                              disabled
                            >
                              {" "}
                              Submit{" "}
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane " id="tab_1_3">
                      <form onSubmit={handleSubmit2(updatedate)}>
                        <div className="form-group">
                          <label>starting date</label> <br />
                          <TextField
                            id="contact_date"
                            name="contact_date"
                            type="date"
                            defaultValue={startdate}
                            inputRef={register2}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>expected delievry date</label> <br />
                          <TextField
                            id="delivery_date"
                            name="delivery_date"
                            type="date"
                            defaultValue={endate}
                            inputRef={register2}
                            required
                          />
                        </div>{" "}
                        <div className="margin-top-10">
                          <button
                            type="submit"
                            className="btn green"
                            disabled={isSubmitting}
                          >
                            Change dates{" "}
                          </button>
                        </div>
                      </form>
                    </div>
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
