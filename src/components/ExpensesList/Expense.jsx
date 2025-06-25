import React from "react";
import styles from "./Expense.module.css";
import DeleteButton from "../Buttons/DeleteButton";

function Expense({ item, value }) {
  return (
    <div className={styles.expense}>
      <dt>{item}</dt>
      <div className={styles["value-wrapper"]}>
        <dd>£{value.toFixed(2)}</dd>
        <DeleteButton size={1} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default Expense;
