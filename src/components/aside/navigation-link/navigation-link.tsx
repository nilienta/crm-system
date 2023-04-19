import React from 'react';
import { NavLink } from 'react-router-dom';
import { TNavigationLink } from '../../../services/types/types';

import styles from './navigation-link.module.scss';

export const NavigationLink: React.FC<TNavigationLink> = ({
  text,
  link,
  children,
  exact,
}) => {
  return (
    <li>
      <NavLink
        to={link}
        exact={exact}
        className={styles.link}
        activeClassName={styles['link--active']}
      >
        <div className={styles.link__icon}>{children}</div>
        {text}
      </NavLink>
    </li>
  );
};
