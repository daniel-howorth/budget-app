import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";

function ExpensesList({ expenses }) {
  return (
    <dl className={styles["expenses-list"]}>
      {expenses.map(({ id, item, value }) => (
        <Expense key={id} item={item} value={value} />
      ))}
    </dl>
  );
}

export default ExpensesList;
