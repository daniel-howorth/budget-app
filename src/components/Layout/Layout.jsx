import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default Layout;
