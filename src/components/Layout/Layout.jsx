import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";
import AddBudgetButton from "../AddBudgetButton";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <section>
        <AddBudgetButton />
        <AddBudgetButton alt={true} />
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default Layout;
