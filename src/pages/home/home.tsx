import React from 'react';

import { UserCard } from '../../components/user-card/user-card';
import { Search } from '../../components/search/search';
import { Contacts } from '../../components/contacts/contacts';

import styles from './home.module.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Search request="" />
        <UserCard />
      </header>
      <Contacts />
      {/* <aside></aside> */}
    </>
  );
};
