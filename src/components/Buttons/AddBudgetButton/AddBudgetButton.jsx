import React from "react";
import PrimaryButton from "../PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import AddBudgetForm from "../../Forms/AddBudgetForm";

function AddBudgetButton({ className = "", ...delegated }) {
  const { openModal } = React.use(ModalContext);

  return (
    <PrimaryButton
      className={className}
      onClick={() => {
        openModal(<AddBudgetForm />);
      }}
      {...delegated}
    >
      Add Budget
    </PrimaryButton>
  );
}

export default AddBudgetButton;
