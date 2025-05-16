import ModalEditTranssaction from '../modalEditTranssaction/ModalEditTranssaction'
import s from "./TransactionsItem.module.css"

const TransactionsItem = ({ date, type, category, comment, sum }) => {
  return (
    <div className={s.itemWrapper}>
        <div>{date}</div>
        <div>{type}</div>
        <div>{category}</div>
        <div>{comment}</div>
        <div>{sum}</div>
        <div className={s.buttons}>
          <button className={s.editBtn}>Edit</button>
          <button className={s.deleteBtn}>Delete</button>
        </div>
      <ModalEditTranssaction/>
    </div>
  )
}

export default TransactionsItem
