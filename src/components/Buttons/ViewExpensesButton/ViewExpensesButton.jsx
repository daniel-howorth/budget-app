import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import ExpensesList from "../../ExpensesList";

function ViewExpensesButton({ actionTarget, className = "" }) {
  const { openModal, setActionTarget } = React.use(ModalContext);

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        setActionTarget(actionTarget);
        openModal(<ExpensesList />);
      }}
    >
      View Expenses
    </PrimaryButton>
  );
}

export default ViewExpensesButton;
