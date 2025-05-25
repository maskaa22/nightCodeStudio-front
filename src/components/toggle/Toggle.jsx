import s from './Toggle.module.css';

const Toggle = ({
  value = true,
  onChange,
  inStatisticsTab = false,
  disabled = false,
}) => {
 
  const handleToggle = (e) => {
    e.preventDefault();
    if (disabled) return;
    onChange?.(!value);
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
        type="button"
        className={`${s.toggleButton} ${value ? s.expense : s.income}`}
        onClick={handleToggle}
        aria-pressed={value}
        aria-label={value? 'Switch to Income' : 'Switch to Expense'}
        disabled={disabled}
      >
        <div className={s.toggleSlider}>
          <div className={s.toggleCircle}>
            {value ? (
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
