import React from 'react';

import styles from './user-card.module.scss';
// import avatarDefault from '../../assets/img/avatar-default.png';
import avatarDefault from '../../assets/img/2.jpg';

interface TUserCardInterface
  // TODO разобраться со строчкой extends Omit<
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  avatar?: string;
}

export const UserCard: React.FC<TUserCardInterface> = ({ avatar }) => {
  return (
    <div className={styles['user-card']}>
      <div className={styles['user-card__avatar']}>
        <img
          className={styles['user-card__img']}
          // TODO разобраться с импортом
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={avatar || avatarDefault}
          alt="User's avatar"
          width="66px"
          height="70px"
        />
      </div>

      <div className={styles['user-card__text']}>
        <p className={styles['user-card__name']}>Mr. Director</p>
        <p className={styles['user-card__position']}>Managing Director</p>
      </div>
    </div>
  );
};
