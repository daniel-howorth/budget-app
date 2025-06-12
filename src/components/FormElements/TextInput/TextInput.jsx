import React from "react";
import LabeledInput from "../LabeledInput";
import styles from "./TextInput.module.css";
import clsx from "clsx";

function TextInput({
  id,
  label,
  required = false,
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
        type="text"
        className={appliedClassName}
        required={required}
        {...delegated}
      />
    </LabeledInput>
  );
}

export default TextInput;
