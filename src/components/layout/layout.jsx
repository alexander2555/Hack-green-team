import { Header } from "../header/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.body}>
      <ScrollRestoration />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
