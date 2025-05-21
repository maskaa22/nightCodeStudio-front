import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import Select from 'react-select';
import Toggle from '../toggle/Toggle';
import Calendar from '../calendar/Calendar';
import css from './AddTransactionForm.module.css';
import { SelectStyles } from '../../utils/SelectStyles';
import { useExpenseCategories } from './getExpenseCategories';
import { getTransactionSchema } from '../../utils/validationSchemas';

const initialFormValues = {
  type: 'expense',
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
  const [isExpense, setIsExpense] = useState(true);
  const expenses = useExpenseCategories();
  const expenseCategoryTitles = expenses.map((category) => category.value);

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    resetForm({
      values: {
        ...initialFormValues,
        type: isExpense ? 'expense' : 'income',
        date: new Date(),
      },
    });
    onClose();
  };

  const handleTypeChange = (isExpense, setFieldValue) => {
    setIsExpense(isExpense);
    setFieldValue('type', isExpense ? 'expense' : 'income');
    setFieldValue('category', '');
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={getTransactionSchema(expenseCategoryTitles)}
        enableReinitialize
      >
        {({ setFieldValue }) => (
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
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;
