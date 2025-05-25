import { forwardRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { enUS } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.css';

const CustomInput = forwardRef(function Calendar({ value, onClick }, ref) {
  return (
    <button
      className={s.customDateInput}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      <span>{value}</span>
      <svg className={s.icon}>
        <use href="/sprite.svg#icon-calendar" />
      </svg>
    </button>
  );
});

const customLocale = {
  ...enUS,
  options: {
    ...enUS.options,
    weekStartsOn: 1,
  },
};

registerLocale('custom-en', customLocale);

const Calendar = ({ value, onChange }) => {
  return (
    <DatePicker
      locale="custom-en"
      selected={value}
      onChange={onChange}
      dateFormat="dd.MM.yyyy"
      customInput={<CustomInput />}
      weekStartsOn={1}
      calendarStartDay={1}
      showPopperArrow={false}
      maxDate={new Date()}
    />
  );
};

export default Calendar;
