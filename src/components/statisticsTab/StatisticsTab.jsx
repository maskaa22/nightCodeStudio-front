import Toggle from '../toggle/Toggle.jsx';
import Chart from '../chart/Chart.jsx';
import StatisticsDashboard from '../statisticsDashboard/StatisticsDashboard.jsx';
import StatisticsTable from '../statisticsTable/StatisticsTable.jsx';
import css from './StatisticsTab.module.css';
import { useState, useEffect } from 'react';

const StatisticsTab = () => {
  const [type, setType] = useState('expenses');
  const [chartSize, setChartSize] = useState(288);

  const isExpense = type === 'expenses';

  const handleTypeChange = (newValue) => {
    setType(newValue ? 'expenses' : 'income');
  };

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width <= 320) {
        setChartSize(264);
      } else if (width >= 768) {
        setChartSize(288);
      } else {
        setChartSize(264); 
      }
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      <div className={css.statistics}>
        <div className={css.innerContainer}>
          <Toggle
            inStatisticsTab={true}
            value={isExpense}
            onChange={handleTypeChange}
          />
          <Chart type={type} size={chartSize} />
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
