import { Link } from "react-router-dom";

import styles from "./breadcrumbs.module.css";

export const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={styles.breadcrumbItem}>
              {isLast || !item.path ? (
                <span aria-current="page" className={styles.current}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className={styles.link}>
                  {item.label}
                </Link>
              )}
              {!isLast && <span className={styles.separator}>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
