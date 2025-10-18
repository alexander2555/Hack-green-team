import { NavLink, useNavigate, Link } from "react-router-dom";
import { Button } from "../../elements/button/button";

import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.controlPanelContainer}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        <Button
          lable="Главная"
          textcolor="#fff"
          backgroundColor="rgba(81, 38, 161, 1)"
          borderRadius="10px"
        />
      </NavLink>
      <NavLink
        to={"favorites"}
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        <Button
          lable="Избранное"
          textcolor="#fff"
          backgroundColor="rgba(81, 38, 161, 1)"
          borderRadius="10px"
        />
      </NavLink>

      <Link className={styles.link}>
        <Button
          lable="Назад"
          textcolor="#fff"
          backgroundColor="rgba(81, 38, 161, 1)"
          borderRadius="10px"
          onClick={() => navigate(-1)}
        />
      </Link>
    </div>
  );
};
