import React from "react";
import styles from "./CardHeader.module.css";

function CardHeader({ title, expenditure, limit }) {
  return (
    <header className={styles["card-header"]}>
      <h2 className={styles["card-title"]}>{title}</h2>
      <div className={styles["spending-summary"]}>
        <span className={styles.expenditure}>${expenditure}</span>
        {limit !== null && <span className={styles.limit}> / ${limit}</span>}
      </div>
    </header>
  );
}

export default CardHeader;
