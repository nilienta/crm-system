import React from 'react';

import { TSearch } from '../../services/types/types';
import styles from './search.module.scss';

export const Search: React.FC<TSearch> = () => {
  return (
    <form className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search by Name..."
      />
      <button
        className={styles.search__btn}
        type="button"
        aria-label="Search"
      />
    </form>
  );
};
