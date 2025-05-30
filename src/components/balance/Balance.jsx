import { useSelector } from 'react-redux';
import s from './Balance.module.css';
import { selectUserBalance } from '../../redux/user/selectors';

const Ballance = () => {
  const ballance = useSelector(selectUserBalance);

  return (
    <div className={s.balance}>
      <p className={s.title}>Your balance</p>
      <p className={s.cost}>
        {
          ballance === 0 ? 0 : ballance
        }
        <span className={s.curreny}>UAH</span>
      </p>
    </div>
  );
};

export default Ballance;
