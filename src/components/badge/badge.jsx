/**
 * Компонент Badge.
 *
 * @param {string} [props.className] - Дополнительный(е) CSS-класс(ы), применяемые к контейнеру бейджа.
 * @param {React.ReactNode} [props.content] - Содержимое, отображаемое внутри бейджа (текст).
 * @param {string} [props.textColor] - Значение цвета текста, применяемое к CSS-переменной `--text-color`
 * @param {string} [props.bgColor] - Значение фона, применяемое к CSS-переменной `--bg-color`
 * @returns {JSX.Element} JSX-элемент бейджа.
 *
 * @example
 * <Badge content="New" />
 *
 * @example
 * <Badge className="my-badge" content={42} textColor="#fff" bgColor="#f00" />
 */

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
