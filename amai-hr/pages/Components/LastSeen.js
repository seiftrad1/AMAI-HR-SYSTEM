import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthState, useAuthDispatch } from "../../context/auth";
import { gql, hasuraUserClient } from "../../lib/hasura-user-client";

const UpdateUserLastSeen = gql`
  mutation UpdateUserLastSeen($id: Int!, $now: timestamptz!, $url: String) {
    update_User(
      where: { id: { _eq: $id } }
      _set: { last_seen: $now, last_seen_url: $url }
    ) {
      returning {
        last_seen
        last_seen_url
      }
    }
  }
`;

export default function LastSeen({ children }) {
  const router = useRouter();
  const { isAuthenticated, user, save_last_seen } = useAuthState();
  const { updateUser } = useAuthDispatch();
  const GetUserById = gql`
    query GetUserById($user_id: Int!) {
      User_by_pk(id: $user_id) {
        id
        notifications_aggregate(where: { seen: { _eq: false } }) {
          aggregate {
            count
          }
        }
        notifications(where: { seen: { _eq: false } }) {
          id
          description
        }
      }
    }
  `;
  useEffect(() => {
    if (!isAuthenticated || !save_last_seen) return;

    updateLastSeen(router.pathname);

    router.events.on("routeChangeComplete", updateLastSeen);

    return () => router.events.off("routeChangeComplete", updateLastSeen);
  }, [isAuthenticated, save_last_seen]);

  const updateLastSeen = async (url) => {
    const hasura = hasuraUserClient();

    await hasura.request(UpdateUserLastSeen, {
      id: user.id,
      now: new Date().toISOString(),
      url,
    });
    const { User_by_pk } = await hasura.request(GetUserById, {
      user_id: user.id,
    });
    updateUser(User_by_pk);
  };

  return children;
}
