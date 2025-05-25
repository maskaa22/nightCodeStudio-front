import { useDispatch, useSelector } from 'react-redux';
import TransactionsItem from '../transactionsItem/TransactionsItem';
import {
  selectError,
  selectIsLoading,
  selectTransactions,
} from '../../redux/transactions/selectors';
import { getTransactions } from '../../redux/transactions/operations';
import { useEffect } from 'react';
import s from './TransactionsList.module.css';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  const isLoading = useSelector(selectIsLoading);

  // const error = useSelector(selectError);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getTransactions({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  if (isLoading)
    return <p className={s.placeholder}>Завантаження транзакцій...</p>;

  // if (error) return <p>Помилка: {error}</p>;

  if (!transactions.length) {
    return <p className={s.placeholder}>No transactions yet</p>;
  }

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        <ul className={s.header}>
          <li>
            <div className={s.date}>Date</div>
          </li>
          <li>Type</li>
          <li>Category</li>
          <li>Comment</li>
          <li>Sum</li>
        </ul>
        {transactions?.map((item, index) => (
          <TransactionsItem key={index} {...item} isEven={index % 2 === 1} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
