import TransactionsItem from '../transactionsItem/TransactionsItem'
import s from "./TransactionsList.module.css"

const TransactionsList = () => {
  const data = [
    {
      id: 1,
      date: '16.05.2025',
      type: '-',
      category: 'other',
      comment: 'Gift for your wife',
      sum: '300',
    },
    {
      id: 2,
      date: '16.05.2025',
      type: '-',
      category: 'other',
      comment: 'Car',
      sum: '10000',
    },
    {
      id: 3,
      date: '16.05.2025',
      type: '-',
      category: 'other',
      comment: 'Me',
      sum: '2000',
    },
    {
      id: 4,
      date: '16.05.2025',
      type: '-',
      category: 'other',
      comment: 'Mother',
      sum: '1000',
    },
  ];
  console.log("Компонент рендериться");
  return (
    <div className={s.listWrapper}>
      <div className={s.header}>
        <span>Date</span>
        <span>Type</span>
        <span>Category</span>
        <span>Comment</span>
        <span>Sum</span>
        <span>Actions</span>
      </div>

      <div className={s.items}>
        {data.map((item) => (
        <TransactionsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList
