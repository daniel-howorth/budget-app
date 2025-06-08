import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

function Button({ className = "", children, ...delegated }) {
  const appliedClassName = clsx(styles.btn, className, "tap-target");
  return (
    <button className={appliedClassName} {...delegated}>
      {children}
    </button>
  );
}

export default Button;
