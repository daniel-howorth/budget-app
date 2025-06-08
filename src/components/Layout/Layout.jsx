import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";
import Modal from "../Modal";
import { ModalContext } from "../../providers/ModalProvider";

function Layout() {
  const { isModalOpen, toggleIsModalOpen } = React.use(ModalContext);

  return (
    <div className={styles.layout}>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleDismiss={() => toggleIsModalOpen(false)}
        >
          <div>Hello, World!</div>
        </Modal>
      )}
      <Header />
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default Layout;
