import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";
import { ModalContext } from "../../providers/ModalProvider";
import BudgetCard from "../Cards/BudgetCard";
import { BudgetsContext } from "../../providers/BudgetsProvider";

function Layout() {
  const { modal, isModalOpen } = React.use(ModalContext);
  const { budgets } = React.use(BudgetsContext);

  return (
    <div className={styles.layout}>
      {isModalOpen && modal}
      <Header />
      {/* BudgetsSection ? */}
      <section>
        {/* <BudgetCard title="Renovations" expenditure={1000} limit={800} /> */}
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            name={budget.name}
            expenditure={budget.getTotalExpenditure()}
            limit={budget.limit}
          />
        ))}
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default Layout;
