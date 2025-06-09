import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";

function AddBudgetButton({ alt, className = "", ...delegated }) {
  const { toggleIsModalOpen, setModalAction } = React.use(ModalContext);

  return (
    <PrimaryButton
      alt={alt}
      className={className}
      onClick={() => {
        setModalAction("add-budget");
        toggleIsModalOpen();
      }}
      {...delegated}
    >
      Add Budget
    </PrimaryButton>
  );
}

export default AddBudgetButton;
