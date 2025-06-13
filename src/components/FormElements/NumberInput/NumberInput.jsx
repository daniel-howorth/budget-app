import React from "react";
import LabeledInput from "../LabeledInput";
import styles from "../Shared.module.css";
import clsx from "clsx";

function NumberInput({
  id,
  label,
  required = false,
  min = 0,
  step = 0.01,
  inputMode = "decimal",

  className = "",
  ...delegated
}) {
  const appliedClassName = clsx(
    styles.input,
    "form-element-padding",
    "tap-target",
    className
  );

  return (
    <LabeledInput id={id} label={label} required={required}>
      <input
        type="number"
        min={min}
        step={step}
        inputMode={inputMode}
        required={required}
        className={appliedClassName}
        {...delegated}
        pattern="[0-9]*"
      />
    </LabeledInput>
  );
}

export default NumberInput;
