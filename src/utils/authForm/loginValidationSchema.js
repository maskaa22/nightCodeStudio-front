import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .max(64, 'Max 64 characters')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Min 8 characters')
    .max(64, 'Max 64 characters')
    .required('Required'),
});
