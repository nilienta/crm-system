/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';

import { Pencil, Trash, Cancel, Save } from '../icons/index';
import { TContact, TContacts } from '../../services/types/types';
import { CellTable } from './cell/cell';

import styles from './card-contact.module.scss';

interface TCardContactInterface
  // TODO разобраться со строчкой extends Omit<
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  // TODO уточнить object
  contact: TContact;
  rowsState: TContacts;
  setRowsState: React.Dispatch<React.SetStateAction<TContacts>>;
}

export const CardContact: React.FC<TCardContactInterface> = ({
  contact,
  rowsState,
  setRowsState,
}) => {
  // isEditMode - включение режима редактирования
  const [isEditMode, setIsEditMode] = useState(false);

  // rowIDToEdit - id строчки, которую редактируют
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);

  const [editedRow, setEditedRow] = useState(undefined);

  // вкл. режима редактирования и передача id редактируемой строки
  const handleEdit = (rowID: number) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  };

  // удаление строчки
  const handleRemoveRow = (rowID: number) => {
    const newData = rowsState.filter((row) => {
      return row.id !== rowID ? row : null;
    });

    setRowsState(newData);
  };

  // отслеживание редактирования
  const handleOnChangeField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowID: number
  ) => {
    const { name, value } = e.target;
    setEditedRow({
      id: rowID,
      [name]: value,
    });
  };

  // отмена редактирования строки
  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  };

  // сохранение редактирования строки
  // FIXME не редактируется ClientID
  const handleSaveRowChanges = (evt: any) => {
    setIsEditMode(false);
    const currentRow = evt.target.closest('tr');
    const cells: HTMLLinkElement[] = Array.from(
      currentRow.getElementsByClassName(`${styles['card-contact__td']}`)
    );
    const editRow: { [index: string]: any } = {};
    cells.forEach((cell) => {
      const inputCell = cell.firstElementChild as HTMLInputElement;
      if (inputCell.name && inputCell.value) {
        const optionNumber = ['id', 'number', 'companyId', 'phoneNumber'];
        const isNumber = optionNumber.some((name) => name === inputCell.name);
        if (isNumber) {
          editRow[inputCell.name] = Number(inputCell.value);
        } else {
          editRow[inputCell.name] = inputCell.value;
        }
      }
    });

    const setEditRow = () => {
      console.log('setEditRow');
      return rowsState.map((row) => {
        console.log(row.id === editRow.id);
        console.log('editRow', Boolean(editRow));
        console.log('row.id', row.id);
        console.log('editRow.id', editRow.id);
        if (editRow && row.id === editRow.id) {
          console.log(row);
          console.log(editRow);
          console.log(Object.assign(row, editRow));
          Object.assign(row, editRow);
        }
        return row;
      });
    };
    setRowsState(setEditRow());
    setEditedRow(undefined);
  };

  return (
    <tr className={styles['card-contact__tr']}>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="id"
            type="number"
            defaultValue={contact.id}
            onChange={(e) => handleOnChangeField(e, contact.id)}
            disabled
          />
        ) : (
          contact.id
        )}
      </td>
      <CellTable
        isEditMode={isEditMode}
        rowIDToEdit={rowIDToEdit}
        contact={contact}
        type="text"
        handleOnChangeField={handleOnChangeField}
        option="name"
      />
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="name"
            type="text"
            defaultValue={contact.name}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          contact.name
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="number"
            type="number"
            defaultValue={contact.number}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          contact.number
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="year"
            type="text"
            defaultValue={contact.year}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          new Date(contact.year + 'Z').toLocaleDateString('en-US')
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="ard"
            type="text"
            defaultValue={contact.ard}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          new Date(contact.ard + 'Z').toLocaleDateString('en-US')
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="companyId"
            type="number"
            defaultValue={contact.companyId}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          contact.companyId
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="email"
            type="email"
            defaultValue={contact.email}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          contact.email
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="phoneNumber"
            type="number"
            defaultValue={contact.phoneNumber}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          contact.phoneNumber
        )}
      </td>
      <td className={styles['card-contact__td']}>
        {isEditMode && rowIDToEdit === contact.id ? (
          <input
            name="companyAddress"
            type="text"
            defaultValue={contact.companyAddress}
            onChange={(e) => handleOnChangeField(e, contact.id)}
          />
        ) : (
          contact.companyAddress
        )}
      </td>
      <td className={styles['card-contact__td']}>
        <div className={styles['custom-table__btn']}>
          {isEditMode && rowIDToEdit === contact.id ? (
            <button
              onClick={(evt) => handleSaveRowChanges(evt)}
              className={styles['custom-table__action-btn']}
              disabled={!editedRow}
            >
              <Save />
            </button>
          ) : (
            <button
              onClick={() => handleEdit(contact.id)}
              className={styles['custom-table__action-btn']}
            >
              <Pencil />
            </button>
          )}

          {isEditMode && rowIDToEdit === contact.id ? (
            <button
              onClick={() => handleCancelEditing()}
              className={styles['custom-table__action-btn']}
            >
              <Cancel />
            </button>
          ) : (
            <button
              onClick={() => handleRemoveRow(contact.id)}
              className={styles['custom-table__action-btn']}
            >
              <Trash />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};
