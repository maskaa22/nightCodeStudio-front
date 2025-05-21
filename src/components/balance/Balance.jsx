import s from './Balance.module.css';

const Ballance = () => {
  return (
    <div className={s.balance}>
      <p className={s.title}>Your balance</p>
      <p className={s.cost}>
        24 000.00<span className={s.curreny}>UAH</span>
      </p>
    </div>
  );
};

export default Ballance;
