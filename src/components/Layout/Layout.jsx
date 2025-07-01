import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";
import { ModalContext } from "../../providers/ModalProvider";
import BudgetCard from "../Cards/BudgetCard";
import { BudgetsContext } from "../../providers/BudgetsProvider";
import MiscExpensesCard from "../Cards/MiscExpensesCard";
import TotalExpendtureCard from "../Cards/TotalExpenditureCard";
import TotalExpenditureCard from "../Cards/TotalExpenditureCard";

function Layout() {
  const { modal, isModalOpen } = React.use(ModalContext);
  const { budgets, getTotalBudgetExpenditure } = React.use(BudgetsContext);

  return (
    <div className={styles.layout}>
      {isModalOpen && modal}
      <Header />
      {/* BudgetsSection ? */}
      <section>
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            id={budget.id}
            name={budget.name}
            expenditure={getTotalBudgetExpenditure(budget.id)}
            limit={budget.limit}
          />
        ))}
      </section>
      <section>
        <MiscExpensesCard />
      </section>
      <section>
        <TotalExpenditureCard />
      </section>
    </div>
  );
}

export default Layout;
