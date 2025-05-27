import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import Select from 'react-select';
import Toggle from '../toggle/Toggle';
import Calendar from '../calendar/Calendar';
import css from './AddTransactionForm.module.css';
import { SelectStyles } from '../../utils/SelectStyles';
import { useExpenseCategories } from './getExpenseCategories';
import { getTransactionSchema } from '../../utils/validationSchemas';
import { useDispatch } from 'react-redux';
import {
  addTransaction,
  getTransactions,
} from '../../redux/transactions/operations';
import toast from 'react-hot-toast';

const initialFormValues = {
  type: 'expenses',
  category: '',
  amount: '',
  comment: '',
  date: new Date(),
};

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

const AddTransactionForm = ({ onClose }) => {
  const expenses = useExpenseCategories();
  const expenseCategoryTitles = expenses.map((category) => category.value);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const formattedDate = new Date(values.date).toISOString().split('T')[0];
    const formatedCategory =
      values.type === 'income' ? 'Incomes' : values.category;
    const data = {
      ...values,
      date: formattedDate,
      category: formatedCategory,
    };

    try {
      await dispatch(addTransaction(data)).unwrap();
      resetForm({
        values: {
          ...initialFormValues,
          date: new Date(),
        },
      });

      toast.success('Successfully added transaction');
      onClose();
    } catch {
      toast.error(
        "Unfortunately we can't add this transaction. Try to reload your page",
      );
    } finally {
      dispatch(getTransactions());
    }
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={getTransactionSchema(expenseCategoryTitles)}
        enableReinitialize
      >
        {({ values, setFieldValue }) => {
          const isExpense = values.type === 'expenses';
          const handleTypeChange = (newValue) => {
            setFieldValue('type', newValue ? 'expenses' : 'income');
            setFieldValue('category', '');
          };

          return (
            <Form>
              <Toggle
                value={isExpense}
                onChange={(value) => handleTypeChange(value, setFieldValue)}
              />

              <div className={css.formContent}>
                <TransactionFormFields
                  isExpense={isExpense}
                  expenses={expenses}
                />

                <div className={css.btnWrapper}>
                  <button type="submit" className={css.btnAdd}>
                    Add
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
          );
        }}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;
