import React from "react";
import Button from "../Button";
import styles from "./PrimaryButton.module.css";
import clsx from "clsx";

function PrimaryButton({
  alt = false,
  className = "",
  children,
  ...delegated
}) {
  const appliedClassName = clsx(
    styles["btn--primary"],
    alt && styles["btn--primary-alt"],
    className
  );
  return (
    <Button className={appliedClassName} {...delegated}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
