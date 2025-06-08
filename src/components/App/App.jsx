import React from "react";
import styles from "./App.module.css";
import Layout from "../Layout";
import ModalProvider from "../../providers/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <div className={styles.wrapper}>
        <Layout />
      </div>
    </ModalProvider>
  );
}

export default App;
