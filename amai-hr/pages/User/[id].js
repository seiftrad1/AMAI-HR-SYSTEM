import { useState } from "react";
import { useRouter } from "next/router";
import { hasuraUserClient } from "../../lib/hasura-user-client";
import { gql } from "../../lib/hasura-admin-client";
import useSWR from "swr";
import { useAuthDispatch, useAuthState } from "../../context/auth";
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import { useEffect } from "react";

const GetUsersId = gql`
  {
    User {
      id
      Last_Name
      Name
      Avatar
      email
      Role
      Phone_Number
      Domain
      password
      File
      manager_id
      User {
        email
        Name
      }
    }
  }
`;

const GetUserById = gql`
  query GetUserById($id: Int!) {
    User_by_pk(id: $id) {
      id
      Name
      Avatar
      email
      Role
      Phone_Number
      Last_Name
      Domain
      password
      File
      manager_id
      Tasks_aggregate {
        aggregate {
          count
        }
      }
      LinkedIn
      Github
      Site
      User {
        email
        Name
        Last_Name
        Avatar
      }
    }
  }
`;

const Countprojects = gql`
  query MyQuery($id: Int!) {
    Project_aggregate(where: { Tasks: { user_id: { _eq: $id } } }) {
      aggregate {
        count
      }
    }
  }
`;
const managers = gql`
  query MyQuery {
    User(where: { Role: { _eq: "Manager" } }) {
      id
      Avatar
      email
      Name
      Last_Name
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { User } = await hasura.request(GetUsersId);

  return {
    paths: User.map(({ id }) => ({
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
  const initialData = await hasura.request(GetUserById, { id });
  const Countp = await hasura.request(Countprojects, { id });
  const manager = await hasura.request(managers);

  return {
    props: {
      initialData,
      Countp,
      manager,
    },
    revalidate: 1,
  };
};
const UpdateUser = gql`
  mutation update_User_by_pk(
    $id: Int!
    $Name: String!
    $Last_Name: String!
    $email: String!
    $Phone_Number: String!
    $LinkedIn: String!
    $Github: String!
    $Site: String!
    $Role: String!
    $Domain: String!
  ) {
    update_User_by_pk(
      pk_columns: { id: $id }
      _set: {
        Name: $Name
        Last_Name: $Last_Name
        email: $email
        Phone_Number: $Phone_Number
        LinkedIn: $LinkedIn
        Github: $Github
        Site: $Site
        Role: $Role
        Domain: $Domain
      }
    ) {
      id
      Name
      Last_Name
      email
      Phone_Number
      LinkedIn
      Github
      Site
      Role
      Domain
    }
  }
`;
const UpdateManager = gql`
  mutation update_User_by_pk($id: Int!, $manager_id: Int = "") {
    update_User_by_pk(
      pk_columns: { id: $id }
      _set: { manager_id: $manager_id }
    ) {
      id
      Name
      Last_Name
      email
      Phone_Number
      LinkedIn
      Github
      Site
      manager_id
      Role
    }
  }
`;
const UpdatePassword = gql`
  mutation update_User_by_pk($id: Int!, $password: String!) {
    update_User_by_pk(pk_columns: { id: $id }, _set: { password: $password }) {
      id
    }
  }
