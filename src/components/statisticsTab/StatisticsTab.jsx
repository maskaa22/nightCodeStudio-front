import Toggle from "../toggle/Toggle.jsx";
import Chart from "../chart/Chart.jsx";
import StatisticsDashboard from "../statisticsDashboard/StatisticsDashboard.jsx";
import StatisticsTable from "../statisticsTable/StatisticsTable.jsx";

const StatisticsTab = () => {
  return (
    <div>
      <Toggle />
      <Chart />
      <StatisticsDashboard />
      <StatisticsTable />
    </div>
  );
};

export default StatisticsTab;
