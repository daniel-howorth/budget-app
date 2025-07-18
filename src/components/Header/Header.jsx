import React from "react";
import styles from "./Header.module.css";
import AddBudgetButton from "../Buttons/AddBudgetButton";

function Header() {
  return (
    <header className={`${styles.header} padding--md gap--md`}>
      <h1 className="text--xxl">Budgets</h1>
      <AddBudgetButton alt />
    </header>
  );
}

export default Header;
