import { ControlPanel } from "../control-panel/control-panel";
import { Logo } from "../../elements/logo/logo";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <h1 className={styles.headerTitle}>Хакатон: React</h1>
      <div className={styles.controlPanelContainer}>
        <ControlPanel />
      </div>
    </div>
  );
};
