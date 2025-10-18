import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMember } from '../../data';
import { getAgeText } from '../../utils';

import styles from './team-member.module.css';

export const TeamMember = () => {
  const id = useParams().id;

  const [member, setMember] = useState(null);

  useEffect(() => {
    setMember(getMember(id));
  }, [id]);

  if (!member) return <div>Загрузка данных...</div>;

  const { name, about, age, photo, responsibilities, contacts } = member;

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.photoWrapper}>
          <img src={photo} alt={name} className={styles.photo} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.age}>{getAgeText(age)}</p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h3 className={styles['section-title']}>О себе</h3>
          <p className={styles['section-content']}>{about}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles['section-title']}>Обязанности</h3>
          <p className={styles['section-content']}>{responsibilities}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles['section-title']}>Контакты</h3>
          <ul className={styles.contacts}>
            {Object.entries(contacts).map(([key, val]) => (
              <li key={key}>
                <Link
                  to={
                    key === 'email'
                      ? `mailto:${val}`
                      : val.replace('@', 'https://t.me/')
                  }
                  className={styles['contact-item']}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};
