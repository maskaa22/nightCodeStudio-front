import Toggle from "../toggle/Toggle.jsx";
import Chart from "../chart/Chart.jsx";
import StatisticsDashboard from "../statisticsDashboard/StatisticsDashboard.jsx";
import StatisticsTable from "../statisticsTable/StatisticsTable.jsx";
import css from './StatisticsTab.module.css'

const StatisticsTab = () => {
  return (
    <div className="container">
      <div className={css.statistics}>
        <Toggle
          inStatisticsTab={true}
          onChange={(isExpense) =>
            console.log(isExpense ? "Expense statistics" : "Income statistics")
          }
        />
        <Chart />
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
};

export default StatisticsTab;
