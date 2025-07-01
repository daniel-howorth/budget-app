import React from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

function Card({ children, className = "", ...delegated }) {
  const appliedClassName = clsx(className, styles.card);
  return (
    <article className={appliedClassName} {...delegated}>
      {children}
    </article>
  );
}

export default Card;
