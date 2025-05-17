import React, { use } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { confirmPassword, ...dataToSend } = values;
    try {
      await dispatch(registerThunk(dataToSend)).unwrap();
      toast.success("Successfully registered!");
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className={`container ${s.containerOverride}`}>
      <div className={s.RegistrationForm}>
        <picture>
          <source
            srcSet="/images/logo-dark-1x.png 1x, /images/logo-dark-2x.png 2x"
            type="image/webp"
          />
          <img src="/images/logo-dark-1x.png" alt="registration form" />
        </picture>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className={s.form}>
              <div className={s.inputWrapper}>
                <Field
                  className={`${s.input} ${
                    touched.name && errors.name ? s.inputError : ""
                  } ${touched.name && !errors.name ? s.inputValid : ""}`}
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <svg className={s.icon} width="24" height="24">
                  <use xlinkHref="/sprite.svg#icon-user" />
                </svg>
                <ErrorMessage name="name" component="div" className={s.error} />
              </div>

              <div className={s.inputWrapper}>
                <Field
                  className={`${s.input} ${
                    touched.email && errors.email ? s.inputError : ""
                  } ${touched.email && !errors.email ? s.inputValid : ""}`}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <svg className={s.icon} width="24" height="24">
                  <use xlinkHref="/sprite.svg#icon-email" />
                </svg>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </div>

              <div className={s.inputWrapper}>
                <Field
                  className={`${s.input} ${
                    touched.password && errors.password ? s.inputError : ""
                  } ${
                    touched.password && !errors.password ? s.inputValid : ""
                  }`}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <svg className={s.icon} width="24" height="24">
                  <use xlinkHref="/sprite.svg#icon-lock" />
                </svg>

                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
              </div>

              <div className={s.inputWrapper}>
                <Field
                  className={`${s.input} ${
                    touched.confirmPassword && errors.confirmPassword
                      ? s.inputError
                      : ""
                  } ${
                    touched.confirmPassword && !errors.confirmPassword
                      ? s.inputValid
                      : ""
                  }`}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                <svg className={s.icon} width="24" height="24">
                  <use xlinkHref="/sprite.svg#icon-lock" />
                </svg>
                <PasswordStrengthBar
                  style={{ marginTop: "1rem", width: "100%" }}
                  scoreWordStyle={{ display: "none" }}
                  scoreWords={[]}
                  password={
                    values.password === values.confirmPassword &&
                    values.confirmPassword !== ""
                      ? values.confirmPassword
                      : "short"
                  }
                  minScore={2}
                  className={
                    values.password === values.confirmPassword &&
                    values.confirmPassword !== ""
                      ? s.passwordMatch
                      : s.passwordNoMatch
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={s.error}
                />
              </div>

              <button className={s.btnRegister} type="submit">
                Register
              </button>

              <Link to="/login">
                <button type="button" className={s.btnLogin}>
                  Login
                </button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
