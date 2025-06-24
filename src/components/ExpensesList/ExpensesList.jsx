import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";

function ExpensesList({ expenses }) {
  expenses = [
    { item: "coffee", value: 10 },
    { item: "ice-cream", value: 10 },
  ];
  return (
    <dl className={styles["expenses-list"]}>
      {expenses.map(({ item, value }) => (
        <Expense item={item} value={value} />
      ))}
    </dl>
  );
}

export default ExpensesList;
