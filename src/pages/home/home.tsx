import React from 'react';

import { UserCard } from '../../components/user-card/user-card';
import { Search } from '../../components/search/search';
import { ContactList } from '../../components/contact-list/contact-list';
import { Aside } from '../../components/aside/aside';

import styles from './home.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <Aside />
      <div className={styles.home__main}>
        <header className={styles.home__header}>
          <Search request="" />
          <UserCard />
        </header>
        <ContactList />
      </div>
    </div>
  );
};
