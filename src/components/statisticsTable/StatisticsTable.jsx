const StatisticsTable = () => {
  const statistics = [{ category: 'Salary', sum: 8700.00 },
    { category: 'Freelance', sum: 3800.74 },
    {category: 'Other', sum: 1500.00},
  ]
  // const statistics = useSelector(selectStatistics)

  return (
    <div>
      <table>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>
        {statistics.map((item) => (<tr key={item.id}><td>{item.category}</td><td>{item.sum}</td></tr>))}
        <tr>
          <td>Expenses:</td>
          <td>{ statistics.reduce((acc, current) => acc + current.sum, 0) }</td>
        </tr>
      </table>
    </div>
  )
}

export default StatisticsTable
