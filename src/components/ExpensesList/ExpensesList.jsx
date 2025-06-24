import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";

function ExpensesList({ expenses }) {
  return (
    <dl className={styles["expenses-list"]}>
      {expenses.map(({ item, value }) => (
        <Expense item={item} value={value} />
      ))}
    </dl>
  );
}

export default ExpensesList;
