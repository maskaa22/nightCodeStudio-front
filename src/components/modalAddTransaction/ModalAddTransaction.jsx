import AddTransactionForm from '../addTransactionForm/AddTransactionForm';
import css from './ModalAddTransaction.module.css';
import { useKeyDownFunction } from '../../utils/keyDown';

const ModalAddTransaction = ({ isOpen, onClose }) => {
  useKeyDownFunction(onClose);

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
        <AddTransactionForm onClose={onClose} />
      </div>
    </div>
  );
};

export default ModalAddTransaction;
