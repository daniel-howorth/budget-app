import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import AddExpenseForm from "../../Forms/AddExpenseForm";

function AddExpenseButton({ budgetId, className = "", ...delegated }) {
  const { openModal } = React.use(ModalContext);

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        openModal(<AddExpenseForm budgetId={budgetId} />);
      }}
      {...delegated}
    >
      Add Expense
    </PrimaryButton>
  );
}

export default AddExpenseButton;
