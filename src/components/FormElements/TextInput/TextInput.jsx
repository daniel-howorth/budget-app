import React from "react";
import LabeledInput from "../LabeledInput";

function TextInput({
  id,
  label,
  required = false,
  className = "",
  ...delegated
}) {
  return (
    <LabeledInput id={id} label={label} required={required}>
      <input id={id} type="text" className={className} {...delegated} />
    </LabeledInput>
  );
}

export default TextInput;
