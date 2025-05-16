import TransactionsItem from "../transactionsItem/TransactionsItem";
import s from "./TransactionsList.module.css";

const data = [
  {
    id: 1,
    date: "16.05.2025",
    type: "-",
    category: "other",
    comment: "Gift for your wife",
    sum: "300",
  },
  {
    id: 2,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Car",
    sum: "10000",
  },
  {
    id: 3,
    date: "16.05.2025",
    type: "-",
    category: "other",
    comment: "Me",
    sum: "2000",
  },
  {
    id: 4,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Mother",
    sum: "1000",
  },
];

const TransactionsList = () => {
  if (!data.length) {
    return <p className={s.placeholder}>No transactions yet</p>;
  }

  return (
    <div className={s.scrollWrapper}>
      <ul className={s.list}>
        {data.map((item) => (
          <TransactionsItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
