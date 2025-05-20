import { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import Select from 'react-select';
import Toggle from '../toggle/Toggle';
import Calendar from '../calendar/Calendar';
import css from './EditTransactionForm.module.css';
import { SelectStyles } from '../../utils/SelectStyles';

const categoryOptions = [
  { value: 'main', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'selfCare', label: 'Self care' },
  { value: 'childCare', label: 'Child care' },
  { value: 'household', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'entertainment', label: 'Entertainment' },
];

const initialFormValues = {
  type: 'expense',
  category: '',
  amount: '',
  comment: '',
  date: new Date(),
};

const TransactionFormFields = ({ isExpense }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className={css.form}>
      {isExpense && (
        <Select
          options={categoryOptions}
          styles={SelectStyles}
          placeholder="Category"
          isSearchable={false}
          onChange={(option) => setFieldValue('category', option.value)}
          value={categoryOptions.find((opt) => opt.value === values.category)}
        />
      )}

      <div className={css.dateAmountWrapper}>
        <Field
          type="number"
          name="amount"
          placeholder="0.00"
          className={css.amountField}
        />
        <Calendar
          value={values.date}
          onChange={(date) => setFieldValue('date', date)}
        />
      </div>

      <Field name="comment" placeholder="Comment" className={css.field} />
    </div>
  );
};

const EditTransactionForm = ({ onClose }) => {
  const [isExpense, setIsExpense] = useState(true);

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
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Form>
            <Toggle
              value={isExpense}
              onChange={(value) => handleTypeChange(value, setFieldValue)}
            />

            <div className={css.formContent}>
              <TransactionFormFields isExpense={isExpense} />

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
