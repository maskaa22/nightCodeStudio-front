import { useState } from "react";
import "./Toggle.css";

const Toggle = ({ onChange }) => {
  const [isExpense, setIsExpense] = useState(true);
  const handleToggle = () => {
    const newState = !isExpense;
    setIsExpense(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div className="toggle-container">
      <span className="toggle-label">Income</span>
      <button
        className={`toggle-button ${isExpense ? "expense" : "income"}`}
        onClick={handleToggle}
        aria-pressed={isExpense}
        aria-label={isExpense ? "Switch to Income" : "Switch to Expense"}
      >
        <div className="toggle-slider">
          <div className="toggle-circle">
            {isExpense ? (
              <svg className="toggle-icon">
                <use xlinkHref="/sprite.svg#icon-minus" />
              </svg>
            ) : (
              <svg className="toggle-icon">
                <use xlinkHref="/sprite.svg#icon-plus" />
              </svg>
            )}
          </div>
        </div>
      </button>
      <span className="toggle-label">Expense</span>
    </div>
  );
};

export default Toggle;
