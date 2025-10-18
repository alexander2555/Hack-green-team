import logo from "../../assets/logo-green-team.png";

import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};
