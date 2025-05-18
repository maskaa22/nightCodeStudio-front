import css from './ButtonAddTransaction.module.css';

const ButtonAddTransaction = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={css.btn}>
        <svg className={css.icon}>
          <use href="/sprite.svg#icon-plus" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonAddTransaction;
