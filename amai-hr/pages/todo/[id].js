import { useRouter } from "next/router";
import useSWR from "swr";
import { useForm } from "react-hook-form";

import { gql, hasuraUserClient } from "../../lib/hasura-user-client";
const GetTodoIds = gql`
  {
    Todo {
      id
      Name
      Description
    }
  }
`;

const GetTodoById = gql`
  query GetCategoryById($id: Int!) {
    Todo_by_pk(id: $id) {
      id
      Name
      Description
    }
  }
`;
export const getStaticPaths = async () => {
  const hasura = hasuraUserClient();

  const { Todo } = await hasura.request(GetTodoIds);

  return {
    paths: Todo.map(({ id }) => ({
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

  const initialData = await hasura.request(GetTodoById, { id });

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};
const UpdatePost = gql`
  mutation update_Todo_by_pk($id: Int!, $Name: String!, $Description: String!) {
    update_Todo_by_pk(
      pk_columns: { id: $id }
      _set: { Description: $Description, Name: $Name }
    ) {
      id
      Name
      Description
    }
  }
`;
export default function TodoEdit({ initialData }) {
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
    [GetTodoById, id],
    (query, id) => hasura.request(query, { id }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );

  const onSubmit = async ({ Description, Name }) => {
    try {
      const id = data.Todo_by_pk.id;

      const { update_Todo_by_pk } = await hasura.request(UpdatePost, {
        id,
        Name,
        Description,
      });

      mutate({
        ...data,
        ...update_Todo_by_pk,
      });
      router.push(`/Todo`);
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
                      <h2> Edit onboarding todo</h2>
                    </div>
                    <div className="col-md-1">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <a
                          id="sample_editable_1_2_new"
                          className="btn sbold green"
                          href="../Todo"
                        >
                          Back <i className="icon-logout"></i>
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>

                <div className="tab-content">
                  <div className="tab-pane active" id="tab_1_1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label className="control-label"> Name</label>
                        <input
                          defaultValue={data.Todo_by_pk.Name}
                          name="Name"
                          id="Name"
                          type="text"
                          className="form-control"
                          ref={register}
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label className="control-label">Description</label>
                        <input
                          defaultValue={data.Todo_by_pk.Description}
                          name="Description"
                          id="Description"
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          ref={register}
                        />{" "}
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
                    </form>
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
