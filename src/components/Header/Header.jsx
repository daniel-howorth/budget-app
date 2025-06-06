import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} padding--md`}>
      <h1 className="text--xxl">Budgets</h1>
    </header>
  );
}

export default Header;
