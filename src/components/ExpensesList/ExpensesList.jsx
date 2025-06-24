import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";
import { BudgetsContext } from "../../providers/BudgetsProvider";

function ExpensesList({ budgetId }) {
  const { getBudget } = React.use(BudgetsContext);
  const budget = getBudget(budgetId);

  return (
    <div className={styles["expenses-list-wrapper"]}>
      <h1>{budget.name} Expenses</h1>
      <dl className={styles["expenses-list"]}>
        {budget.expenses.map(({ id, item, value }) => (
          <Expense key={id} item={item} value={value} />
        ))}
      </dl>
    </div>
  );
}

export default ExpensesList;
