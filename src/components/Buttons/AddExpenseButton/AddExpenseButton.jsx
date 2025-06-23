import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";

function AddExpenseButton({ className = "", ...delegated }) {
  const { toggleIsModalOpen, setModalAction } = React.use(ModalContext);

  return (
    <PrimaryButton
      alt
      className={className}
      onClick={() => {
        setModalAction("add-expense");
        toggleIsModalOpen();
      }}
      {...delegated}
    >
      Add Budget
    </PrimaryButton>
  );
}

export default AddExpenseButton;
