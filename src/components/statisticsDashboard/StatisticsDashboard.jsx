import { useDispatch } from "react-redux";
import { fetchStatistics } from '../../redux/statistics/operations';
import { useId } from 'react';
import css from './StatisticsDashboard.module.css'

let currentDate = new Date;
const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December',]

const usingDate = {
  month: months[currentDate.getMonth()],
  // month: currentDate.getMonth().toLocaleString('default', { month: 'long' }),
  year: currentDate.getFullYear().toString(),
}

const StatisticsDashboard = () => {
  const monthsFieldId = useId();
  const yearsFieldId = useId();

  const dispatch = useDispatch()
  const handleChange = (event) => {
    usingDate[event.target.name] = event.target.value
    dispatch(fetchStatistics(usingDate))
  }

  return (
    <form onChange={handleChange}>
      <select name="month" id={monthsFieldId} defaultValue={usingDate.month} className={css.select}>
        <option value="January" className={css.option}>January</option>
        <option value="February" className={css.option}>February</option>
        <option value="March" className={css.option}>March</option>
        <option value="April" className={css.option}>April</option>
        <option value="May" className={css.option}>May</option>
        <option value="June" className={css.option}>June</option>
        <option value="July" className={css.option}>July</option>
        <option value="August" className={css.option}>August</option>
        <option value="September" className={css.option}>September</option>
        <option value="October" className={css.option}>October</option>
        <option value="November" className={css.option}>November</option>
        <option value="December" className={css.option}>December</option>
      </select>
      <select name="year" id={yearsFieldId} defaultValue={usingDate.year} className={css.select}>
        <option value="2021" className={css.option}>2021</option>
        <option value="2022" className={css.option}>2022</option>
        <option value="2023" className={css.option}>2023</option>
        <option value="2024" className={css.option}>2024</option>
        <option value="2025" className={css.option}>2025</option>
      </select>
    </form>
  )
}

export default StatisticsDashboard
