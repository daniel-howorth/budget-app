import React from "react";
import styles from "./LabeledInput.module.css";

function LabeledInput({ label, id, required = false, children }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      {children}
    </div>
  );
}

export default LabeledInput;
