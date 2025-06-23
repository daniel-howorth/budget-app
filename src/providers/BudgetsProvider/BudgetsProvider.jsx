import React from "react";

export const BudgetsContext = React.createContext();

function BudgetsProvider({ children }) {
  const [budgets, setBudgets] = React.useState([]);
  const [miscExpenses, setMiscExpenses] = React.useState([]);

  function doesBudgetExist(newName) {
    return budgets.some(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  }

  function addBudget(name, limit) {
    const _id = crypto.randomUUID();
    let _expenses = [];

    const budget = {
      name,
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
      getTotalExpenditure() {
        return _expenses.reduce((acc, expense) => acc + expense.value, 0);
      },
    };

    setBudgets((prevBudgets) => [...prevBudgets, budget]);
  }

  function getBudget(budgetId) {
    return budgets.find(({ id }) => id === budgetId);
  }

  function deleteBudget(budgetId) {
    setBudgets((prevBudgets) =>
      prevBudgets.filter(({ id }) => id !== budgetId)
    );
  }

  function addMiscExpense(item, value) {
    const expense = { id: crypto.randomUUID(), item, value };
    setMiscExpenses((prevMiscExpenses) => [...prevMiscExpenses, expense]);
  }

  function deleteMiscExpense(expenseId) {
    setMiscExpenses((prevMiscExpenses) =>
      prevMiscExpenses.filter(({ id }) => id !== expenseId)
    );
  }

  function getTotalMiscExpenditure() {
    return miscExpenses.reduce((acc, expense) => acc + expense.value, 0);
  }

  function getTotalExpenditure() {
    const budgetsExpenditure = budgets.reduce(
      (acc, budget) => acc + budget.totalExpenditure,
      0
    );

    return budgetsExpenditure + getTotalMiscExpenditure();
  }

  function getTotalBudget() {
    return budgets.reduce((acc, budget) => acc + budget.limit, 0);
  }

  const value = {
    budgets,
    miscExpenses,
    doesBudgetExist,
    addBudget,
    getBudget,
    deleteBudget,
    addMiscExpense,
    deleteMiscExpense,
    getTotalMiscExpenditure,
    getTotalExpenditure,
    getTotalBudget,
  };

  return <BudgetsContext value={value}>{children}</BudgetsContext>;
}

export default BudgetsProvider;
