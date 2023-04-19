import React from 'react';
import { TCellHeader } from '../../../services/types/types';
import styles from './cell-header.module.scss';

export const CellHeader: React.FC<TCellHeader> = ({
  name,
  text,
  isButtonNeed,
  onClickButton,
}) => {
  if (isButtonNeed) {
    return (
      <th className={styles.cell}>
        <button
          type="button"
          onClick={() => onClickButton(name)}
          className={styles.cell__button}
        >
          <span>{text}</span>
        </button>
      </th>
    );
  }

  return (
    <th className={styles.cell}>
      <span>{text}</span>
    </th>
  );
};