`;
export default function PrivatePage({ initialData, Countp, manager }) {
  const [image, setImage] = useState(null);
  const [File, setFile] = useState(null);
  const [acc, setAcc] = useState(true);

  const { updateUser } = useAuthDispatch();
  const hasura = hasuraUserClient();

  const [createObjectURL, setCreateObjectURL] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { isAuthenticated } = useAuthState();

  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
    defaultValues: { ...defaultValues },
  } = useForm();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const removefile = () => {
    setImage(null);
  };
  const Account = () => {
    setAcc(false);
  };
  const view = () => {
    setAcc(true);
  };
  const uploadFileToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm();
  const {
    register: register3,
    errors: errors3,
    handleSubmit: handleSubmit3,
  } = useForm();
  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file/", {
      method: "POST",
      body,
    });

    const UploadImage = gql`
      mutation MyMutation($Avatar: String!, $id: Int!) {
        update_User_by_pk(pk_columns: { id: $id }, _set: { Avatar: $Avatar }) {
          Avatar
          Name
        }
      }
    `;
    try {
      const { update_User_by_pk } = await hasura.request(UploadImage, {
        id,
        Avatar: image.name,
      });
      updateUser(update_User_by_pk);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
    return;
  };
  const uploadFileToServer = async () => {
    const body = new FormData();
    body.append("file", File);
    const response = await fetch("/api/file/", {
      method: "POST",
      body,
    });

    const UploadFile = gql`
      mutation MyMutation($File: String!, $id: Int!) {
        update_User_by_pk(pk_columns: { id: $id }, _set: { File: $File }) {
          File
        }
      }
    `;
    try {
      const { update_User_by_pk } = await hasura.request(UploadFile, {
        id,
        File: File.name,
      });
      updateUser(update_User_by_pk);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
    return;
  };
  const { data, mutate } = useSWR(
    [GetUserById, id],
    (query, id) => hasura.request(query, { id }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  const ChangePassword = async ({ password, confirmpassword }) => {
    try {
      const id = data.User_by_pk.id;

      const salt = await bcrypt.genSalt();
      if (password == confirmpassword) {
        const { update_User_by_pk } = await hasura.request(UpdatePassword, {
          id,
          password: await bcrypt.hash(password, salt),
        });

        mutate({
          ...data,
          ...update_User_by_pk,
        });
        window.location.reload();
      } else {
        alert("Passwords don't match");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const UpdateUserB = async ({
    Name,
    Last_Name,
    email,
    Phone_Number,
    LinkedIn,
    Github,
    Site,
    Role,
    Domain,
  }) => {
    try {
      const id = data.User_by_pk.id;

      const { update_User_by_pk } = await hasura.request(UpdateUser, {
        id,
        Name,
        Last_Name,
        email,
        Phone_Number,
        LinkedIn,
        Github,
        Site,
        Role,
        Domain,
      });

      mutate({
        ...data,
        ...update_User_by_pk,
      });
      updateUser(update_User_by_pk);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateUserManager = async ({ manager_id }) => {
    try {
      const id = data.User_by_pk.id;

      const { update_User_by_pk } = await hasura.request(UpdateManager, {
        id,
        manager_id,
      });

      mutate({
        ...data,
        ...update_User_by_pk,
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="profile-sidebar">
              <div className="portlet light profile-sidebar-portlet ">
                <div className="profile-userpic">
                  {data.User_by_pk.Avatar ? (
                    <img
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: 225,
                        height: 225,
                      }}
                      src={`../../${data.User_by_pk.Avatar}`}
                      class="img-responsive"
                      alt=""
                    />
                  ) : (
                    <img
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: 225,
                        height: 225,
                      }}
                      src={`../../profile.png`}
                      class="img-responsive"
                      alt=""
                    />
                  )}
                </div>{" "}
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">
                    {" "}
                    {data.User_by_pk.Name} {data.User_by_pk.Last_Name}{" "}
                  </div>
                  {/* <div className="profile-usertitle-job">
                    {" "}
                    {data.User_by_pk.Domain}{" "}
                  </div>{" "} */}
                  {/* <div class="profile-userbuttons">
                    <button type="button" class="btn btn-circle green btn-sm">
                      Follow
                    </button>
                    <button type="button" class="btn btn-circle red btn-sm">
                      Message
                    </button>
                  </div> */}
                  <div class="profile-usermenu">
                    <ul class="nav">
                      {" "}
                      <li class="active">
                        <a onClick={view}>
                          <i class="icon-home"></i> Overview{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
              <div className="portlet light ">
                <div className="row list-separated profile-stat">
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="uppercase profile-stat-title">
                      {Countp.Project_aggregate.aggregate.count}
                    </div>
                    <div className="uppercase profile-stat-text">
                      {" "}
                      Live Projects{" "}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="uppercase profile-stat-title">
                      {" "}
                      {data.User_by_pk.Tasks_aggregate.aggregate.count}
                    </div>
                    <div className="uppercase profile-stat-text"> Tasks </div>
                  </div>
                </div>
                <div>
                  <h4 className="profile-desc-title">
                    About {data.User_by_pk.Name}
                  </h4>
                  <div className="margin-top-20 profile-desc-link">
                    {" "}
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    <a href={data.User_by_pk.LinkedIn}>
                      {data.User_by_pk.LinkedIn}
                    </a>
                  </div>
                  <div className="margin-top-20 profile-desc-link">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                    <a href={data.User_by_pk.Github}>
                      {data.User_by_pk.Github}
                    </a>
                  </div>
                  <div className="margin-top-20 profile-desc-link">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <a href={data.User_by_pk.Site}>{data.User_by_pk.Site}</a>
                  </div>{" "}
                  <div
                    id="myModal"
                    class="modal fade"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <a
                            href="javascript:;"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                          ></a>
                          <h4 class="modal-title">Pdf file</h4>
                        </div>
                        <div class="modal-body">
                          {" "}
                          <embed
                            src={`../../${data.User_by_pk.File}`}
                            type="application/pdf"
                            width="570"
                            height="800"
                            frameborder="0"
                            allowfullscreen
                          />
                        </div>
                        <div class="modal-footer">
                          <a
                            href="javascript:;"
                            class="btn grey-salsa btn-outline"
                            data-dismiss="modal"
                          >
                            Close
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-content">
              {" "}
              <div className="row">
                <div className="col-md-12">
                  <div className="portlet light ">
                    <div className="portlet-title tabbable-line">
                      <div className="caption caption-md">
                        <i className="icon-globe theme-font hide"></i>
                        <span className="caption-subject font-blue-madison bold uppercase">
                          Edit User Account
                        </span>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a href="#tab_1_1" data-toggle="tab">
                            Personal Info
                          </a>
                        </li>
                        <li>
                          <a href="#tab_1_2" data-toggle="tab">
                            Change Avatar
                          </a>
                        </li>
                        <li>
                          <a href="#tab_1_3" data-toggle="tab">
                            Change Password
                          </a>
                        </li>{" "}
                        <li>
                          <a href="#tab_1_4" data-toggle="tab">
                            Update CV
                          </a>
                        </li>
                        {data.User_by_pk.Role == "Employee" ? (
                          <li>
                            <a href="#tab_1_5" data-toggle="tab">
                              Update Manager
                            </a>
                          </li>
                        ) : (
                          <li></li>
                        )}
                      </ul>
                    </div>
                    <div className="portlet-body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab_1_1">
                          <form onSubmit={handleSubmit(UpdateUserB)}>
                            <div className="form-group">
                              <label className="control-label">
                                First Name
                              </label>
                              <input
                                defaultValue={data.User_by_pk.Name}
                                name="Name"
                                id="Name"
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                ref={register}
                              />
                            </div>
                            <div className="form-group">
                              <label className="control-label">Last Name</label>
                              <input
                                defaultValue={data.User_by_pk.Last_Name}
                                name="Last_Name"
                                type="text"
                                placeholder="Last Name"
                                className="form-control"
                                ref={register}
                              />
                            </div>
                            <div className="form-group">
                              <label className="control-label">
                                Mobile Number
                              </label>
                              <input
                                defaultValue={data.User_by_pk.Phone_Number}
                                type="text"
                                name="Phone_Number"
                                placeholder="+1 646 580 DEMO (6284)"
                                className="form-control"
                                ref={register}
                              />{" "}
                            </div>
                            <div className="form-group">
                              <label className="control-label">Email</label>
                              <div class="input-group">
                                <span class="input-group-addon">
                                  <i class="fa fa-envelope"></i>
                                </span>
                                <input
                                  defaultValue={data.User_by_pk.email}
                                  type="text"
                                  name="email"
                                  placeholder="Email"
                                  className="form-control"
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label">LinkedIN</label>
                              <input
                                defaultValue={data.User_by_pk.LinkedIn}
                                name="LinkedIn"
                                id="LinkedIn"
                                type="text"
                                placeholder="LinkedIn"
                                className="form-control"
                                ref={register}
                              />
                            </div>{" "}
                            <div className="form-group">
                              <label className="control-label">Github</label>
                              <input
                                defaultValue={data.User_by_pk.Github}
                                name="Github"
                                id="Github"
                                type="text"
                                placeholder="Github"
                                className="form-control"
                                ref={register}
                              />
                            </div>{" "}
                            <div className="form-group">
                              <label className="control-label">Site</label>
                              <input
                                defaultValue={data.User_by_pk.Site}
                                name="Site"
                                id="Site"
                                type="text"
                                placeholder="Site"
                                className="form-control"
                                ref={register}
                              />
                            </div>
                            <div className="form-group">
                              <label className="control-label">
                                Occupation
                              </label>
                              <input
                                defaultValue={data.User_by_pk.Domain}
                                type="text"
                                name="Domain"
                                id="Domain"
                                placeholder="Web Developer"
                                className="form-control"
                                ref={register}
                              />{" "}
                            </div>{" "}
                            <div className="form-group">
                              <label className="control-label">Role</label>
                              <input
                                defaultValue={data.User_by_pk.Role}
                                type="text"
                                name="Role"
                                id="Role"
                                className="form-control"
                                ref={register}
                              />{" "}
                            </div>{" "}
                            <div className="margin-top-10">
                              <button
                                type="submit"
                                class="btn green"
                                disabled={isSubmitting}
                              >
                                Save Changes{" "}
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane" id="tab_1_2">
                          <form action="#" role="form">
                            <div className="form-group">
                              <div
                                className="fileinput fileinput-new"
                                data-provides="fileinput"
                              >
                                {image ? (
                                  <div
                                    className="fileinput-new thumbnail"
                                    style={{
                                      width: 200,
                                      height: 220,
                                      objectFit: "cover",
                                    }}
                                  >
                                    <img
                                      src={createObjectURL}
                                      alt=""
                                      style={{
                                        width: 200,
                                        height: 200,
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className="fileinput-new thumbnail"
                                    style={{
                                      width: 200,
                                      height: 155,
                                      objectFit: "cover",
                                    }}
                                  >
                                    <img
                                      src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image"
                                      alt=""
                                    />
                                  </div>
                                )}{" "}
                              </div>
                              <div>
                                {image ? (
                                  <span class="fileinput-exists">
                                    {" "}
                                    Change
                                    <input type="file" name="..." />
                                    <a
                                      href="javascript:;"
                                      class="btn default fileinput-exists"
                                      data-dismiss="fileinput"
                                      onClick={removefile}
                                    >
                                      Remove
                                    </a>
                                  </span>
                                ) : (
                                  <span className="btn default btn-file">
                                    <input
                                      type="file"
                                      name="myImage"
                                      onChange={uploadToClient}
                                    />
                                  </span>
                                )}
                              </div>
                            </div>
                            {image ? (
                              <div className="margin-top-10">
                                <a
                                  onClick={uploadToServer}
                                  className="btn green"
                                >
                                  {" "}
                                  Submit{" "}
                                </a>
                              </div>
                            ) : (
                              <div className="margin-top-10">
                                <a
                                  onClick={uploadToServer}
                                  className="btn green"
                                  disabled
                                >
                                  {" "}
                                  Submit{" "}
                                </a>
                              </div>
                            )}
                          </form>
                        </div>
                        <div className="tab-pane" id="tab_1_3">
                          <form onSubmit={handleSubmit2(ChangePassword)}>
                            <div className="form-group">
                              <label className="control-label">
                                Current Password
                              </label>
                              <input
                                defaultValue={data.User_by_pk.password}
                                type="password"
                                className="form-control"
                              />{" "}
                            </div>
                            <div className="form-group">
                              <label className="control-label">
                                New Password
                              </label>
                              <input
                                name="password"
                                ref={register2}
                                type="password"
                                className="form-control"
                              />{" "}
                            </div>
                            <div className="form-group">
                              <label className="control-label">
                                Re-type New Password
                              </label>
                              <input
                                name="confirmpassword"
                                type="password"
                                className="form-control"
                                ref={register2}
                              />{" "}
                            </div>
                            <div className="margin-top-10">
                              <button
                                type="submit"
                                class="btn green"
                                disabled={isSubmitting}
                              >
                                Change Password{" "}
                              </button>
                            </div>
                          </form>
                        </div>{" "}
                        <div className="tab-pane " id="tab_1_4">
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
                                />

                                <div>
                                  <span className="btn default btn-file">
                                    <input
                                      type="file"
                                      name="File"
                                      onChange={uploadFileToClient}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            {File ? (
                              <div className="margin-top-10">
                                <a
                                  onClick={uploadFileToServer}
                                  className="btn green"
                                >
                                  {" "}
                                  Submit{" "}
                                </a>
                              </div>
                            ) : (
                              <div className="margin-top-10">
                                <a
                                  onClick={uploadFileToServer}
                                  className="btn green"
                                  disabled
                                >
                                  {" "}
                                  Submit{" "}
                                </a>
                              </div>
                            )}
                          </form>
                        </div>{" "}
                        <div className="tab-pane " id="tab_1_5">
                          <div
                            class="portlet light bordered tasks-widget"
                            style={{ height: 342 }}
                          >
                            <div class="slimScrollDiv">
                              <div class="mt-element-card mt-element-overlay">
                                <div class="col-md-2">
                                  <div class="mt-card-item">
                                    <div class="mt-card-avatar mt-overlay-1 mt-scroll-left">
                                      <img
                                        src={`../../${data.User_by_pk.User.Avatar}`}
                                      />
                                      <div class="mt-overlay">
                                        <ul class="mt-info"></ul>
                                      </div>
                                    </div>
                                    <div class="mt-card-content">
                                      <h3 class="mt-card-name">
                                        {data.User_by_pk.User.Name}{" "}
                                        {data.User_by_pk.User.Last_Name}
                                      </h3>
                                      <p class="mt-card-desc font-grey-mint">
                                        Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  Name : {data.User_by_pk.User.Name} <br />{" "}
                                  <br />
                                  Last Name :{data.User_by_pk.User.Last_Name}
                                  <br /> <br />
                                  Email : {data.User_by_pk.User.email}
                                  <br /> <br />
                                  Mobile Number :{" "}
                                  {data.User_by_pk.User.Phone_Number}
                                </div>{" "}
                                <div class="col-md-4">
                                  <form
                                    onSubmit={handleSubmit3(UpdateUserManager)}
                                  >
                                    <div class="form-group">
                                      <select
                                        name="manager_id"
                                        id="manager_id"
                                        ref={register3}
                                        required
                                        className="form-control select2 "
                                      >
                                        {" "}
                                        <option selected disabled>
                                          Select Manager
                                        </option>
                                        {manager.User.map(
                                          ({ id, Name, Avatar }) => (
                                            <React.Fragment key={id}>
                                              {" "}
                                              <option value={id}>
                                                {Name}{" "}
                                              </option>
                                            </React.Fragment>
                                          )
                                        )}
                                      </select>{" "}
                                    </div>{" "}
                                    <div class="form-group">
                                      <button
                                        type="submit"
                                        class="btn green"
                                        disabled={isSubmitting}
                                      >
                                        Change manager
                                      </button>
                                    </div>{" "}
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>{" "}
                      </div>
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
