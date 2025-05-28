import { PieChart, Pie, Cell } from 'recharts';
import css from './Chart.module.css';
import { COLORS } from '../../constants';
import { useSelector } from 'react-redux';
import { selectStatistics } from '../../redux/statistics/selectors';

const Chart = ({ type, size = 288 }) => {
  let statistics = useSelector(selectStatistics)[type];

  if (!statistics || statistics.length === 0) {
    statistics = [];
  }

  statistics = statistics.map((item) => ({
    name: item.title,
    value: Number(item.total),
  }));

  const center = size / 2;
  const innerRadius = size * 0.33;
  const outerRadius = size * 0.48;

  return (
    <div>
      <PieChart
        width={size}
        height={size}
        className={css.chart}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <text
          x={center}
          y={center}
          dy={18}
          textAnchor="middle"
          fill={'#fcfcfc'}
        >
          {'₴ ' +
            statistics
              .reduce((acc, current) => acc + Number(current.value), 0)
              .toLocaleString()}
        </text>
        <Pie
          data={statistics}
          cx={center}
          cy={center}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#fcfcfc"
          paddingAngle={0}
          dataKey="value"
          stroke="none"
        >
          {statistics.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Chart;
