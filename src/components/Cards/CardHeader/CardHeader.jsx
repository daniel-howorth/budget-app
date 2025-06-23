import React from "react";
import styles from "./CardHeader.module.css";

function CardHeader({ name, expenditure, limit }) {
  return (
    <header className={styles["card-header"]}>
      <h2 className={styles["card-name"]}>{name}</h2>
      <div className={styles["spending-summary"]}>
        <span className={styles.expenditure}>${expenditure.toFixed(2)}</span>
        {typeof limit === "number" && (
          <span className={styles.limit}> / ${limit.toFixed(2)}</span>
        )}
      </div>
    </header>
  );
}

export default CardHeader;
