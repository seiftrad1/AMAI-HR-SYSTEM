import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { hasuraAdminClient, gql } from "../lib/hasura-admin-client";
import { ToastContainer, toast } from "react-toastify";

import { useAuthState, useAuthDispatch } from "../context/auth";
const created_at = new Date().toISOString();
const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
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

export const getStaticProps = async () => {
  const Manager = await hasuraAdminClient.request(GetUserByRole);

  return {
    props: {
      Manager,
    },
  };
};
export default function RegisterPage({ Manager }) {
  const router = useRouter();
  const { isAuthenticated } = useAuthState();
  const { register: createUser } = useAuthDispatch();
  const {
    handleSubmit,
    register,
    errors,
    formState: { isSubmitting },
    setError,
  } = useForm({ defaultValues: { save_last_seen: true } });
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push("/");
  //   }
  // }, [isAuthenticated]);

  // if (isAuthenticated) return null;
  console.log(Manager);
  const onSubmit = async ({
    name,
    email,
    password,
    last_name,
    domain,
    phone_number,
    confirmpassword,
    manager_id,
  }) => {
    const {
      User: [foundUser],
    } = await hasuraAdminClient.request(GetUserByEmail, {
      email,
    });

    if (foundUser) {
      alert("Email already exists , please try another");
    } else if (password != confirmpassword) {
      alert("Passwords don't match");
    } else {
      try {
        await createUser({
          name,
          email,
          password,
          last_name,
          domain,
          phone_number,
          created_at,
          manager_id,
          Role: "Employee",
        });
        toast("Account created");
        window.location.reload();

        await fetch("/api/emailhey", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
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
  const onSubmitManager = async ({
    name,
    email,
    password,
    last_name,
    domain,
    phone_number,
    confirmpassword,
  }) => {
    const {
      User: [foundUser],
    } = await hasuraAdminClient.request(GetUserByEmail, {
      email,
    });

    if (foundUser) {
      alert("Email already exists , please try another");
    } else if (password != confirmpassword) {
      alert("Passwords don't match");
    } else {
      try {
        await createUser({
          name,
          email,
          password,
          last_name,
          domain,
          phone_number,
          created_at,
          Role: "Manager",
        });
        toast("Account created");
        window.location.reload();
        await fetch("/api/emailhey", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
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
        <div class="profile-content">
          <div class="col-md-12">
            {" "}
            <div class="col-md-6">
              {" "}
              <div class="portlet light ">
                <div class="portlet-body">
                  {" "}
                  <h3 class="font-green">New AMAIER ! </h3> <hr />{" "}
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
            <div class="col-md-6">
              <div class="portlet light ">
                {" "}
                <div className="portlet-title tabbable-line">
                  <div className="caption caption-md">
                    <i className="icon-globe theme-font hide"></i>
                    <span className="caption-subject font-blue-madison bold uppercase">
                      Create user account
                    </span>
                  </div>
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab_1_1" data-toggle="tab">
                        Employee
                      </a>
                    </li>
                    <li>
                      <a href="#tab_1_2" data-toggle="tab">
                        Manager
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="portlet-body">
                  {" "}
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1_1">
                      <h3 class="font-green">Employee</h3>
                      <hr />
                      <form
                        class="register-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div class="content">
                          {" "}
                          <div class="form-group">
                            {" "}
                            <label>First Name</label>{" "}
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="name"
                              id="name"
                              ref={register}
                              placeholder="name"
                              size="10"
                            />
                          </div>
                          <div class="form-group">
                            {" "}
                            <label>Last Name</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="last_name"
                              id="last_name"
                              ref={register}
                              placeholder="last name"
                            />
                          </div>
                          {errors.name && <span>{errors.name.message}</span>}
                          <div class="form-group">
                            <label>Email</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              type="email"
                              name="email"
                              id="email"
                              ref={register({
                                required: "You must provide a email.",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "You must provide a valid email",
                                },
                              })}
                              placeholder="Your email"
                            />
                            {errors.email && (
                              <span>{errors.email.message}</span>
                            )}
                          </div>{" "}
                          <div class="form-group">
                            {" "}
                            <label>Domain</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="domain"
                              id="domain"
                              ref={register}
                              placeholder="domain"
                            />
                          </div>{" "}
                          <div class="form-group">
                            {" "}
                            <label>Phone number</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="phone_number"
                              id="phone_number"
                              ref={register}
                              placeholder="Phone number"
                            />
                          </div>{" "}
                          <div class="form-group">
                            <select
                              name="manager_id"
                              id="manager_id"
                              ref={register}
                              required
                              className="form-control select2 "
                            >
                              {" "}
                              <option selected disabled>
                                Select Manager
                              </option>
                              {Manager.User.map(({ id, Name, Avatar }) => (
                                <React.Fragment key={id}>
                                  {" "}
                                  <option value={id}>{Name} </option>
                                </React.Fragment>
                              ))}
                            </select>{" "}
                          </div>
                          <div class="form-group">
                            {" "}
                            <label>Password</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
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
                            )}{" "}
                          </div>
                          <div className="form-group">
                            <label className="control-label">
                              Confirm Password
                            </label>
                            <input
                              name="confirmpassword"
                              type="password"
                              class="form-control form-control-solid placeholder-no-fix"
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
                          </div>
                          <hr />
                          <div class="create-account">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              class="btn green uppercase"
                            >
                              Create account
                            </button>{" "}
                            <ToastContainer hideProgressBar={true} />
                          </div>{" "}
                        </div>
                      </form>
                    </div>{" "}
                    <div className="tab-pane" id="tab_1_2">
                      {" "}
                      <h3 class="font-green">Manager</h3>
                      <hr />
                      <form
                        class="register-form"
                        onSubmit={handleSubmit2(onSubmitManager)}
                      >
                        <div class="content">
                          {" "}
                          <div class="form-group">
                            {" "}
                            <label>First Name</label>{" "}
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="name"
                              id="name1"
                              ref={register2}
                              placeholder="name"
                              size="10"
                            />
                          </div>
                          <div class="form-group">
                            {" "}
                            <label>Last Name</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="last_name"
                              id="last_name1"
                              ref={register2}
                              placeholder="last name"
                            />
                          </div>
                          {errors.name && <span>{errors.name.message}</span>}
                          <div class="form-group">
                            <label>Email</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              type="email"
                              name="email"
                              id="email1"
                              ref={register2({
                                required: "You must provide a email.",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "You must provide a valid email",
                                },
                              })}
                              placeholder="Your email"
                            />
                            {errors.email && (
                              <span>{errors.email.message}</span>
                            )}
                          </div>{" "}
                          <div class="form-group">
                            {" "}
                            <label>Domain</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="domain"
                              id="domain1"
                              ref={register2}
                              placeholder="domain"
                            />
                          </div>{" "}
                          <div class="form-group">
                            {" "}
                            <label>Phone number</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              name="phone_number"
                              id="phone_number1"
                              ref={register2}
                              placeholder="Phone number"
                            />
                          </div>{" "}
                          <div class="form-group">
                            {" "}
                            <label>Password</label>
                            <input
                              class="form-control form-control-solid placeholder-no-fix"
                              type="password"
                              name="password"
                              id="password1"
                              ref={register2({
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
                            )}{" "}
                          </div>
                          <div className="form-group">
                            <label className="control-label">
                              Confirm Password
                            </label>
                            <input
                              name="confirmpassword"
                              type="password"
                              class="form-control form-control-solid placeholder-no-fix"
                              ref={register2({
                                required: "You must confirm  the password.",
                                minLength: {
                                  message:
                                    "Your password must be at least 6 characters",
                                  value: 6,
                                },
                              })}
                              placeholder="Confirm password"
                            />{" "}
                          </div>
                          <hr />
                          <div class="create-account">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              class="btn green uppercase"
                            >
                              Create account
                            </button>{" "}
                            <ToastContainer hideProgressBar={true} />
                          </div>{" "}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
