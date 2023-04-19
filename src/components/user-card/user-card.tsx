import React from 'react';

import { TUserCard } from '../../services/types/types';
import styles from './user-card.module.scss';
import avatarDefault from '../../assets/img/avatar-default.png';

export const UserCard: React.FC<TUserCard> = ({ avatar }) => {
  return (
    <div className={styles['user-card']}>
      <div className={styles['user-card__avatar']}>
        <img
          className={styles['user-card__img']}
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
