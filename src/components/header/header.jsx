import { Logo } from "../logo/logo";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <h1 className={styles.headerTitle}>Хакатон</h1>
    </div>
  );
};
