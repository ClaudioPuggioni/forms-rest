import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./UserForm.css";

export default function UserForm({ getData }) {
  return (
    <div className="formContainer">
      <div className="header">Create Account</div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().min(3, "Must be at least 3 characters").max(15, "Must be 15 characters or less").required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().min(8, "Must be at least 8 characters").max(15, "Must be 15 characters or less").required("Required"),
          passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await fetch("https://60795d16460a6600174fb9bc.mockapi.io/mclarenfetch/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(values),
          }).catch((err) => console.log("error is", err));
          setSubmitting(false);
          getData();
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-sector">
              <label>Username</label>
              <Field type="username" name="username" placeholder="username" className="inputField" />
              <ErrorMessage className="errorMsg" name="username" component="div" />
            </div>
            <div className="form-sector">
              <label>Email</label>
              <Field type="email" name="email" placeholder="email@domain.com" className="inputField" />
              <ErrorMessage className="errorMsg" name="email" component="div" />
            </div>
            <div className="form-sector">
              <label>Password</label>
              <Field type="password" name="password" placeholder="password" className="inputField" />
              <ErrorMessage className="errorMsg" name="password" component="div" />
            </div>
            <div className="form-sector">
              <label>Password check</label>
              <Field type="password" name="passwordConfirmation" placeholder="password" className="inputField" />
              <ErrorMessage className="errorMsg" name="passwordConfirmation" component="div" />
            </div>
            <button id="submitButton" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
