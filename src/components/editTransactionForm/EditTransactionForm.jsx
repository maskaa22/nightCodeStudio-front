import React, { useState } from 'react'
import Toggle from '../toggle/Toggle'
import Calendar from '../calendar/Calendar'

const EditTransactionForm = () => {
  const [date, setDate] = useState();
  return (
    <div>
      <Toggle />
      <Calendar value={date} onChange={setDate} />
    </div>
  );
}

export default EditTransactionForm
