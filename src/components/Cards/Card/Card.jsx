import React from "react";
import styles from "./Card.module.css";

function Card({ title, expenditure, limit }) {
  return (
    <article className={styles.card}>
      <div className={styles["card-header"]}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles["spending-summary"]}>
          <span className={styles.expenditure}>${expenditure}</span>
          {limit !== null && <span className={styles.limit}> / ${limit}</span>}
        </div>
      </div>
    </article>
  );
}

export default Card;
