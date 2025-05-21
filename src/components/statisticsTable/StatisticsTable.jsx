import css from './StatisticsTable.module.css';

const COLORS = [
  '#DFAD3F',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const StatisticsTable = () => {
  const statistics = [
    { id: 1, name: 'Salary', value: 8700.0 },
    { id: 2, name: 'Freelance', value: 3800.74 },
    { id: 3, name: 'Other', value: 1500.0 },
  ];
  // const statistics = useSelector(selectStatistics)

  return (
    <div>
      <table>
        <thead className={css.tableHead}>
          <tr className={css.tableHeadRow}>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {statistics.map((item) => (
            <tr className={css.tableRow} key={item.id}>
              <td className={css.tableData}>
                <div
                  className={css.marker}
                  style={{ backgroundColor: COLORS[item.id - 1] }}
                >
                  {' '}
                </div>
                {item.name}
              </td>
              <td className={css.tableData}>{item.value}</td>
            </tr>
          ))}
          <tr className={css.tableRow}>
            <td className={css.tableData}>Expenses:</td>
            <td className={css.tableData}>
              {statistics.reduce(
                (acc, current) => acc + Number(current.value),
                0,
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
