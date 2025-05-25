import Toggle from '../toggle/Toggle.jsx';
import Chart from '../chart/Chart.jsx';
import StatisticsDashboard from '../statisticsDashboard/StatisticsDashboard.jsx';
import StatisticsTable from '../statisticsTable/StatisticsTable.jsx';
import css from './StatisticsTab.module.css';
import { useState } from 'react';

const StatisticsTab = () => {
  const [type, setType] = useState('expense');

  const isExpense = type === 'expense';

  const handleTypeChange = (newValue) => {
    setType(newValue ? 'expense' : 'income');
  };
  return (
    <div>
      <div className={css.statistics}>
        <div className={css.innerContainer}>
          <Toggle
            inStatisticsTab={true}
            value={isExpense}
            onChange={handleTypeChange}
          />
          <Chart type={type} />
        </div>
        <div>
          <StatisticsDashboard />
          <StatisticsTable type={type} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTab;
