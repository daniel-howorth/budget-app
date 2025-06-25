import React from "react";
import Button from "../Button/Button";
import { X } from "react-feather";
import styles from "./DeleteButton.module.css";
import clsx from "clsx";

function DeleteButton({
  handleDelete,
  size = 1,
  strokeWidth = 1,
  className = "",
  ...delegated
}) {
  const appliedClassName = clsx(styles["delete-button"], className);
  return (
    <Button onClick={handleDelete} className={appliedClassName} {...delegated}>
      <X size={`${size}em`} strokeWidth={strokeWidth} />
    </Button>
  );
}

export default DeleteButton;
