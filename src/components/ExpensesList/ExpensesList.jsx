import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";
import { BudgetsContext } from "../../providers/BudgetsProvider";

function ExpensesList({ budgetId }) {
  const { getBudget, miscExpenses, deleteMiscExpense } =
    React.use(BudgetsContext);
  let budget;

  if (budgetId) {
    budget = getBudget(budgetId);
  }

  const [budgetExpenses, setExpenses] = React.useState(() =>
    budget ? budget.expenses : null
  );

  const expenses = budget ? budgetExpenses : miscExpenses;

  function deleteExpense(expenseId) {
    if (budget) {
      budget.deleteExpense(expenseId);
      setExpenses(expenses.filter(({ id }) => id !== expenseId));
    } else {
      deleteMiscExpense(expenseId);
    }
  }

  return (
    <div className={styles["expenses-list-wrapper"]}>
      <h1>{budget ? budget.name : "Misc"} Expenses</h1>
      <dl className={styles["expenses-list"]}>
        {expenses.map(({ id, item, value }) => (
          <Expense
            key={id}
            item={item}
            value={value}
            handleDelete={() => deleteExpense(id)}
          />
        ))}
      </dl>
    </div>
  );
}

export default ExpensesList;
