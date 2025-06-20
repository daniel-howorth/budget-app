import React from "react";
import styles from "./Card.module.css";

function Card({ children }) {
  return <article className={styles.card}>{children}</article>;
}

export default Card;
