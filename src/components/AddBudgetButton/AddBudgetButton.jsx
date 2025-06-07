import React from "react";
import PrimaryButton from "../PrimaryButton";

function AddBudgetButton({ alt, className = "", ...delegated }) {
  return (
    <PrimaryButton alt={alt} className={className} {...delegated}>
      Add Budget
    </PrimaryButton>
  );
}

export default AddBudgetButton;
