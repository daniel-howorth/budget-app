import React from "react";
import styles from "./LabeledInput.module.css";

function LabeledInput({ label, id: providedId, required = false, children }) {
  const generatedId = React.useId();
  const appliedId = providedId || generatedId;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={appliedId}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      {React.cloneElement(children, { id: appliedId })}
    </div>
  );
}

export default LabeledInput;
