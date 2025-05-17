import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { enUS } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./Calendar.module.css";

const CustomInput = forwardRef(function Calendar({ value, onClick }, ref) {
  return (
    <button className={s.customDateInput} onClick={onClick} ref={ref}>
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

registerLocale("custom-en", customLocale);


const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        locale="custom-en"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        customInput={<CustomInput />}
        weekStartsOn={1}
      />
    </div>
  );
};

export default Calendar;
