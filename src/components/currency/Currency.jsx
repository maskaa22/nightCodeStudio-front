import { useEffect, useState } from 'react';
import s from './Currency.module.css';
import { fetchCurrency } from '../../utils/currencyFunction';
import { EUR, USD } from '../../constants';

const Currency = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetchCurrency(setRates);
  }, []);

  return (
    <div className={s.currency}>
      <table className={s.table}>
        <thead>
          <tr className={s.head}>
            <th className={s.headItem}>Currency</th>
            <th className={s.headItem}>Purchase</th>
            <th className={s.headItem}>Sale</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, i) => (
            <tr className={s.body} key={i}>
              <td className={s.bodyItem}>
                {rate.currencyCodeA === 840 ? USD : EUR}
              </td>
              <td className={s.bodyItem}>{rate.rateBuy}</td>
              <td className={s.bodyItem}>{rate.rateSell.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
