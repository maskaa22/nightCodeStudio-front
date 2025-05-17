import React from "react";
import s from "./Currency.module.css";

const Currency = () => {
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
          <tr className={s.body}>
            <td className={s.bodyItem}>USD</td>
            <td className={s.bodyItem}>27.55</td>
            <td className={s.bodyItem}>27.65</td>
          </tr>
          <tr className={s.body}>
            <td className={s.bodyItem}>EUR</td>
            <td className={s.bodyItem}>30.00</td>
            <td className={s.bodyItem}>30.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
