/**
 * Карточка профиля пользователя.
 *
 * @param {string} [props.className] - Дополнительный CSS-класс для корневого элемента.
 * @param {Object} props.item - Данные для отображения в карточке.
 * @param {string} props.item.id - id для избранного.
 * @param {string} props.item.name - Имя или заголовок карточки.
 * @param {string} props.item.about - Краткая информация "О себе".
 * @param {string} props.item.photo - URL фотографии (используется как src у <img>).
 * @param {string} props.item.responsibilities - Описание обязанностей.
 * @param {number} props.item.age - Числовое значение возраста; форматируется с помощью getAgeText.
 * @param {Object.<string,string>} props.item.contacts - Объект контактов вида.
 * @param {string} [props.item.badge] - Текст бейджа; если указан, отображается компонент Badge.
 *
 * Поведение и заметки по рендерингу:
 * - Фото выводится с alt равным name.
 * - Возраст отображается через вызов getAgeText(age).
 * - При наличии badge рендерится <Badge content={badge} textColor="white" className={...} />.
 * - Контакты рендерятся как список ссылок:
 *   - для ключа "email" формируется ссылка mailto:{value};
 *   - для прочих контактов значение с '@' преобразуется в ссылку вида "https://t.me/{rest}".
 * - Контактные ссылки открываются в новой вкладке (target="_blank") и получают rel="noopener noreferrer".
 *
 * @returns {JSX.Element} JSX-элемент карточки.
 */
import { Link } from "react-router-dom";
import { Button } from "../../elements/button/button";
import { Badge } from "../badge/badge";
import { useFavStatus } from "../../hooks/use-fav-status";
import { HeartEmpty, HeartFull } from "../../icons";
import { getAgeText } from "../../utils";

import styles from "./card.module.css";

export const Card = ({ className, item }) => {
  const { id, name, about, photo, responsibilities, age, contacts, badge } =
    item;

  const { favStatus, changeFavStatus } = useFavStatus(id);

  return (
    <div className={styles.card + " " + className}>
      <div className={styles["card-header"]}>
        <div className={styles["photo-container"]}>
          <img src={photo} alt={name} className={styles.photo} />
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

        <Button
          className={styles["card-fav-btn"]}
          backgroundColor="rgba(81, 38, 161, 1)"
          borderRadius="50em"
          onClick={changeFavStatus}
          title={favStatus ? "Добавить в избранное" : "Удалить из избранного"}
          lable={favStatus ? <HeartFull /> : <HeartEmpty />}
        />
      </div>
    </div>
  );
};
