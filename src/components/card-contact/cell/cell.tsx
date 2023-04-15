/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';

import { TContact } from '../../../services/types/types';
import styles from '../card-contact.module.scss';

type TCellTable = {
  isEditMode: boolean;
  rowIDToEdit: any;
  contact: TContact;
  option: string;
  type: string;
  handleOnChangeField: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowID: number
  ) => void;
};

export const CellTable: FC<TCellTable> = ({
  isEditMode,
  rowIDToEdit,
  contact,
  option,
  type,
  handleOnChangeField,
}) => {
  return (
    <td className={styles['card-contact__td']}>
      {isEditMode && rowIDToEdit === contact.id ? (
        <input
          name={option}
          type={type}
          defaultValue={contact[option as keyof TContact]}
          onChange={(e) => handleOnChangeField(e, contact.id)}
        />
      ) : (
        contact[option as keyof TContact]
      )}
    </td>
  );
};
