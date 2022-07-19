import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuthState } from "../context/auth";
import { gql, hasuraAdminClient } from "../lib/hasura-admin-client";
import { hasuraUserClient } from "../lib/hasura-user-client";
const joined = new Date().toISOString();
const GetUsers = gql`
  {
    User {
      Name
      id
    }
  }
`;
const getCandidatebyemail = gql`
  query GetUserByEmail($Email: String!) {
    Candidate(where: { Email: { _eq: $Email } }) {
      id
    }
  }
`;
const InsertTask = gql`
  mutation InsertTask(
    $Email: String!
    $Last_Name: String!
    $Name: String!
    $domain: String!
    $phone_number: String!
    $joined: timestamptz!
    $File: String!
    $manager_id: Int!
  ) {
    insert_Candidate_one(
      object: {
        Email: $Email
        Last_Name: $Last_Name
        Name: $Name
        domain: $domain
        phone_number: $phone_number
        joined: $joined
        File: $File
        manager_id: $manager_id
        Status: 0
      }
    ) {
      Email
      Last_Name
      Name
      domain
      id
      phone_number
      joined
      File
      manager_id
    }
  }
`;

export const getStaticProps = async () => {
  const { User } = await hasuraAdminClient.request(GetUsers);

  return {
    props: {
      User,
    },
  };
};

export default function Candidat() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthState();
  const hasura = hasuraUserClient();
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const [File, setFile] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;
  const uploadFileToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  console.log(user.id);
  const onSubmit = async ({ Email, Last_Name, Name, domain, phone_number }) => {
    console.log(phone_number);
    const {
      Candidate: [foundUser],
    } = await hasuraAdminClient.request(getCandidatebyemail, {
      Email,
    });
    if (foundUser) {
      alert("candidate already exists, please try another email");
    } else {
      try {
        const body = new FormData();
        body.append("file", File);
        const response = await fetch("/api/file/", {
          method: "POST",
          body,
        });
        const { insert_Candidate_one } = await hasura.request(InsertTask, {
          Email,
          Last_Name,
          Name,
          domain,
          phone_number,
          joined,
          File: File.name,
          manager_id: user.id,
        });
        router.push(`/CandidatList`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="page-content-wrapper">
        <div className="page-content" style={{ minHeight: 1500 }}>
          <div className="profile-content">
            <div className="col-md-12">
              {" "}
              <div class="col-md-6">
                {" "}
                <div class="portlet light ">
                  <div class="portlet-body">
                    {" "}
                    <hr />{" "}
                    <div>
                      <img
                        style={{
                          display: "block",
                          objectFit: "cover",
                          width: 500,
                          height: 470,
                          margin: "auto",
                        }}
                        src="../cand.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-md-6">
                <div className="portlet light ">
                  <div className="portlet-body">
                    {" "}
                    <h3 class="font-green">New Candidate</h3> <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label className="control-label">First Name</label>
                        <input
                          name="Name"
                          id="Name"
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                          ref={register}
                          required
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label className="control-label">Last Name</label>
                        <input
                          name="Last_Name"
                          id="Last_Name"
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          ref={register}
                          required
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                          name="Email"
                          id="Email"
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          ref={register}
                          required
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label className="control-label">Mobile Number</label>
                        <input
                          name="phone_number"
                          id="phone_number"
                          type="text"
                          placeholder="+1 646 580 DEMO (6284)"
                          className="form-control"
                          ref={register}
                          required
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label className="control-label">Domain</label>
                        <input
                          name="domain"
                          id="domain"
                          type="text"
                          placeholder="Web Developer"
                          className="form-control"
                          ref={register}
                          required
                        />{" "}
                      </div>{" "}
                      <div class="form-group">
                        <label class="control-label">File</label>{" "}
                        <input
                          type="file"
                          name="File"
                          onChange={uploadFileToClient}
                          required
                        />
                      </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
