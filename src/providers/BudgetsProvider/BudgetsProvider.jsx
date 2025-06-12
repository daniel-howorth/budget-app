import React from "react";

export const BudgetsContext = React.createContext();

function BudgetsProvider({ children }) {
  const [totalLimit, setTotalLimit] = React.useState(0);
  const [budgets, setBudgets] = React.useState([]);
  const [miscExpenses, setMiscExpenses] = React.useState([]);

  console.log(budgets);
  console.log({ totalLimit });

  function addBudget(name, limit) {
    const id = crypto.randomUUID();
    const budget = { id, name, limit };
    setBudgets(budgets.concat(budget));
    incrementTotalLimit(limit);
  }
  // Delete budget

  function incrementTotalLimit(limit) {
    setTotalLimit(totalLimit + limit);
  }
  // Decrement total limit

  function addMiscExpense(item, value) {
    const expense = { item, value };
    setMiscExpenses(miscExpenses.concat(expense));
  }
  // Delete misc expense

  const value = { addBudget, addMiscExpense };

  return <BudgetsContext value={value}>{children}</BudgetsContext>;
}

export default BudgetsProvider;
