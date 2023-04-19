import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Pencil, Trash, Cancel, Save } from '../icons/index';
import { TCardContact, TContact } from '../../services/types/types';
import { CellTable } from './cell/cell';

import styles from './card-contact.module.scss';

export const CardContact: React.FC<TCardContact> = ({
  contact,
  rowsState,
  setRowsState,
}) => {
  // isEditMode - включение режима редактирования
  const [isEditMode, setIsEditMode] = useState(false);

  // rowIDToEdit - id строчки, которую редактируют
  const [rowIDToEdit, setRowIDToEdit] = useState<number>(undefined);

  // вкл. режима редактирования и передача id редактируемой строки
  const handleEdit = (rowID: number) => {
    setIsEditMode(true);
    setRowIDToEdit(rowID);
  };

  // удаление строчки
  const handleRemoveRow = (rowID: number) => {
    const newData = rowsState.filter((row) => {
      return row.id !== rowID ? row : null;
    });

    setRowsState(newData);
  };

  // отмена редактирования строки
  const handleCancelEditing = () => {
    setIsEditMode(false);
  };

  // сохранение редактирования строки
  const handleSaveRowChanges = (evt: React.SyntheticEvent) => {
    setIsEditMode(false);
    const currentRow = (evt.target as HTMLElement).closest('tr');
    const cells: Element[] = Array.from(
      currentRow.getElementsByClassName(`${styles.cell__td}`)
    );

    // извлекаем из input значения ячеек
    const editRow: { [key: string]: string | number } = {};
    cells.forEach((cell) => {
      const inputCell = cell.querySelector('input');
      if (inputCell.name && inputCell.value) {
        const optionNumber = ['id', 'number', 'companyId', 'phoneNumber'];
        const isNumber = optionNumber.some((name) => name === inputCell.name);
        if (isNumber) {
          editRow[inputCell.name] = Number(inputCell.value);
        } else {
          editRow[inputCell.name as keyof TContact] = inputCell.value;
        }
      }
    });

    const setEditRow = () => {
      return rowsState.map((row) => {
        if (editRow && row.id === editRow.id) {
          Object.assign(row, editRow);
        }
        return row;
      });
    };
    setRowsState(setEditRow());
  };

  const lengthData = Object.keys(contact).length;
  const getNameTypeOption = (index: number) => {
    const nameOption = Object.keys(contact)[index];
    const valueOption = Object.values(contact)[index];
    const typeOption = nameOption !== 'email' ? typeof valueOption : 'email';
    return { nameOption, typeOption };
  };

  const countOption = Array.from(Array(lengthData).keys());

  return (
    <tr className={styles['card-contact']}>
      {countOption.map((index) => {
        const { nameOption, typeOption } = getNameTypeOption(index);
        return (
          <CellTable
            key={uuidv4()}
            isEditMode={isEditMode}
            rowIDToEdit={rowIDToEdit}
            contact={contact}
            type={typeOption}
            option={nameOption}
            disabled={nameOption === 'id'}
          />
        );
      })}
      <td className={styles['card-contact__cell']} valign="top">
        <div className={styles['card-contact__btn']}>
          {isEditMode && rowIDToEdit === contact.id ? (
            <button
              onClick={(evt) => handleSaveRowChanges(evt)}
              className={styles['card-contact__action']}
            >
              <Save />
            </button>
          ) : (
            <button
              onClick={() => handleEdit(contact.id)}
              className={styles['card-contact__action']}
            >
              <Pencil />
            </button>
          )}

          {isEditMode && rowIDToEdit === contact.id ? (
            <button
              onClick={() => handleCancelEditing()}
              className={styles['card-contact__action']}
            >
              <Cancel />
            </button>
          ) : (
            <button
              onClick={() => handleRemoveRow(contact.id)}
              className={styles['card-contact__action']}
            >
              <Trash />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};
