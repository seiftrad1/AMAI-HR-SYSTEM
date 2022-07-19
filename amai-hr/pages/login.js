import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React from "react";
import { useAuthState, useAuthDispatch } from "../context/auth";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthState();
  const { login } = useAuthDispatch();
  const {
    handleSubmit,
    register,
    errors,
    formState: { isSubmitting },
    setError,
  } = useForm({ defaultValues: { save_last_seen: true } });

  useEffect(() => {
    if (isAuthenticated) {
      if (user.Role === "Admin") {
        location.replace("/");
      } else {
        location.replace(`/Profile/${user.id}`);
      }
    }
  }, [isAuthenticated]);

  if (isAuthenticated) return null;

  const onSubmit = async ({ email, password, save_last_seen }) => {
    try {
      await login({ email, password, save_last_seen });
    } catch ({ message }) {
      setError("email", {
        type: "manual",
        message,
      });
    }
  };

  return (
    // <div className="page-content-wrapper">
    //   <div className="page-content" style={{ minHeight: 1500 }}>
    //     <img
    //       src="../assets/pages/img/AMAI-AI-Experts-white.inline.svg"
    //       style={{ height: 17 }}
    //       alt=""
    //     />{" "}
    //     <h3 class="form-title font-green">Sign In</h3>
    //     <div class="alert alert-danger display-hide">
    //       <button class="close" data-close="alert"></button>
    //       <span> Enter any username and password. </span>
    //     </div>
    //     <form onSubmit={handleSubmit(onSubmit)} class="login-form">
    //       <div class="form-group">
    //         <input
    //           class="form-control form-control-solid placeholder-no-fix"
    //           type="email"
    //           name="email"
    //           id="email"
    //           ref={register({
    //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //             required: "You must provide a email.",
    //           })}
    //           placeholder="Your email"
    //         />
    //         {errors.email && <span>{errors.email.message}</span>}
    //       </div>
    //       <div>
    //         <label class="control-label visible-ie8 visible-ie9">
    //           Password
    //         </label>
    //         <input
    //           class="form-control placeholder-no-fix"
    //           type="password"
    //           name="password"
    //           id="password"
    //           ref={register({
    //             required: "You must provide a password.",
    //           })}
    //           placeholder="Enter your password"
    //         />
    //         {errors.password && <span>{errors.password.message}</span>}
    //       </div>

    //       <div class="form-actions">
    //         <button
    //           id="save_last_seen"
    //           name="save_last_seen"
    //           ref={register}
    //           class="btn green uppercase"
    //           type="submit"
    //           disabled={isSubmitting}
    //         >
    //           Login
    //         </button>{" "}
    //         {/* <label
    //           htmlFor="save_last_seen"
    //           class="rememberme check mt-checkbox mt-checkbox-outline"
    //         >
    //           <input
    //             type="checkbox"
    //             id="save_last_seen"
    //             name="save_last_seen"
    //             ref={register}
    //           />
    //           Show as online to other users <span></span>
    //         </label> */}
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div class="login">
      <div class="user-login-5">
        <div class="row bs-reset">
          <div class="col-md-6 login-container bs-reset">
            {" "}
            <div style={{ marginTop: "10%", marginLeft: "8%" }}>
              <img src="../svg/AMAI.svg" alt="logo" className="logo-default" />{" "}
            </div>
            <div class="login-content" style={{ marginTop: "10%" }}>
              <h1>
                {" "}
                Welcome To AMAI internal system, please login first to access
                the plateform
              </h1>{" "}
              <form onSubmit={handleSubmit(onSubmit)} class="login-form">
                <div class="form-group">
                  <label>Email:</label>
                  <input
                    class="form-control form-control-solid placeholder-no-fix"
                    type="email"
                    name="email"
                    id="email"
                    ref={register({
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      required: "You must provide a email.",
                    })}
                    placeholder="Your email"
                  />{" "}
                  {errors.email && (
                    <span class="alert alert-danger fade in">
                      {errors.email.message}
                    </span>
                  )}
                </div>{" "}
                <div class="form-group">
                  <label>Password:</label>

                  <input
                    class="form-control placeholder-no-fix"
                    type="password"
                    name="password"
                    id="password"
                    ref={register({
                      required: "You must provide a password.",
                    })}
                    placeholder="Enter your password"
                  />
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div class="form-actions">
                  <button
                    id="save_last_seen"
                    name="save_last_seen"
                    ref={register}
                    class="btn green uppercase"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>{" "}
                  {/* <label
              htmlFor="save_last_seen"
              class="rememberme check mt-checkbox mt-checkbox-outline"
            >
              <input
                type="checkbox"
                id="save_last_seen"
                name="save_last_seen"
                ref={register}
              />
              Show as online to other users <span></span>
            </label> */}
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6 bs-reset">
            <div class="login-bg">
              {" "}
              <img src="../assets/pages/img/login/bg1.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
