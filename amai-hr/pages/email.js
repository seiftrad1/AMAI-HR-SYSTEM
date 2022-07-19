import { FormControl, FormLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
export default function MembersPage({}) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const sendMail = async (data) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      //if sucess do whatever you like, i.e toast notification
    } catch (error) {
      // toast error message. whatever you wish
    }
  };
  return (
    <div className="page-content-wrapper">
      <div className="page-content" style={{ minHeight: 1500 }}>
        <form onSubmit={handleSubmit(sendMail)}>
          <div class="content">
            {" "}
            <div class="form-group">
              <input
                class="form-control form-control-solid placeholder-no-fix"
                name="subject"
                id="subject"
                ref={register({
                  required: "You must provide a name.",
                })}
                placeholder="Your name"
              />
            </div>
            <div class="form-group">
              {" "}
              <input
                class="form-control form-control-solid placeholder-no-fix"
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: "You must provide a email.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "You must provide a valid email",
                  },
                })}
                placeholder="Your email"
              />
            </div>
            <div class="form-group">
              {" "}
              <input
                class="form-control form-control-solid placeholder-no-fix"
                type="name"
                name="name"
                id="name"
                ref={register({
                  required: "You must provide a password.",
                  minLength: {
                    message: "Your password must be at least 6 characters",
                    value: 6,
                  },
                })}
                placeholder="Choose a password"
              />
            </div>
            <div class="form-group">
              {" "}
              <input
                type="textarea"
                id="message"
                name="message"
                ref={register}
              />
            </div>
            <div class="create-account">
              <button
                type="submit"
                disabled={isSubmitting}
                class="btn green uppercase"
              >
                send
              </button>{" "}
            </div>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
