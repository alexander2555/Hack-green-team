import { Button } from "../../elements/button/button";
import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  return (
    <div className={styles.controlPanelContainer}>
      <Button
        lable="Главная"
        textcolor="#fff"
        backgroundColor="rgb(161, 38, 151)"
        onClick={() => alert("Click")}
        borderRadius="10px"
      />
    </div>
  );
};
