import React from "react";

export const BudgetsContext = React.createContext();

function BudgetsProvider({ children }) {
  const [totalLimit, setTotalLimit] = React.useState(0);
  const [budgets, setBudgets] = React.useState([]);
  const [miscExpenses, setMiscExpenses] = React.useState([]);

  // Check budget doesn't exist

  function addBudget(title, limit) {
    const _id = crypto.randomUUID();
    let _expenses = [];

    const budget = {
      title,
      limit,
      get id() {
        return _id;
      },
      get expenses() {
        return [..._expenses];
      },
      addExpense(item, value) {
        _expenses.push({ id: crypto.randomUUID(), item, value });
      },
      deleteExpense(expenseId) {
        _expenses = _expenses.filter(({ id }) => id !== expenseId);
      },
      get totalExpenditure() {
        return _expenses.reduce((acc, expense) => acc + expense.value, 0);
      },
    };

    setBudgets((prevBudgets) => [...prevBudgets, budget]);
  }

  // Delete budget

  function deleteBudget(budgetId) {
    setBudgets((prevBudgets) =>
      prevBudgets.filter(({ id }) => id !== budgetId)
    );
  }

  function incrementTotalLimit(limit) {
    setTotalLimit(totalLimit + limit);
  }
  // Decrement total limit

  function addMiscExpense(item, value) {
    const expense = { item, value };
    setMiscExpenses(miscExpenses.concat(expense));
  }
  // Delete misc expense

  const value = { addBudget, deleteBudget, addMiscExpense };

  return <BudgetsContext value={value}>{children}</BudgetsContext>;
}

export default BudgetsProvider;
