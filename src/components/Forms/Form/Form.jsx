import React from "react";
import styles from "./Form.module.css";
import clsx from "clsx";

function Form({ onSubmit, children, className = "", ...delegated }) {
  const appliedClassName = clsx(styles["form-wrapper"], className);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className={appliedClassName} onSubmit={handleSubmit} {...delegated}>
      {children}
    </form>
  );
}

export default Form;
