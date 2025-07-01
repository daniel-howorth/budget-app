import React from "react";
import Expense from "./Expense";
import styles from "./ExpensesList.module.css";
import { BudgetsContext } from "../../providers/BudgetsProvider";

function ExpensesList({ budgetId }) {
  const {
    getBudget,
    getBudgetExpenses,
    miscExpenses,
    deleteMiscExpense,
    deleteExpenseFromBudget,
  } = React.use(BudgetsContext);

  const isBudgeted = budgetId != null;

  const expenses = isBudgeted ? getBudgetExpenses(budgetId) : miscExpenses;

  function deleteExpense(expenseId) {
    if (isBudgeted) {
      deleteExpenseFromBudget(budgetId, expenseId);
    } else {
      deleteMiscExpense(expenseId);
    }
  }

  return (
    <div className={styles["expenses-list-wrapper"]}>
      <h1>{isBudgeted ? getBudget(budgetId).name : "Misc"} Expenses</h1>
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
