import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Min 2 characters')
    .max(32, 'Max 32 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .max(64, 'Max 64 characters')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Min 8 characters')
    .max(64, 'Max 64 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
