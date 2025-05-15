import React from 'react'
import Toggle from '../toggle/Toggle'
import Chart from '../chart/Chart'
import StatisticsDashboard from '../statisticsDashboard/StatisticsDashboard'
import StatisticsTable from '../statisticsTable/StatisticsTable.jsx'

const StatisticsTab = () => {
  return (
    <div>
      <Toggle/>
      <Chart/>
      <StatisticsDashboard/>
      <StatisticsTable/>
    </div>
  )
}

export default StatisticsTab
