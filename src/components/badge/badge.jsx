import styles from './badge.module.css';

export const Badge = ({ className, content, textColor, bgColor }) => {
  const classes = [styles.badge];

  if (className) classes.push(className);

  return (
    <div
      className={classes.join(' ')}
      style={{ '--text-color': textColor, '--bg-color': bgColor }}
    >
      <span>{content}</span>
    </div>
  );
};
