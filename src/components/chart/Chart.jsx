import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#DFAD3F', '#FFD8D0', '#FD9498', '#C5BAFF', '#6E78E8', '#4A56E2', '#81E1FF', '#24CCA7', '#00AD84'];

const data = [
  { name: 'Salary', value: 25000 },
  { name: 'Freelance', value: 10000 },
  { name: 'Other', value: 5000 },
];

const chartDrawing = () => {
  return (
    <PieChart width={288} height={288}>
      <Pie
        data={data}
        cx={144}
        cy={144}
        innerRadius={100}
        outerRadius={140}
        fill="#ffffff"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
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
