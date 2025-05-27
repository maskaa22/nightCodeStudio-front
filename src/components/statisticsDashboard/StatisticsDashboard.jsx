import { useDispatch } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/operations';
import css from './StatisticsDashboard.module.css';
import { SelectStyles } from '../../utils/SelectStylesStatistics';
import Select from 'react-select';
import { useEffect } from 'react';
import { months, monthsForSelect, yearsForSelect } from '../../constants';

let currentDate = new Date();

const usingDate = {
  month: months[currentDate.getMonth()],
  year: currentDate.getFullYear().toString(),
};

const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedDate = `${usingDate.year}-${usingDate.month}`;
    dispatch(fetchStatistics(formattedDate));
  }, [dispatch]);

  const handleChange = (event) => {
    usingDate[event.name] = event.value;
    const formattedDate = `${usingDate.year}-${usingDate.month}`;
    dispatch(fetchStatistics(formattedDate));
  };

  return (
    <form onChange={handleChange} className={css.form}>
      <Select
        options={monthsForSelect}
        styles={SelectStyles}
        isSearchable={false}
        onChange={handleChange}
        name="month"
        placeholder={
          monthsForSelect.find((element) => usingDate.month === element.value)
            .label
        }
      />

      <Select
        options={yearsForSelect}
        styles={SelectStyles}
        isSearchable={false}
        onChange={handleChange}
        name="year"
        placeholder={usingDate.year}
      />
    </form>
  );
};

export default StatisticsDashboard;
