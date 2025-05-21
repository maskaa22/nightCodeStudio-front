import EditTransactionForm from '../editTransactionForm/EditTransactionForm';
import css from './ModalEditTransaction.module.css';
import { useKeyDownFunction } from '../../utils/keyDown';

const ModalEditTransaction = ({ isOpen, onClose }) => {
  useKeyDownFunction(onClose);

  if (!isOpen) return null;
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Edit transaction</h2>
        <button className={css.closeBtn} onClick={onClose}>
          <svg className={css.icon}>
            <use href="/sprite.svg#icon-close" />
          </svg>
        </button>
        <EditTransactionForm onClose={onClose} />
      </div>
    </div>
  );
};

export default ModalEditTransaction;
