import useSWR from "swr";
import formatRelative from "date-fns/formatRelative";
import differenceInMinutes from "date-fns/differenceInMinutes";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

import { gql, hasuraUserClient } from "../lib/hasura-user-client";
import { differenceInHours } from "date-fns";
import { differenceInDays } from "date-fns";

const today = new Date();

const GetUsers = gql`
  {
    User(order_by: { created_at: asc }) {
      id
      Name
      created_at
      last_seen
      Avatar
      last_seen_url
    }
  }
`;

const Dot = styled.span`
  background-color: #4cd137;
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 20px;
  width: 20px;
  border: 5px solid white;
  border-radius: 50%;
`;

const DotAway = styled.span`
  background-color: #f5c71a;
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 20px;
  width: 20px;
  border: 5px solid white;
  border-radius: 50%;
`;
export const getStaticProps = async () => {
  const hasura = hasuraUserClient();

  const initialData = await hasura.request(GetUsers);

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  };
};

export default function MembersPage({ initialData }) {
  const hasura = hasuraUserClient();

  const { data } = useSWR(GetUsers, (query) => hasura.request(query), {
    initialData,
    revalidateOnMount: true,
  });

  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <div className="py-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary-500">
            Members
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div>
              {" "}
              {data.User.map(
                ({
                  created_at,
                  id,
                  last_seen,
                  Name,
                  Avatar,
                  last_seen_url,
                }) => {
                  const formattedJoinedAt = formatRelative(
                    Date.parse(created_at),
                    today,
                    {
                      weekStartsOn: 1,
                    }
                  );

                  const formattedLastSeen = differenceInMinutes(
                    today,
                    Date.parse(last_seen)
                  );

                  const formattedLastSeeninHours = differenceInHours(
                    today,
                    Date.parse(last_seen)
                  );
                  const formattedLastSeenindays = differenceInDays(
                    today,
                    Date.parse(last_seen)
                  );
                  const isUserOnline = 2 >= formattedLastSeen;

                  return (
                    <div key={id} class="item">
                      <div class="item-head">
                        <div class="item-details">
                          <span className="relative mr-2 md:mr-4 flex items-center">
                            <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                              <div>
                                {" "}
                                <span class="item-status">
                                  {isUserOnline ? (
                                    <p>
                                      {" "}
                                      <Dot />
                                      Online
                                    </p>
                                  ) : (
                                    <p>
                                      {" "}
                                      <DotAway />
                                      Offline
                                    </p>
                                  )}
                                </span>{" "}
                                <div class="image_inner_container">
                                  {" "}
                                  {Avatar ? (
                                    <img
                                      style={{
                                        display: "inline",
                                        width: 100,
                                        height: 100,
                                        objectFit: "cover",
                                      }}
                                      src={`../${Avatar}`}
                                    />
                                  ) : (
                                    <img
                                      style={{
                                        display: "inline",
                                        width: 100,
                                        height: 100,
                                        objectFit: "cover",
                                      }}
                                      src={`../profile.png`}
                                    />
                                  )}
                                </div>
                              </div>
                            </span>{" "}
                          </span>

                          <a href="" class="item-name primary-link">
                            {Name}
                          </a>
                          <span class="item-label">
                            {" "}
                            {formattedLastSeen} minutes ago
                            {formattedLastSeeninHours} hours
                            {formattedLastSeenindays} days
                          </span>
                        </div>
                        <span class="item-status">
                          <span class="badge badge-empty badge-success"></span>{" "}
                          Open
                        </span>
                      </div>
                      <div class="item-body">
                        {" "}
                        routing path: {last_seen_url}{" "}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
