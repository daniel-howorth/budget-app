import React from "react";
import styles from "./Expense.module.css";
import DeleteExpenseButton from "../Buttons/DeleteExpenseButton";

function Expense({ budget, expenseId, item, value }) {
  return (
    <div className={styles.expense}>
      <dt>{item}</dt>
      <div className={styles["value-wrapper"]}>
        <dd>£{value.toFixed(2)}</dd>
        <DeleteExpenseButton
          size={1}
          strokeWidth={1.5}
          budget={budget}
          expenseId={expenseId}
        />
      </div>
    </div>
  );
}

export default Expense;
