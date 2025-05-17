import React, { useState } from "react";
import Toggle from "../toggle/Toggle";
import Calendar from "../calendar/Calendar";

const AddTransactionForm = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Toggle />
      <Calendar value={date} onChange={setDate} />
    </div>
  );
};

export default AddTransactionForm;
