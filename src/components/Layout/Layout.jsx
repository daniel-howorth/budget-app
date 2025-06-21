import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";
import { ModalContext } from "../../providers/ModalProvider";
import BudgetCard from "../Cards/BudgetCard";

function Layout() {
  const { modal, isModalOpen } = React.use(ModalContext);

  return (
    <div className={styles.layout}>
      {isModalOpen && modal}
      <Header />
      {/* BudgetsSection ? */}
      <section>
        <BudgetCard title="Groceries" expenditure={100} limit={100} />
        <BudgetCard title="Holiday" expenditure={50} limit={100} />
        <BudgetCard title="Travel" expenditure={85} limit={100} />
        <BudgetCard title="Renovations" expenditure={1000} limit={800} />
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default Layout;
