import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { fetchStatistics } from '../../redux/statistics/operations';
import { useId } from 'react';

const initialValues = {
  months: "January",
  years: "2025"
}

const StatisticsDashboard = () => {
  const monthsFieldId = useId();
  const yearsFieldId = useId();

  const dispatch = useDispatch()
  const handleChange = (values) => {
    const usingDate = {
      months: values.months, years: values.years
    }
    dispatch(fetchStatistics(usingDate))
  }
  
  return (
    <Formik initialValues={initialValues} onChange={handleChange}>
      <Form>
      <Field name="months" as='select' id={monthsFieldId}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </Field>
      <Field name="years" as='select' id={yearsFieldId}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </Field>
        </Form>
    </Formik>
  )
}

export default StatisticsDashboard
