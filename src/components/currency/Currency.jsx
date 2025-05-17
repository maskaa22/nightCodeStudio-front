import React from "react";
import s from "./Currency.module.css";

const Currency = () => {
  return (
    <div className="container">
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
            <tr className={s.item}>
              <td>USD</td>
              <td>27.55</td>
              <td>27.65</td>
            </tr>
            <tr className={s.item}>
              <td>EUR</td>
              <td>30.00</td>
              <td>30.10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currency;
