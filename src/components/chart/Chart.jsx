import { PieChart, Pie, Cell } from 'recharts';
import css from './Chart.module.css';
import { COLORS } from '../../constants';
import { useSelector } from 'react-redux';
import { selectStatistics } from '../../redux/statistics/selectors';

const ChartDrawing = () => {
  // let statistics = [
  //   { title: 'Salary', total: 8700.0 },
  //   { title: 'Freelance', total: 3800.74 },
  //   { title: 'Other', total: 1500.0 },
  // ];
  // let statistics = [
  //   { name: 'Salary', value: 8700.0 },
  //   { name: 'Freelance', value: 3800.74 },
  //   { name: 'Other', value: 1500.0 },
  // ];
  
  let statistics = useSelector(selectStatistics)['income']

  // console.log(statistics);

  if (!statistics || statistics.length === 0)
  { statistics = [] }
  statistics = statistics.map((item) => {return {name:item.title,value:Number(item.total)}})
  
  return (
    <PieChart width={288} height={288} className={css.chart}>
      <text x={144} y={144} dy={18} textAnchor="middle" fill={'#fcfcfc'}>
        {'₴ ' +
          statistics.reduce(
            (acc, current) => acc + Number(current.value),
            0,
          ).toLocaleString()}
      </text>
      <Pie
        data={statistics}
        cx={144}
        cy={144}
        innerRadius={95}
        outerRadius={139}
        fill="#fcfcfc"
        text="1"
        paddingAngle={0}
        dataKey="value"
      >
        {statistics.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

const Chart = () => {
  return <div>{ChartDrawing()}</div>;
};

export default Chart;
