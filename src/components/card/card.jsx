import { Link } from "react-router-dom";
import { Badge } from "../badge/badge";
import { Button } from "../../elements/button/button";
import { useFavStatus } from "../../hooks/use-fav-status";
import { HeartEmpty, HeartFull } from "../../icons";
import { getAgeText } from "../../utils";

import styles from "./card.module.css";

export const Card = ({
  className,
  item,
  cusstomButton,
  onClick,
  lable,
  backgroundColor,
  path,
}) => {
  const { id, name, about, photo, responsibilities, age, contacts, badge } =
    item;

  const { favStatus } = useFavStatus(id);

  return (
    <div className={styles.card + " " + className}>
      <Link to={`${path}${id}`}>
        <div className={styles["card-header"]}>
          <div className={styles["photo-container"]}>
            <img
              src={photo}
              alt={name}
              className={styles.photo}
              width={100}
              height={150}
            />
          </div>
          <div className={styles.age}>{getAgeText(age)}</div>
          {badge ? (
            <Badge
              content={badge}
              textColor="white"
              className={styles["card-header-bage"]}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
      <div className={styles["favorite-icon"]}>
        {favStatus ? <HeartFull favorites /> : <HeartEmpty />}
      </div>
      <div className={styles["card-body"]}>
        <h2 className={styles.name}>{name}</h2>

        <div className={styles["info-section"]}>
          <div className={styles.label}>О себе</div>
          <p className={styles.text}>{about}</p>
        </div>

        <div className={styles["info-section"]}>
          <div className={styles.label}>Обязанности</div>
          <p className={styles.text}>{responsibilities}</p>
        </div>

        <div className={styles["info-section"]}>
          <div className={styles.label}>Контакты</div>
          <ul className={styles.contacts}>
            {Object.entries(contacts).map(([key, val]) => (
              <li key={key}>
                <Link
                  to={
                    key === "email"
                      ? `mailto:${val}`
                      : val.replace("@", "https://t.me/")
                  }
                  className={styles["contact-item"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {cusstomButton && (
          <Button
            onClick={onClick}
            lable={lable}
            backgroundColor={backgroundColor}
          />
        )}
      </div>
    </div>
  );
};
