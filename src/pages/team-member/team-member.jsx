import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMember } from '../../data';

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
    <>
      <h2>Страница участника</h2>

      <div className={`card ${styles['card-member']}`}>
        <img src={photo} class='card-img-top' alt={name} />
        <div className='card-body'>
          <h3 class='card-title'>{name}</h3>
          <span>Возраст: {age}</span>
          <p class='card-text'>О себе: {about}</p>

          <p class='card-text'>Задачи: {responsibilities}</p>
          <ul>
            Контакты:
            {Object.entries(contacts).map(([key, val]) => (
              <li key={key}>
                {key}: {val}
              </li>
            ))}
          </ul>
          {/* <Button
            lable='>'
            backgroundColor='rgba(81, 38, 161, 1)'
            onClick={() => nav(`/team-member/${id}`)}
          /> */}
        </div>
      </div>
    </>
  );
};
