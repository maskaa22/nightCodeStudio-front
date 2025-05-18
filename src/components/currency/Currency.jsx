import React, { useEffect, useState } from 'react';
import s from './Currency.module.css';
import axios from 'axios';

const Currency = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const mono = async () => {
      try {
        await axios
          .get('https://api.monobank.ua/bank/currency')
          .then((response) => {
            const filtered = response.data.filter(
              (item) =>
                (item.currencyCodeA === 840 && item.currencyCodeB === 980) ||
                (item.currencyCodeA === 978 && item.currencyCodeB === 980),
            );
            setRates(filtered);
          })
          .catch((error) => console.error(error));
      } catch (err) {
        console.log(err);
      }
    };
    mono();
  }, []);

  console.log(rates);

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
              <td className={s.bodyItem}>{
                rate.currencyCodeA === 840 ? 'USD' : 'EUR'
                }</td>
              <td className={s.bodyItem}>{rate.rateBuy}</td>
              <td className={s.bodyItem}>{rate.rateSell.toFixed(2)}</td>
            </tr>
          ))}
          {/* <tr className={s.body}>
            <td className={s.bodyItem}>USD</td>
            <td className={s.bodyItem}>27.55</td>
            <td className={s.bodyItem}>27.65</td>
          </tr>
          <tr className={s.body}>
            <td className={s.bodyItem}>EUR</td>
            <td className={s.bodyItem}>30.00</td>
            <td className={s.bodyItem}>30.10</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
