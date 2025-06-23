import React from "react";
import styles from "./CardActions.module.css";

function CardActions({ children }) {
  return <div className={styles.actions}>{children}</div>;
}

export default CardActions;
