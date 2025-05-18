import { useState } from 'react';
import s from './Toggle.module.css';

const Toggle = ({ onChange, inStatisticsTab = false }) => {
  const [isExpense, setIsExpense] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    const newState = !isExpense;
    setIsExpense(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div className={s.toggleContainer}>
      <span
        className={`${s.toggleLabel} ${
          inStatisticsTab ? s.statisticsText : ''
        }`}
      >
        Income
      </span>
      <button
        type='button'
        className={`${s.toggleButton} ${isExpense ? s.expense : s.income}`}
        onClick={handleToggle}
        aria-pressed={isExpense}
        aria-label={isExpense ? 'Switch to Income' : 'Switch to Expense'}
      >
        <div className={s.toggleSlider}>
          <div className={s.toggleCircle}>
            {isExpense ? (
              <svg className={s.toggleIcon}>
                <use href="/sprite.svg#icon-minus" />
              </svg>
            ) : (
              <svg className={s.toggleIcon}>
                <use href="/sprite.svg#icon-plus" />
              </svg>
            )}
          </div>
        </div>
      </button>
      <span
        className={`${s.toggleLabel} ${
          inStatisticsTab ? s.statisticsText : ''
        }`}
      >
        Expense
      </span>
    </div>
  );
};

export default Toggle;
