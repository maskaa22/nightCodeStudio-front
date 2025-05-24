import TransactionsList from '../transactionsList/TransactionsList';
import ButtonAddTransaction from '../buttonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../modalAddTransaction/ModalAddTransaction';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesData } from '../../redux/categories/operations';
import { fetchTransactions } from '../../redux/transactions/operations';

const HomeTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <TransactionsList />
      <ButtonAddTransaction onClick={() => setIsOpen(true)} />
      <ModalAddTransaction isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default HomeTab;
