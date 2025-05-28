// StatisticsDashboard.jsx
import { useDispatch } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/operations';
import css from './StatisticsDashboard.module.css';
import { getSelectStyles } from '../../utils/SelectStylesStatistics'; 
import Select from 'react-select';
import { useEffect, useState } from 'react'; 
import { months, monthsForSelect, yearsForSelect } from '../../constants';

  const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date();
    return {
      month: months[currentDate.getMonth()],
      year: currentDate.getFullYear().toString(),
    };
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const formattedDate = `${selectedDate.year}-${selectedDate.month}`;
    dispatch(fetchStatistics(formattedDate));
  }, [dispatch, selectedDate]); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
      [selectedOption.name]: selectedOption.value,
    }));
  };

  const currentSelectStyles = getSelectStyles(windowWidth);

  return (
    <div className={css.form}>
      {' '}
      <Select
        options={monthsForSelect}
        styles={currentSelectStyles} 
        isSearchable={false}
        onChange={handleChange}
        name="month" 
        value={monthsForSelect.find(
          (element) => selectedDate.month === element.value,
        )} 
        placeholder={
          monthsForSelect.find(
            (element) => selectedDate.month === element.value,
          )?.label || 'Month'
        }
      />
      <Select
        options={yearsForSelect}
        styles={currentSelectStyles} 
        isSearchable={false}
        onChange={handleChange}
        name="year" 
        value={yearsForSelect.find(
          (element) => selectedDate.year === element.value,
        )} 
        placeholder={selectedDate.year}
      />
    </div>
  );
};

export default StatisticsDashboard;
