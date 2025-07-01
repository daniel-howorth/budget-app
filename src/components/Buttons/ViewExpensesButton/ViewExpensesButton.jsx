import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import ExpensesList from "../../ExpensesList";

function ViewExpensesButton({ budgetId, className = "" }) {
  const { openModal } = React.use(ModalContext);

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        openModal(<ExpensesList budgetId={budgetId} />);
      }}
    >
      View Expenses
    </PrimaryButton>
  );
}

export default ViewExpensesButton;
