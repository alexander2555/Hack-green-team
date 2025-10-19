import styles from './button.module.css';

export const Button = ({
  className,
  lable = 'Button',
  textcolor = 'white',
  backgroundColor = 'yellow',
  onClick,
  borderRadius = '10px',
  ...props
}) => {
  const customButtonStyle = {
    color: textcolor,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };

  return (
    <div>
      <button
        type='button'
        className={styles.customButton + (className ? ' ' + className : '')}
        onClick={onClick}
        style={customButtonStyle}
        {...props}
      >
        {lable}
      </button>
    </div>
  );
};
