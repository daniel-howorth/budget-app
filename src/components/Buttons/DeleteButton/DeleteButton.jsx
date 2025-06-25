import React from "react";
import Button from "../Button/Button";
import { X } from "react-feather";
import styles from "./DeleteButton.module.css";

function DeleteButton({ size = 1, strokeWidth = 1 }) {
  return (
    <Button className={styles["delete-button"]}>
      <X size={`${size}em`} strokeWidth={strokeWidth} />
    </Button>
  );
}

export default DeleteButton;
