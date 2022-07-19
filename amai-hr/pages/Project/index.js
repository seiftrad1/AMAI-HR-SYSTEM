import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import gql from "graphql-tag";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthState } from "../../context/auth";
import { hasuraUserClient } from "../../lib/hasura-user-client";
import { TextField } from "@material-ui/core";
import { differenceInDays } from "date-fns";

const Created = new Date().toISOString();

const InsertProject = gql`
  mutation InsertProject(
    $Description: String!
    $Title: String!
    $Created: timestamp!
    $delivery_date: timestamp!
    $contact_date: timestamp!
    $company_name: String!
    $type: String!
    $income: String!
    $file: String!
  ) {
    insert_Project_one(
      object: {
        Description: $Description
        Title: $Title
        created_at: $Created
        delivery_date: $delivery_date
        assigned: false
        contact_date: $contact_date
        company_name: $company_name
        type: $type
        file: $file
        income: $income
        status: 0
      }
    ) {
      Description
      created_at
      Title
      delivery_date
      assigned
      contact_date
      company_name
      type
      file
      income
      status
    }
  }
`;

export default function Projects({ initialData }) {
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [File, setFile] = useState(null);

  const [createObjectURL, setCreateObjectURL] = useState(null);
  const { isAuthenticated, user } = useAuthState();

  const hasura = hasuraUserClient();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const uploadFileToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const onSubmit = async ({
    Description,
    Title,
    company_name,
    type,
    income,
    delivery_date,
    contact_date,
  }) => {
    try {
      const body = new FormData();
      body.append("file", File);
      const response = await fetch("/api/file/", {
        method: "POST",
        body,
      });
      const count_d = differenceInDays(
        Date.parse(delivery_date),
        Date.parse(contact_date)
      );
      if (count_d < 1) {
        alert("please enter a valid period");
      } else {
        const { insert_Project_one } = await hasura.request(InsertProject, {
          Description,
          Created,
          Title,
          delivery_date,
          contact_date,
          company_name,
          type,
          file: File.name,
          income,
        });

        router.push(`/Project/List`);
      }
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
              {" "}
              <div className="col-md-6">
                {" "}
                <div className="portlet light ">
                  <div className="portlet-body">
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
                        src="../Project.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-md-6">
                <div className="portlet light ">
                  <div className="portlet-body">
                    {" "}
                    <h3 className="font-green">New Project</h3>
                    <hr></hr>{" "}
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_1_1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          {" "}
                          <div className="form-group">
                            <label className="control-label">Client</label>
                            <input
                              name="company_name"
                              id="company_name"
                              type="text"
                              placeholder="Client"
                              className="form-control"
                              ref={register}
                              required
                            />{" "}
                          </div>
                          <div className="form-group">
                            <label className="control-label">
                              Project Title
                            </label>
                            <input
                              name="Title"
                              id="Title"
                              type="text"
                              placeholder="Project Title"
                              className="form-control"
                              ref={register}
                              required
                            />{" "}
                          </div>
                          <div className="form-group">
                            <label className="control-label">
                              Project Description
                            </label>
                            <textarea
                              name="Description"
                              id="Description"
                              type="textarea"
                              placeholder="Description"
                              className="form-control"
                              ref={register}
                              required
                            />{" "}
                          </div>{" "}
                          <div className="form-group">
                            <label>Income</label>
                            <div className="form-group">
                              <input
                                name="income"
                                className="form-control"
                                id="income"
                                type="text"
                                ref={register}
                                required
                              />
                              <span className="help-block">
                                {" "}
                                123456 => € ___.__1.234,56{" "}
                              </span>
                            </div>
                          </div>{" "}
                          <div className="form-group">
                            <label className="control-label">type</label>
                            <input
                              name="type"
                              id="type"
                              type="text"
                              placeholder="type"
                              className="form-control"
                              ref={register}
                              required
                            />{" "}
                          </div>
                          <div className="form-group">
                            <label>starting date</label> <br />
                            <TextField
                              id="contact_date"
                              name="contact_date"
                              type="date"
                              inputRef={register}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>expected delievry date</label> <br />
                            <TextField
                              id="delivery_date"
                              name="delivery_date"
                              type="date"
                              inputRef={register}
                              required
                            />
                          </div>{" "}
                          <div>
                            {" "}
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Control
                                name="File"
                                type="file"
                                onChange={uploadFileToClient}
                                required
                              />
                            </Form.Group>
                          </div>
                          <br />
                          <br />
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
        </div>
      </div>{" "}
    </div>
  );
}
