import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { hasuraAdminClient, gql } from "../../lib/hasura-admin-client";
const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
    }
  }
`;

const InsertUser = gql`
  mutation InsertUser(
    $name: String!
    $last_name: String!
    $email: String!
    $domain: String!
    $phone_number: String!
    $password: String!
    $created_at: timestamptz!
    $File: String = ""
    $manager_id: Int!
  ) {
    insert_User_one(
      object: {
        Name: $name
        Last_Name: $last_name
        email: $email
        Domain: $domain
        Phone_Number: $phone_number
        password: $password
        created_at: $created_at
        Role: "Employee"
        status: true
        File: $File
        manager_id: $manager_id
      }
    ) {
      id
      Name
      Last_Name
      email
      Domain
      Phone_Number
      last_seen
      created_at
      Role
      File
      manager_id
    }
  }
`;
const InsertUserWithoutManager = gql`
  mutation InsertUser(
    $name: String!
    $last_name: String!
    $email: String!
    $domain: String!
    $phone_number: String!
    $password: String!
    $created_at: timestamptz!
    $File: String = ""
  ) {
    insert_User_one(
      object: {
        Name: $name
        Last_Name: $last_name
        email: $email
        Domain: $domain
        Phone_Number: $phone_number
        password: $password
        created_at: $created_at
        Role: "Manager"
        status: true
        File: $File
      }
    ) {
      id
      Name
      Last_Name
      email
      Domain
      Phone_Number
      last_seen
      created_at
      Role
      File
    }
  }
`;
export default async (req, res) => {
  const {
    name,
    last_name,
    email,
    domain,
    phone_number,
    created_at,
    File,
    Role,
    manager_id,
    password: rawPassword,
  } = req.body;

  const {
    User: [foundUser],
  } = await hasuraAdminClient.request(GetUserByEmail, {
    email,
  });

  if (foundUser)
    return res.status(401).json({
      message: "Email already exist , try another",
    });

  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(rawPassword, salt);
  if (Role === "Manager") {
    const { insert_User_one } = await hasuraAdminClient.request(
      InsertUserWithoutManager,
      {
        name,
        last_name,
        email,
        domain,
        phone_number,
        password,
        created_at,
        File,
      }
    );
    const token = jwt.sign(
      {
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["guest", "user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": insert_User_one.id,
        },
      },
      "7675F456A49B42FEC8DB59B3A51A172E57E95B3BF7765CACD1F56D2CD1",
      {
        subject: insert_User_one.Name,
      }
    );

    res.status(201).json({ token, ...insert_User_one });
  } else {
    const { insert_User_one } = await hasuraAdminClient.request(InsertUser, {
      name,
      last_name,
      email,
      domain,
      phone_number,
      password,
      created_at,
      File,
      manager_id,
    });
    const token = jwt.sign(
      {
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["guest", "user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": insert_User_one.id,
        },
      },
      "7675F456A49B42FEC8DB59B3A51A172E57E95B3BF7765CACD1F56D2CD1",
      {
        subject: insert_User_one.Name,
      }
    );

    res.status(201).json({ token, ...insert_User_one });
  }
};
