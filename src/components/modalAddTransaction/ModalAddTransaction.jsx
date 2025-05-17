import { useEffect } from 'react';
import AddTransactionForm from '../addTransactionForm/AddTransactionForm';
import css from './ModalAddTransaction.module.css';

const ModalAddTransaction = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Add transaction</h2>
        <button className={css.closeBtn} onClick={onClose}>
          <svg className={css.icon}>
            <use href="/sprite.svg#icon-close" />
          </svg>
        </button>
        <AddTransactionForm onClose={onClose}/>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
