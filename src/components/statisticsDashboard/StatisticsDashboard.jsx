import { useDispatch } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/operations';
// import { useId } from 'react';
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

const monthsForSelect = [
  {value:'January',label:'January'},
  {value:'February',label:'February'},
  {value:'March',label:'March'},
  {value:'April',label:'April'},
  {value:'May',label:'May'},
  {value:'June',label:'June'},
  {value:'July',label:'July'},
  {value:'August',label:'August'},
  {value:'September',label:'September'},
  {value:'October',label:'October'},
  {value:'November',label:'November'},
  {value:'December',label:'December'},
];



const yearsForSelect = [
  {value:'2021',label:'2021'},
  {value:'2022',label:'2022'},
  {value:'2023',label:'2023'},
  {value:'2024',label:'2024'},
  {value:'2025',label:'2025'},
];

const usingDate = {
  month: months[currentDate.getMonth()],
  // month: currentDate.getMonth().toLocaleString('default', { month: 'long' }),
  year: currentDate.getFullYear().toString(),
};

const StatisticsDashboard = () => {
  // const monthsFieldId = useId();
  // const yearsFieldId = useId();

  const dispatch = useDispatch();

  window.addEventListener('load', () => {
    const formattedDate = `${usingDate.year}-${usingDate.month}`;
    dispatch(fetchStatistics(formattedDate));
  });

  const handleChange = (event) => {
    usingDate[event.name] = event.value;
    const formattedDate = `${usingDate.year}-${usingDate.month}`;
    dispatch(fetchStatistics(formattedDate));
    // console.log(formattedDate);
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
      {/* <span className={css.selectWrapper}>
        <select
          name="month"
          id={monthsFieldId}
          defaultValue={usingDate.month}
          className={css.select}
        >
          <option value="January" className={css.option}>
            January
          </option>
          <option value="February" className={css.option}>
            February
          </option>
          <option value="March" className={css.option}>
            March
          </option>
          <option value="April" className={css.option}>
            April
          </option>
          <option value="May" className={css.option}>
            May
          </option>
          <option value="June" className={css.option}>
            June
          </option>
          <option value="July" className={css.option}>
            July
          </option>
          <option value="August" className={css.option}>
            August
          </option>
          <option value="September" className={css.option}>
            September
          </option>
          <option value="October" className={css.option}>
            October
          </option>
          <option value="November" className={css.option}>
            November
          </option>
          <option value="December" className={css.option}>
            December
          </option>
        </select>
        <svg>
          <use href="/sprite.svg#icon-arrow-down"></use>
        </svg>
      </span>
      <span className={css.selectWrapper}>
        <select
          name="year"
          id={yearsFieldId}
          defaultValue={usingDate.year}
          className={css.select}
        >
          <option value="2021" className={css.option}>
            2021
          </option>
          <option value="2022" className={css.option}>
            2022
          </option>
          <option value="2023" className={css.option}>
            2023
          </option>
          <option value="2024" className={css.option}>
            2024
          </option>
          <option value="2025" className={css.option}>
            2025
          </option>
        </select>
        <svg>
          <use href="/sprite.svg#icon-arrow-down"></use>
        </svg>
      </span> */}
    </form>
  );
};

export default StatisticsDashboard;
