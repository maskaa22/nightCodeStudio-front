import Toggle from "../toggle/Toggle.jsx";
import Chart from "../chart/Chart.jsx";
import StatisticsDashboard from "../statisticsDashboard/StatisticsDashboard.jsx";
import StatisticsTable from "../statisticsTable/StatisticsTable.jsx";
import css from './StatisticsTab.module.css'

const StatisticsTab = () => {
  return (
    <div>
      <div className={css.statistics}>
        <div>
          <Toggle
            inStatisticsTab={true}
            onChange={(isExpense) =>
              console.log(isExpense ? "Expense statistics" : "Income statistics")
            }
          />
            <Chart />
        </div>
        <div>
          <StatisticsDashboard />
          <StatisticsTable />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTab;
