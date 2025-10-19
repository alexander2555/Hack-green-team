import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMember } from '../../data';
import { Badge } from '../../components/badge/badge';
import { Button } from '../../elements/button/button';
import { useFavStatus } from '../../hooks/use-fav-status';
import { HeartEmpty, HeartFull } from '../../icons';
import { getAgeText } from '../../utils';

import styles from './team-member.module.css';
import { Card } from '../../components/card/Card';

export const TeamMember = () => {
  const id = useParams().id;

  const [member, setMember] = useState(null);

  const { favStatus, changeFavStatus } = useFavStatus(id);

  useEffect(() => {
    const member = getMember(id);
    member.age = 20 + Math.round(Math.random() * 30);
    setMember(member);
  }, [id]);

  if (!member) return <div>Загрузка данных...</div>;

  const { name, about, photo, responsibilities, age, contacts, badge } = member;

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.photoWrapper}>
          <img src={photo} alt={name} className={styles.photo} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.age}>{getAgeText(age)}</p>
        {badge ? (
          <Badge
            content={badge}
            textColor='white'
            className={styles['header-bage']}
          />
        ) : (
          ''
        )}
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

        <Button
          backgroundColor='rgba(81, 38, 161, 1)'
          borderRadius='50em'
          onClick={changeFavStatus}
          title={favStatus ? 'Добавить в избранное' : 'Удалить из избранного'}
          lable={favStatus ? <HeartFull /> : <HeartEmpty />}
        />
      </div>
    </article>
  );
};
