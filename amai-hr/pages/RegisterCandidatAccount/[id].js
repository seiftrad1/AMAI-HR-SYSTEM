import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { gql, hasuraUserClient } from "../../lib/hasura-user-client";
import { useAuthState, useAuthDispatch } from "../../context/auth";
import { useState } from "react";

const created_at = new Date().toISOString();
const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
    }
  }
`;
const GetCandidateIds = gql`
  {
    Candidate {
      id
      Email
      Last_Name
      Name
      domain
      phone_number
      Status
      File
    }
  }
`;

const GetCandidateById = gql`
  query GetCategoryById($id: Int!) {
    Candidate_by_pk(id: $id) {
      id
      Email
      Last_Name
      Name
      domain
      phone_number
      Status
      File
    }
  }
`;
const GetUserByRole = gql`
  query MyQuery {
    User(where: { Role: { _eq: "Manager" } }) {
      id
      Name
      Last_Name
      email
      Avatar
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { Candidate } = await hasura.request(GetCandidateIds);

  return {
    paths: Candidate.map(({ id }) => ({
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
  console.log(params);
  console.log(id);
  const initialData = await hasura.request(GetCandidateById, { id });
  const Manager = await hasura.request(GetUserByRole);

  return {
    props: {
      initialData,
      Manager,
    },
    revalidate: 1,
  };
};
export default function RegisterPage({ initialData, Manager }) {
  const { query } = useRouter();
  const router = useRouter();
  const hasura = hasuraUserClient();
  const { id } = query;
  const { isAuthenticated } = useAuthState();
  const { register: createUser } = useAuthDispatch();
  const [File, setFile] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const {
    handleSubmit,
    register,
    errors,
    formState: { isSubmitting },
    setError,
  } = useForm({ defaultValues: { save_last_seen: true } });

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);
  const uploadFileToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const { data, mutate } = useSWR(
    [GetCandidateById, id],
    (query, id) => hasura.request(query, { id }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  // if (isAuthenticated) return null;
  const onSubmit = async ({
    name,
    last_name,
    email,
    domain,
    phone_number,
    password,
    confirmpassword,
    manager_id,
  }) => {
    const SetStatus = gql`
      mutation MyMutation($id: Int!) {
        update_Candidate_by_pk(pk_columns: { id: $id }, _set: { Status: 1 }) {
          id
          Status
        }
      }
    `;
    const {
      User: [foundUser],
    } = await hasura.request(GetUserByEmail, {
      email,
    });
    if (foundUser) {
      alert("Email already exists , please try another");
    } else if (password != confirmpassword) {
      alert("Passwords don't match");
    } else {
      try {
        await hasura.request(SetStatus, { id: id });
        mutate();
        await createUser({
          name,
          last_name,
          email,
          domain,
          phone_number,
          password,
          created_at,
          manager_id,
          File: data.Candidate_by_pk.File,
          manager_id,
        });
        router.push("/CandidatList");

        await fetch("/api/AcceptEmail", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
            last_name,
            email,
            password,
          }),
        });
      } catch ({ message }) {
        setError("email", {
          type: "manual",
          message,
        });
      }
    }
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        {" "}
        <div className="profile-content">
          <div className="col-md-12">
            {" "}
            <div className="col-md-6">
              {" "}
              <div className="portlet light ">
                <div className="portlet-body">
                  {" "}
                  <h3 className="font-green">New AMAIER ! </h3> <hr />{" "}
                  <div>
                    <img
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: 500,
                        height: 470,
                        margin: "auto",
                      }}
                      src="../aam.jpg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="portlet light ">
                <div className="portlet-body">
                  <form
                    className="register-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="content">
                      {" "}
                      <h3 className="font-green">Register Candidate</h3>{" "}
                      <div className="form-group">
                        {" "}
                        <label className="control-label">First name</label>
                        <input
                          defaultValue={data.Candidate_by_pk.Name}
                          className="form-control form-control-solid placeholder-no-fix"
                          name="name"
                          id="name"
                          ref={register}
                          placeholder="first name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        {" "}
                        <label className="control-label">Last name</label>
                        <input
                          defaultValue={data.Candidate_by_pk.Last_Name}
                          className="form-control form-control-solid placeholder-no-fix"
                          name="last_name"
                          id="last_name"
                          ref={register}
                          placeholder="last name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                          defaultValue={data.Candidate_by_pk.Email}
                          className="form-control form-control-solid placeholder-no-fix"
                          type="email"
                          name="email"
                          id="email"
                          ref={register({
                            required: "You must provide a email.",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "You must provide a valid email",
                            },
                          })}
                          placeholder="Your email"
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                      </div>{" "}
                      <div className="form-group">
                        {" "}
                        <label className="control-label">phone_number</label>
                        <input
                          defaultValue={data.Candidate_by_pk.phone_number}
                          className="form-control form-control-solid placeholder-no-fix"
                          name="phone_number"
                          id="phone_number"
                          ref={register}
                          placeholder="phone number"
                          required
                        />
                      </div>{" "}
                      <div className="form-group">
                        {" "}
                        <label className="control-label">Domain</label>
                        <input
                          defaultValue={data.Candidate_by_pk.domain}
                          className="form-control form-control-solid placeholder-no-fix"
                          name="domain"
                          id="domain"
                          ref={register}
                          placeholder="Domain"
                          required
                        />
                      </div>{" "}
                      <div className="form-group">
                        <label className="control-label">File</label>{" "}
                        {data.Candidate_by_pk.File}
                      </div>{" "}
                      <div className="form-group">
                        <select
                          name="manager_id"
                          id="manager_id"
                          ref={register}
                          required
                          className="form-control select2 "
                        >
                          {Manager.User.map(({ id, Name, Avatar }) => (
                            <React.Fragment key={id}>
                              {" "}
                              <option selected disabled>
                                Select Manager
                              </option>
                              <option value={id}>{Name} </option>
                            </React.Fragment>
                          ))}
                        </select>{" "}
                      </div>
                      <div className="form-group">
                        {" "}
                        <label className="control-label"> Password</label>
                        <input
                          className="form-control form-control-solid placeholder-no-fix"
                          type="password"
                          name="password"
                          id="password"
                          ref={register({
                            required: "You must provide a password.",
                            minLength: {
                              message:
                                "Your password must be at least 6 characters",
                              value: 6,
                            },
                          })}
                          placeholder="Choose a password"
                        />
                        {errors.password && (
                          <span>{errors.password.message}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="control-label">
                          Confirm Password
                        </label>
                        <input
                          name="confirmpassword"
                          type="password"
                          className="form-control form-control-solid placeholder-no-fix"
                          ref={register({
                            required: "You must confirm  the password.",
                            minLength: {
                              message:
                                "Your password must be at least 6 characters",
                              value: 6,
                            },
                          })}
                          placeholder="Confirm password"
                        />{" "}
                        {errors.confirmpassword && (
                          <span>{errors.confirmpassword.message}</span>
                        )}
                      </div>
                      <div className="create-account">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn green uppercase"
                        >
                          Create account
                        </button>
                      </div>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
