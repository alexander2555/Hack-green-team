import { ControlPanel } from "../control-panel/control-panel";
import { Logo } from "../../elements/logo/logo";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <h1 className={styles.headerTitle}>Хакатон</h1>
      <ControlPanel />
    </div>
  );
};
