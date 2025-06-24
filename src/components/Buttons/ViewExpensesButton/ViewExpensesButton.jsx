import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import { BudgetsContext } from "../../../providers/BudgetsProvider";
import ExpensesList from "../../ExpensesList";

function ViewExpensesButton({ actionTarget, className = "" }) {
  const { openModal } = React.use(ModalContext);
  const { getBudget } = React.use(BudgetsContext);

  const budget = getBudget(actionTarget);
  const expenses = budget.expenses;

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        openModal(<ExpensesList expenses={expenses} />);
      }}
    >
      View Expenses
    </PrimaryButton>
  );
}

export default ViewExpensesButton;
