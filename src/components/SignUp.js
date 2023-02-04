import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaWpforms} from "react-icons/fa";

const signupSchema = Yup.object().shape({
  firstname: Yup.string("Invalid firstname")
    .min(3, "Name cannot be less than 3 characters")
    .max(30, "Name is too long !")
    .required("Required"),
  lastname: Yup.string("Invalid lastname")
    .min(2, "lastname cannot be less than 3 characters ")
    .max(30, "lastname is too long !")
    .required("Required"),
  useremail: Yup.string("email type Invalid")
    .email()
    .required("Email is required !"),
  userpassword: Yup.string("Invalid Password")
    .required("Password is required")
    .min(6, "password cannont be less than 6 chars!")
    .max(12, "password cannot be more than 12 characters"),
});

const Signup = () => {
  let navigate = useNavigate();
  const [InitialFormValues] = useState({
    firstname: "",
    lastname: "",
    useremail: "",
    userpassword: "",
  });

  const handleFormSubmit = async (values) => {
    alert("signUp successful. Please Login to continue!")
    navigate("/login", true);
  };

  const clickToLogin = (e) => {
    e.preventDefault();
    navigate("/Login", true);
  };
  return (
    <div className="signup-form">
      <p> Sign Up</p>
      <Formik
        validationSchema={signupSchema}
        initialValues={InitialFormValues}
        onSubmit={handleFormSubmit}
      >
        {/* {(formprops) => (*/}
        {({ errors, touched }) => (
          <Form>
            <div>
            <label>
              First Name
              <Field
                name="firstname"
                type="text"
                className="input-field"
              ></Field>
            </label>
            {errors.firstname && touched.firstname ? (
              <div>{errors.firstname}</div>
            ) : null}
            </div>
            <div>
            <label>
              Last Name
              <Field
                name="lastname"
                type="text"
                className="input-field"
              ></Field>
            </label>
            {errors.lastname && touched.lastname ? (
              <div>{errors.lastname}</div>
            ) : null}
            </div>
            <div>
            <label className="email-label">
              Email
              <Field
                name="useremail"
                type="email"
                id="email-id"
                className="input-field"
              ></Field>
            </label>
            {errors.useremail && touched.useremail ? (
              <div>{errors.useremail}</div>
            ) : null}
            </div>
            <div>
            <label>
              Password
              <Field
                name="userpassword"
                type="password"
                className="input-field"
              ></Field>
            </label>
            {errors.userpassword && touched.userpassword ? (
              <div>{errors.userpassword}</div>
            ) : null}
            </div>
            <h6>
          Already have an account ? Login
          <a href="/" onClick={clickToLogin}>
            here
          </a>
        </h6>
            <div>
            <button type="submit">
            <FaWpforms/>    SignUp
            </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
