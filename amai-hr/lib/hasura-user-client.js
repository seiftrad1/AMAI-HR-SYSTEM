import { GraphQLClient } from "graphql-request";
export { gql } from "graphql-request";

export const hasuraUserClient = () => {
  return new GraphQLClient(process.env.NEXT_PUBLIC_HASURA_API_ENDPOINT, {
    headers: {
      "X-Hasura-Admin-Secret":
        "IM3DA5b4JAkmBeQA5owPKk8H9ckptKkkIMIBHUPVwQKoq2d5RKY2i7e3hJD8cUjp",
    },
  });
};
