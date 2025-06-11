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
    className
  );

  return (
    <LabeledInput id={id} label={label} required={required}>
      <input id={id} type="text" className={appliedClassName} {...delegated} />
    </LabeledInput>
  );
}

export default TextInput;
