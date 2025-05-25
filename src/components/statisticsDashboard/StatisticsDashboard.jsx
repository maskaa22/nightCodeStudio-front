import { useDispatch } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/operations';
import css from './StatisticsDashboard.module.css';
import { SelectStyles } from '../../utils/SelectStyles statistics';
import Select from 'react-select';

let currentDate = new Date();
const months = ['01','02','03','04','05','06','07','08','09','10','11','12',];

const monthsForSelect = [
  {value:'01',label:'January', name:'month'},
  {value:'02',label:'February', name:'month'},
  {value:'03',label:'March', name:'month'},
  {value:'04',label:'April', name:'month'},
  {value:'05',label:'May', name:'month'},
  {value:'06',label:'June', name:'month'},
  {value:'07',label:'July', name:'month'},
  {value:'08',label:'August', name:'month'},
  {value:'09',label:'September', name:'month'},
  {value:'10',label:'October', name:'month'},
  {value:'11',label:'November', name:'month'},
  {value:'12',label:'December', name:'month'},
];

const yearsForSelect = [
  {value:'2021',label:'2021', name:'year'},
  {value:'2022',label:'2022', name:'year'},
  {value:'2023',label:'2023', name:'year'},
  {value:'2024',label:'2024', name:'year'},
  {value:'2025',label:'2025', name:'year'},
];

const usingDate = {
  month: months[currentDate.getMonth()],
  year: currentDate.getFullYear().toString(),
};

const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  window.addEventListener('load', () => {
    const formattedDate = `${usingDate.year}-${usingDate.month}`;
    dispatch(fetchStatistics(formattedDate));
  });

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
        name='month'
        // value={usingDate.month}
        placeholder={monthsForSelect.find((element) => usingDate.month === element.value).label}
      />
      
      <Select
          options={yearsForSelect}
          styles={SelectStyles}
          isSearchable={false}
        onChange={handleChange}
        name='year'
        // value={usingDate.year}
        placeholder={usingDate.year}
        />
    </form>
  );
};

export default StatisticsDashboard;
