import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(64, 'Maximum 64 characters')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .max(64, 'Maximum 64 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const resultAction = await dispatch(logIn(values));

      if (logIn.fulfilled.match(resultAction)) {
        toast.success('Login successful!');
        actions.resetForm();
        navigate('/');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('Something went wrong. Try again later.');
    } finally {
      actions.setSubmitting(false);
    }
  };

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
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
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
