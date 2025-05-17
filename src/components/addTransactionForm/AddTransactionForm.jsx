import Toggle from '../toggle/Toggle';
import css from './AddTransactionForm.module.css';
import { Field, Form, Formik } from 'formik';
import Select from 'react-select';
import { useState } from 'react';
import Calendar from '../calendar/Calendar';

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'inherit',
    borderColor: state.isFocused && state.isSelected ? '#355359' : '#1e2f33',
    borderRadius: '8px',
    boxShadow: 'none',
    height:'44px',
    color: '#081222',
    fontSize: '18px',
    fontFamily: 'Inter',
    fontWeight: '500',
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected
      ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
      : state.isFocused
      ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
      : 'transparent',
    color: '#FCFCFC',
    fontSize: '16px',
    padding: '12px 16px',
    cursor: 'pointer',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#294045',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: 4,
  }),
  singleValue: (base) => ({
    ...base,
    color: '#081222',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#081222',
    padding: '0 8px',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#081222',
  }),
};
// i will take this options from backend
const options = [
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

const AddTransactionForm = ({ onClose }) => {
  const [date, setDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState('false');
  return (
    <div>
      <div className={css.toggle}>
        <Toggle
          onChange={(isExpense) =>
            isExpense ? setIsExpense(true) : setIsExpense(false)
          }
        />
      </div>
      <div className={css.formWrapper}>
        <Formik
          initialValues={{ category: '', amount: '', comment: '' }}
          onSubmit={() => {}}
        >
          <Form>
            <div className={css.form}>
              {isExpense && (
                <Select
                  options={options}
                  styles={customStyles}
                  placeholder="Category"
                  isSearchable={false}
                />
              )}
              <div className={css.dateAmountWrapper}>
                <Field
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="0.00"
                  className={css.amountField}
                ></Field>
                <Calendar value={date} onChange={setDate} />
              </div>
              <Field
                id="comment"
                name="comment"
                placeholder="Comment"
                className={css.field}
              ></Field>
            </div>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.btnAdd}>
                Add
              </button>
              <button className={css.btnCancel} onClick={onClose}>
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddTransactionForm;
