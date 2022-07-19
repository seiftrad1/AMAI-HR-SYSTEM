import { useRouter } from "next/router";
import useSWR from "swr";
import { useForm } from "react-hook-form";

import { gql, hasuraUserClient } from "../../lib/hasura-user-client";
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

  const initialData = await hasura.request(GetCandidateById, { id });

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};
const UpdatePost = gql`
  mutation update_Candidate_by_pk(
    $id: Int!
    $Email: String!
    $Last_Name: String!
    $Name: String!
    $domain: String!
    $phone_number: String!
  ) {
    update_Candidate_by_pk(
      pk_columns: { id: $id }
      _set: {
        Email: $Email
        Last_Name: $Last_Name
        Name: $Name
        domain: $domain
        phone_number: $phone_number
      }
    ) {
      Email
      Last_Name
      Name
      domain
      id
      phone_number
      Status
    }
  }
`;
export default function CandidateEdit({ initialData }) {
  const hasura = hasuraUserClient();
  const { query } = useRouter();
  const router = useRouter();

  const { id } = query;
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
    defaultValues: { ...defaultValues },
  } = useForm();
  const { data, mutate } = useSWR(
    [GetCandidateById, id],
    (query, id) => hasura.request(query, { id }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );
  const uploadFileToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
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
  };

  const onSubmit = async ({ Email, Last_Name, Name, domain, phone_number }) => {
    try {
      const id = data.Candidate_by_pk.id;
      const { update_Candidate_by_pk } = await hasura.request(UpdatePost, {
        id,
        Email,
        Last_Name,
        Name,
        domain,
        phone_number,
      });

      mutate({
        ...data,
        ...update_Candidate_by_pk,
      });
      router.push(`/CandidatList`);
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
                  {" "}
                  <div className="row">
                    <div className="col-md-11">
                      <h3 className="font-green">Edit Candidate</h3> <hr />
                    </div>{" "}
                    <div className="col-md-1">
                      <div className="btn-group">
                        {" "}
                        <a
                          href={`/CandidatList`}
                          id="sample_editable_1_2_new"
                          className="btn sbold green"
                        >
                          {" "}
                          Back <i className="fa fa-backward"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1_1">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <label className="control-label">First Name</label>
                          <input
                            defaultValue={data.Candidate_by_pk.Name}
                            name="Name"
                            id="Name"
                            type="text"
                            className="form-control"
                            ref={register}
                            required
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label className="control-label">Last Name</label>
                          <input
                            defaultValue={data.Candidate_by_pk.Last_Name}
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
                          <label className="control-label">Mobile Number</label>
                          <input
                            defaultValue={data.Candidate_by_pk.phone_number}
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
                          <label className="control-label">Email</label>
                          <input
                            name="Email"
                            id="Email"
                            type="email"
                            defaultValue={data.Candidate_by_pk.Email}
                            className="form-control"
                            ref={register}
                            required
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label className="control-label">Domain</label>
                          <input
                            defaultValue={data.Candidate_by_pk.domain}
                            name="domain"
                            id="domain"
                            type="text"
                            placeholder="Web Developer"
                            className="form-control"
                            ref={register}
                            required
                          />{" "}
                        </div>{" "}
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
