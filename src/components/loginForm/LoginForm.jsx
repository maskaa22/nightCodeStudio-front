import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  loginInitialValues,
  loginValidationSchema,
  loginHandlerSubmit,
} from '../../utils/authForm';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.LoginForm}>
        <img
          src="/images/logo-dark-1x.png"
          srcSet="/images/logo-dark-1x.png 1x, /images/logo-dark-2x.png 2x"
          alt="logo"
          className={s.logo}
        />

        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={loginHandlerSubmit(dispatch, navigate)}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className={s.form}>
              <div className={s.formInputs}>
                <div className={s.inputWrapper}>
                  <Field
                    className={`${s.input} ${
                      touched.email && errors.email ? s.inputError : ''
                    } ${touched.email && !errors.email ? s.inputValid : ''}`}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                  />
                  <svg className={s.icon} width="24" height="24">
                    <use href="/sprite.svg#icon-email" />
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
                      touched.password && errors.password ? s.inputError : ''
                    } ${
                      touched.password && !errors.password ? s.inputValid : ''
                    }`}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <svg className={s.icon} width="24" height="24">
                    <use href="/sprite.svg#icon-lock" />
                  </svg>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={s.error}
                  />
                </div>
              </div>

              <div className={s.formButtons}>
                <button
                  className={s.btnLogin}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Log in
                </button>
                <Link to="/register" className={s.btnRegister}>
                  Register
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <div className={s.illustrationMobile} />
      </div>
    </div>
  );
};

export default LoginForm;
