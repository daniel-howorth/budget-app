import React from "react";

export const BudgetsContext = React.createContext();

function BudgetsProvider({ children }) {
  const [budgets, setBudgets] = React.useState([]);
  const [miscExpenses, setMiscExpenses] = React.useState([]);

  function addBudget(name, limit) {
    const budget = {
      id: crypto.randomUUID(),
      name,
      limit,
      expenses: [],
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

  function doesBudgetExist(budgetName) {
    return budgets.some(
      ({ name }) => name.toLowerCase() === budgetName.toLowerCase()
    );
  }

  function addExpenseToBudget(budgetId, item, value) {
    setBudgets((prevBudgets) =>
      prevBudgets.map((budget) =>
        budget.id === budgetId
          ? {
              ...budget,
              expenses: [
                ...budget.expenses,
                { id: crypto.randomUUID(), item, value },
              ],
            }
          : budget
      )
    );
  }

  function deleteExpenseFromBudget(budgetId, expenseId) {
    setBudgets((prevBudgets) =>
      prevBudgets.map((budget) =>
        budget.id === budgetId
          ? {
              ...budget,
              expenses: budget.expenses.filter(({ id }) => id !== expenseId),
            }
          : budget
      )
    );
  }

  function getBudgetExpenses(budgetId) {
    return getBudget(budgetId)?.expenses ?? [];
  }

  function getTotalBudgetExpenditure(budgetId) {
    const expenses = getBudgetExpenses(budgetId);
    return expenses.reduce((acc, expense) => acc + expense.value, 0);
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
      (acc, budget) => acc + getTotalBudgetExpenditure(budget.id),
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
    addBudget,
    getBudget,
    deleteBudget,
    doesBudgetExist,
    addExpenseToBudget,
    deleteExpenseFromBudget,
    getBudgetExpenses,
    getTotalBudgetExpenditure,
    addMiscExpense,
    deleteMiscExpense,
    getTotalMiscExpenditure,
    getTotalExpenditure,
    getTotalBudget,
  };

  return <BudgetsContext value={value}>{children}</BudgetsContext>;
}

export default BudgetsProvider;
