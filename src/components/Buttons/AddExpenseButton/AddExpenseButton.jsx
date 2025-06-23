import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";

function AddExpenseButton({ actionTarget, className = "", ...delegated }) {
  const { toggleIsModalOpen, setModalAction, setActionTarget } =
    React.use(ModalContext);

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        setModalAction("add-expense");
        setActionTarget(actionTarget);
        toggleIsModalOpen();
      }}
      {...delegated}
    >
      Add Expense
    </PrimaryButton>
  );
}

export default AddExpenseButton;
