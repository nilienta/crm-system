import React from 'react';

import styles from './search.module.scss';

interface TSearchInterface
  // TODO разобраться со строчкой extends Omit<
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  request?: string;
}

export const Search: React.FC<TSearchInterface> = () => {
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
