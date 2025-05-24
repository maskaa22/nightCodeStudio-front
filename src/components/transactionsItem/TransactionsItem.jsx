import { useState } from 'react';
import ModalEditTransaction from '../modalEditTransaction/ModalEditTransaction';
import s from './TransactionsItem.module.css';
import ModalDeleteTransaction from '../modalDeleteTransaction/ModalDeleteTransaction';

const TransactionsItem = ({ date, type, category, comment, amount, isEven, _id }) => {
  const formattedDate = new Date(date).toDateString()
  const typeClass = type === '+' ? s.income : s.expense;
  const evenClass = isEven ? s.even : '';
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.itemWrapper} id={_id}>
      <li className={`${s.card} ${typeClass} ${evenClass}`}>
        <div className={s.row}>
          <span className={s.label}>Date</span>
          <span className={s.value}>{formattedDate}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Type</span>
          <span className={`${s.value} ${s.typeCell}`}>{type}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Category</span>
          <span className={s.value}>{category.title}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Comment</span>
          <span className={s.value}>{comment}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Sum</span>
          <span className={`${s.value} ${s.sum}`}>{amount} UAH</span>
        </div>
        <div className={s.actions}>
          <button
            className={s.editBtn}
            onClick={() => setIsModalEditOpen(true)}
          >
            <svg className={s.icon}>
              <use href="/sprite.svg#icon-edit" />
            </svg>
            <span className={s.editSpan}>Edit</span>
          </button>
          <button className={s.deleteBtn} onClick={() => setIsOpen(true)}>
            Delete
          </button>
        </div>
      </li>
      <ModalEditTransaction
        transactionId={_id}
        isOpen={isModalEditOpen}
        onClose={() => setIsModalEditOpen(false)}
      />
      <ModalDeleteTransaction
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default TransactionsItem;
