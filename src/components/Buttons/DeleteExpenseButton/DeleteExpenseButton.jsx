import React from "react";
import DeleteButton from "../DeleteButton";

function DeleteExpenseButton({ budget, expenseId }) {
  function handleClick() {
    budget.deleteExpense(expenseId);
  }

  return <DeleteButton onClick={handleClick} />;
}

export default DeleteExpenseButton;
