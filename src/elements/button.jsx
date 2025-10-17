import styles from "./button.module.css";

export const Button = ({ children }) => {
  return (
    <div>
      <button type="button" className={styles.customButton}>
        {children}
      </button>
    </div>
  );
};
