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


export const getTransactionSchema = (expenseCategories = []) =>
  Yup.object().shape({
  type: Yup.string().oneOf(['expenses', 'income']).required('Type is required'),
  amount: Yup.number()
    .min(0, 'Amount should be more or equal to 0')
    .max(1000000, 'Too big amount')
    .required('Amount is required'),
  category: Yup.string().when('type', {
    is: 'expense',
    then: () =>
      Yup.string()
        .oneOf(expenseCategories)
        .required('Category is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  date: Yup.date().required('Date is required'),
  comment: Yup.string()
    .min(2, 'Coment should be more than 2 characters')
    .max(192, 'Too big comment'),
});
