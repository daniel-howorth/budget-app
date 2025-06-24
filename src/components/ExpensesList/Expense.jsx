import React from "react";
import styles from "./Expense.module.css";

function Expense({ item, value }) {
  return (
    <div className={styles.expense}>
      <dt>{item}</dt>
      <dd>£{value.toFixed(2)}</dd>
    </div>
  );
}

export default Expense;
