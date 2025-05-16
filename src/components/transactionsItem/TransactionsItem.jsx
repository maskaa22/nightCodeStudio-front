import ModalEditTranssaction from "../modalEditTranssaction/ModalEditTranssaction";
import s from "./TransactionsItem.module.css";

const TransactionsItem = ({ date, type, category, comment, sum }) => {
  const typeClass = type === "+" ? s.income : s.expense;

  return (
    <div className={s.itemWrapper}>
      <li className={`${s.card} ${typeClass}`}>
        <div className={s.row}>
          <span className={s.label}>Date</span>
          <span className={s.value}>{date}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Type</span>
          <span className={s.value}>{type}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Category</span>
          <span className={s.value}>{category}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Comment</span>
          <span className={s.value}>{comment}</span>
        </div>
        <div className={s.row}>
          <span className={s.label}>Sum</span>
          <span className={`${s.value} ${s.sum}`}>{sum} UAH</span>
        </div>
        <div className={s.actions}>
          <button className={s.editBtn}>
            <svg className={s.icon}>
              <use href="/sprite.svg#icon-edit" />
            </svg>
            Edit
          </button>
          <button className={s.deleteBtn}>Delete</button>
        </div>
      </li>
      {/* <ModalEditTranssaction/> */}
    </div>
  );
};

export default TransactionsItem;
