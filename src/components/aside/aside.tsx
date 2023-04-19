import React from 'react';

import { Logo, Contact, Calendar, Report, Logout } from '../icons';
import { NavigationLink } from './navigation-link/navigation-link';
import { Button } from '../button/button';
import { useAppDispatch } from '../../services/types/types';
import { LOGOUT } from '../../services/actions/app';

import styles from './aside.module.scss';

export const Aside: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <aside className={styles.aside}>
      <Logo />
      <nav className={styles.aside__nav}>
        <ul className={styles.aside__list}>
          <NavigationLink text="Total Contacts" link="/" exact>
            <Contact />
          </NavigationLink>
          <NavigationLink text="Calendar" link="/calendar" exact>
            <Calendar />
          </NavigationLink>
          <NavigationLink text="Project Report" link="/report" exact>
            <Report />
          </NavigationLink>
        </ul>
      </nav>
      <Button
        color="white"
        htmlType="submit"
        text="Log out"
        extraClass={styles.aside__button}
        icon={<Logout />}
        onClick={handleClick}
      />
    </aside>
  );
};
