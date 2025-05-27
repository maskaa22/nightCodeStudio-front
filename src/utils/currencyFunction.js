import axios from 'axios';
import { CURRENCY_DATA, MONGO_URL } from '../constants';
import toast from 'react-hot-toast';

export const fetchCurrency = async (setRates) => {
  try {
    const cached = localStorage.getItem(CURRENCY_DATA);
    const oneHour = 60 * 60 * 1000;

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);

      if (Date.now() - timestamp < oneHour) {
        setRates(data);
        return;
      }
    }

    const response = await axios.get(MONGO_URL);
    const filtered = response.data.filter(
      (item) =>
        (item.currencyCodeA === 840 && item.currencyCodeB === 980) ||
        (item.currencyCodeA === 978 && item.currencyCodeB === 980),
    );

    setRates(filtered);
    localStorage.setItem(
      CURRENCY_DATA,
      JSON.stringify({ data: filtered, timestamp: Date.now() }),
    );
  } catch {
    toast.error('💸 Error loading currency rates');
  }
};
