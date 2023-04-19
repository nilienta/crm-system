import React from 'react';
import { TCellTable, TContact } from '../../../services/types/types';
import styles from '../card-contact.module.scss';

export const CellTable: React.FC<TCellTable> = ({
  isEditMode,
  rowIDToEdit,
  contact,
  option,
  type,
  disabled,
}) => {
  const textCell: string | number =
    option === 'year' || option === 'ard'
      ? new Date(`${contact.year}Z`).toLocaleDateString('en-US')
      : contact[option as keyof TContact];

  return (
    <td className={styles.cell__td} valign="top">
      <div className={styles.cell__wrap}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name={option}
            type={type}
            defaultValue={contact[option as keyof TContact]}
            disabled={disabled}
            size={1}
          />
        ) : (
          textCell
        )}
      </div>
    </td>
  );
};
