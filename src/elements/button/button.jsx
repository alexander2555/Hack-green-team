import styles from "./button.module.css";

export const Button = ({
  lable = "Button",
  textcolor = "white",
  backgroundColor = "yellow",
  onClick,
  borderRadius = "10px",
}) => {
  const customButtonStyle = {
    color: textcolor,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };

  return (
    <div>
      <button
        type="button"
        className={styles.customButton}
        onClick={onClick}
        style={customButtonStyle}
      >
        {lable}
      </button>
    </div>
  );
};
