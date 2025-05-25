import { useSelector } from 'react-redux';
import css from './StatisticsTable.module.css';
import { selectStatistics } from '../../redux/statistics/selectors';

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

const StatisticsTable = ({type}) => {
  // const statistics = [
  //   { title: 'Salary', total: 8700.0 },
  //   { title: 'Freelance', total: 3800.74 },
  //   { title: 'Other', total: 1500.0 },
  // ];


  const statistics = useSelector(selectStatistics)[type]

  // console.log(statistics);

  if(!statistics || statistics.length === 0) return (<div>Statistic table is empty</div>)
  

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
          {statistics.map((item, index) => (
            <tr className={css.tableRow} key={index}>
              <td className={css.tableData}>
                <div
                  className={css.marker}
                  style={{ backgroundColor: COLORS[index] }}
                >
                  {' '}
                </div>
                {item.title}
              </td>
              <td className={css.tableData}>{Number(item.total).toLocaleString()}</td>
            </tr>
          ))}
          <tr className={css.tableRow}>
            <td className={css.tableData}>Expenses:</td>
            <td className={css.tableData}>
              {statistics.reduce(
                (acc, current) => acc + Number(current.total),
                0,
              ).toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
