import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";
import { ModalContext } from "../../providers/ModalProvider";
import Card from "../Cards/Card";

function Layout() {
  const { modal, isModalOpen } = React.use(ModalContext);

  return (
    <div className={styles.layout}>
      {isModalOpen && modal}
      <Header />
      <section>
        <Card title="Groceries" expenditure={100} limit={0} />
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default Layout;
