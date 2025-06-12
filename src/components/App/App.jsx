import React from "react";
import styles from "./App.module.css";
import Layout from "../Layout";
import ModalProvider from "../../providers/ModalProvider";
import BudgetsProvider from "../../providers/BudgetsProvider";

function App() {
  return (
    <BudgetsProvider>
      <ModalProvider>
        <div className={styles.wrapper}>
          <Layout />
        </div>
      </ModalProvider>
    </BudgetsProvider>
  );
}

export default App;
