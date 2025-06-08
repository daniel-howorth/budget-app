import React from "react";
import styles from "./Header.module.css";
import AddBudgetButton from "../AddBudgetButton";

function Header() {
  return (
    <header className={`${styles.header} padding--md gap--md`}>
      <h1 className="text--xxl">Budgets</h1>
      <AddBudgetButton />
    </header>
  );
}

export default Header;
