import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import Select from 'react-select';
import Toggle from '../toggle/Toggle';
import Calendar from '../calendar/Calendar';
import css from './EditTransactionForm.module.css';
import { SelectStyles } from '../../utils/SelectStyles';

import { getTransactionSchema } from '../../utils/validationSchemas';
import { useExpenseCategories } from '../addTransactionForm/getExpenseCategories';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { updateTransaction } from '../../redux/transactions/operations';

export const TransactionFormFields = ({ isExpense, expenses }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <div className={css.form}>
      {isExpense && (
        <div>
          <Select
            options={expenses}
            styles={SelectStyles(!!(errors.category && touched.category))}
            placeholder="Category"
            isSearchable={false}
            name="category"
            onChange={(option) => setFieldValue('category', option.value)}
            value={expenses.find((opt) => opt.value === values.category)}
            id="category"
          />
          <div className={css.errorWrapper}>
            <ErrorMessage
              name="category"
              component="span"
              className={css.error}
            />
          </div>
        </div>
      )}

      <div className={css.dateAmountWrapper}>
        <div>
          <Field
            type="number"
            name="amount"
            id="amount"
            placeholder="0.00"
            className={`${css.amountField} ${
              errors.amount && touched.amount ? css.errorField : ''
            }`}
          />
          <div className={css.errorWrapper}>
            <ErrorMessage
              name="amount"
              component="span"
              className={css.error}
            />
          </div>
        </div>
        <div>
          <Calendar
            value={values.date}
            onChange={(date) => setFieldValue('date', date)}
            id="date"
            name="date"
          />
          <div className={css.errorWrapper}>
            <ErrorMessage name="date" component="span" className={css.error} />
          </div>
        </div>
      </div>
      <div>
        <Field
          name="comment"
          placeholder="Comment"
          className={`${css.field} ${
            errors.comment && touched.comment ? css.errorField : ''
          }`}
          id="comment"
        />
        <div className={css.errorWrapper}>
          <ErrorMessage name="comment" component="span" className={css.error} />
        </div>
      </div>
    </div>
  );
};

const EditTransactionForm = ({ onClose, id }) => {
  const expenses = useExpenseCategories();
  const expenseCategoryTitles = expenses.map((category) => category.value);
  const transactions = useSelector(selectTransactions);
  const transactionData = transactions.find((item) => item._id === id);
  const isExpense = transactionData.type !== 'income';
  const dispatch = useDispatch();
  console.log(transactionData);
  const initialFormValues = {
    type: transactionData.type,
    category: transactionData.category.title,
    amount: transactionData.amount,
    comment: transactionData.comment,
    date: new Date(transactionData.date),
  };
  console.log(transactionData.type);

  const handleSubmit = (values) => {
    const formattedDate = new Date(values.date).toISOString().split('T')[0];
    const formatedCategory =
      values.type === 'income' ? 'Incomes' : values.category;
    const data = {
      ...values,
      date: formattedDate,
      category: formatedCategory,
    };
    console.log('Submitted values:', data);
    dispatch(updateTransaction({ id, ...data }));

    onClose();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={getTransactionSchema(expenseCategoryTitles)}
        enableReinitialize
      >
        {() => (
          <Form>
            <Toggle value={isExpense} disabled={true} />

            <div className={css.formContent}>
              <TransactionFormFields
                isExpense={isExpense}
                expenses={expenses}
              />

              <div className={css.btnWrapper}>
                <button type="submit" className={css.btnAdd}>
                  Save
                </button>
                <button
                  type="button"
                  className={css.btnCancel}
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTransactionForm;
