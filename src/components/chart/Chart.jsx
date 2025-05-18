import { PieChart, Pie, Cell } from 'recharts';
import css from './Chart.module.css'

const COLORS = ['#DFAD3F', '#FFD8D0', '#FD9498', '#C5BAFF', '#6E78E8', '#4A56E2', '#81E1FF', '#24CCA7', '#00AD84'];

const statistics = [
  { id: 1, name: 'Salary', value: 8700.00 },
  {  id: 2, name: 'Freelance', value: 3800.74 },
  {  id: 3, name: 'Other', value: 1500.00},
]
// const statistics = useSelector(selectStatistics)

const chartDrawing = () => {
  return (
    <PieChart width={288} height={288} className={css.chart}>
      <text x={144} y={144} dy={18} textAnchor="middle" fill={'#fcfcfc'}>
        {'₴ ' + statistics.reduce((acc, current) => acc + Number(current.value), 0) }
      </text>
      <Pie
        data={statistics}
        cx={144}
        cy={144}
        innerRadius={95}
        outerRadius={139}
        fill="#ffffff"
        text='1'
        paddingAngle={0}
        dataKey="value"
      >
        {statistics.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

    </PieChart>
  );
}
    

const Chart = () => {
  return (
    <div>
      {chartDrawing()}
    </div>
  )
}

export default Chart
