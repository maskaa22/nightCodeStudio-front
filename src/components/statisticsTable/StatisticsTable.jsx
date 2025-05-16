const StatisticsTable = () => {
  const statistics = [{ id: 1, category: 'Salary', sum: '8 700.00' },
    {  id: 2, category: 'Freelance', sum: '3 800.74' },
    {  id: 3, category: 'Other', sum: '1 500.00'},
  ]
  // const statistics = useSelector(selectStatistics)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map((item) => (<tr key={item.id}><td>{item.category}</td><td>{item.sum}</td></tr>))}
          <tr>
            <td>Expenses:</td>
            <td>{ statistics.reduce((acc, current) => acc + current.sum, 0) }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StatisticsTable
