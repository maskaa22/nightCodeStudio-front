import React from "react";
import Toggle from "../toggle/Toggle";
import Calendar from "../calendar/Calendar";

const AddTransactionForm = () => {
  return (
    <div>
      <Toggle />
      <Calendar value={date} onChange={setDate} />
    </div>
  );
};

export default AddTransactionForm;
