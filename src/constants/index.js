export const MONGO_URL = import.meta.env.VITE_API_MONGO;
export const CURRENCY_DATA = 'currencyData';
export const USD = 'USD';
export const EUR = 'EUR';

export const COLORS = [
  '#DFAD3F',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

export const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const initialStateUser = {
  name: '',
  email: '',
  balance: null,
  photo: '',
};
export const initialStateTransaction = {
  items: [],
  loading: false,
  error: null,
};

export const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

export const monthsForSelect = [
  { value: '01', label: 'January', name: 'month' },
  { value: '02', label: 'February', name: 'month' },
  { value: '03', label: 'March', name: 'month' },
  { value: '04', label: 'April', name: 'month' },
  { value: '05', label: 'May', name: 'month' },
  { value: '06', label: 'June', name: 'month' },
  { value: '07', label: 'July', name: 'month' },
  { value: '08', label: 'August', name: 'month' },
  { value: '09', label: 'September', name: 'month' },
  { value: '10', label: 'October', name: 'month' },
  { value: '11', label: 'November', name: 'month' },
  { value: '12', label: 'December', name: 'month' },
];

export const yearsForSelect = [
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
];
