import React from "react";
import Button from "../Button/Button";
import { X } from "react-feather";
import styles from "./DeleteButton.module.css";
import clsx from "clsx";

function DeleteButton({
  size = 1,
  strokeWidth = 1,
  className = "",
  ...delegated
}) {
  const appliedClassName = clsx(styles["delete-button"], className);
  return (
    <Button className={appliedClassName} {...delegated}>
      <X size={`${size}em`} strokeWidth={strokeWidth} />
    </Button>
  );
}

export default DeleteButton;
