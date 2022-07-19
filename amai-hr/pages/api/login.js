import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { hasuraAdminClient, gql } from "../../lib/hasura-admin-client";

const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
      Name
      email
      password
      last_seen
      Avatar
      Role
      status
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
const getNotifications = gql`
  query MyQuery {
    notification(where: { user_id: { _is_null: true } }) {
      description
      name
      seen
    }
    notification_aggregate(where: { user_id: { _is_null: true } }) {
      aggregate {
        count
      }
    }
  }
`;

export default async (req, res) => {
  const { email, password: rawPassword } = req.body;

  const {
    User: [foundUser],
    Notification,
  } = await hasuraAdminClient.request(
    GetUserByEmail,
    {
      email,
    },
    await hasuraAdminClient.request(getNotifications)
  );

  if (!foundUser)
    return res.status(401).json({
      message: "Invalid email/password.",
    });
    if (foundUser.status === false) {
      return res.status(401).json({
        message: "Account locked",
      });
    }
  const { password, ...user } = foundUser;

  const passwordsMatch = await bcrypt.compare(rawPassword, password);

  if (!passwordsMatch)
    return res.status(401).json({
      message: "Invalid password.",
    });

  const token = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["guest", "user"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": user.id,
      },
    },
    "7675F456A49B42FEC8DB59B3A51A172E57E95B3BF7765CACD1F56D2CD1",
    {
      subject: user.Name,
    }
  );

  res.status(200).json({ token, ...user });
};
