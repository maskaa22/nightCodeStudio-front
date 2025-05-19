import { useEffect, useState } from 'react';
import s from './Currency.module.css';
import axios from 'axios';

const Currency = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
  const fetchCurrency = async () => {
    const cached = localStorage.getItem('currencyData');

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const oneHour = 60 * 60 * 1000;

      if (Date.now() - timestamp < oneHour) {
        setRates(data); 
        return;
      }
    }

    try {
      const response = await axios.get('https://api.monobank.ua/bank/currency');
      const filtered = response.data.filter(
        item =>
          (item.currencyCodeA === 840 && item.currencyCodeB === 980) ||
          (item.currencyCodeA === 978 && item.currencyCodeB === 980)
      );

      setRates(filtered);
      localStorage.setItem(
        'currencyData',
        JSON.stringify({ data: filtered, timestamp: Date.now() })
      );
    } catch (error) {
      console.error('Помилка при запиті до API:', error);
    }
  };

  fetchCurrency();
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
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
