import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";
import { BudgetsContext } from "../../providers/BudgetsProvider";

function ExpensesList({ budgetId }) {
  const { getBudget } = React.use(BudgetsContext);
  const budget = getBudget(budgetId);

  return (
    <>
      <h1>{budget.name} Expenses</h1>
      <dl className={styles["expenses-list"]}>
        {budget.expenses.map(({ id, item, value }) => (
          <Expense key={id} item={item} value={value} />
        ))}
      </dl>
    </>
  );
}

export default ExpensesList;
