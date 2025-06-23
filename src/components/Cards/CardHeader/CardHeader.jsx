import React from "react";
import styles from "./CardHeader.module.css";

function CardHeader({ name, expenditure, limit }) {
  console.log(limit);
  return (
    <header className={styles["card-header"]}>
      <h2 className={styles["card-name"]}>{name}</h2>
      <div className={styles["spending-summary"]}>
        <span className={styles.expenditure}>${expenditure}</span>
        {typeof limit === "number" && (
          <span className={styles.limit}> / ${limit}</span>
        )}
      </div>
    </header>
  );
}

export default CardHeader;
