import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import AddExpenseForm from "../../Forms/AddExpenseForm";

function AddExpenseButton({ actionTarget, className = "", ...delegated }) {
  const { openModal, setActionTarget } = React.use(ModalContext);

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        openModal(<AddExpenseForm />);
        setActionTarget(actionTarget);
      }}
      {...delegated}
    >
      Add Expense
    </PrimaryButton>
  );
}

export default AddExpenseButton;
