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
    comment: "Big Burgers",
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
  {
    id: 5,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 6,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 7,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 8,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 9,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 10,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 11,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 12,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
  {
    id: 13,
    date: "16.05.2025",
    type: "+",
    category: "other",
    comment: "Donat",
    sum: "1000",
  },
];

const TransactionsList = () => {
  if (!data.length) {
    return <p className={s.placeholder}>No transactions yet</p>;
  }

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        <ul className={s.header}>
          <li>Date</li>
          <li>Type</li>
          <li>Category</li>
          <li>Comment</li>
          <li>Sum</li>
        </ul>
        {data.map((item, index) => (
          <TransactionsItem key={item.id} {...item} isEven={index % 2 === 1} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
