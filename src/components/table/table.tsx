/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// TODO
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from 'react';
import { CardContact } from '../card-contact/card-contact';
import TablePagination from '../table-pagination/table-pagination';
import { useSortableData } from '../../services/hooks/use-sortable-data';

import { TTable } from '../../services/types/types';

import styles from './table.module.scss';

export const Table: React.FC<TTable> = ({ contacts }) => {
  const [sortList, setSortList] = useState(contacts);

  // rowsState - текущие строки на странице
  const [rowsState, setRowsState] = useState(contacts);

  //   const [editedRow, setEditedRow] = useState(undefined);
  // pageSize - кол-во строчек на странице
  //   const pageSize = Math.round((window.innerHeight - 86 - 96) / (125 + 12));
  const heightHead = 74;
  const heightTCaption = 48;
  const heightThead = 54;
  const heightPagination = 30;
  const heightMargin = 12;

  const heightCardContact = 78;
  const solvePageSize = Math.floor(
    (document.documentElement.clientHeight -
      heightHead -
      heightTCaption -
      heightThead -
      heightPagination -
      heightMargin * 3) /
      (heightCardContact + heightMargin)
  );
  const pageSize = solvePageSize > 0 ? solvePageSize : 1;

  // pageSize - кол-во стр
  const [currentPage, setCurrentPage] = useState(1);

  // pageSize - проверка всё ли умещается на 1 страницу
  useEffect(() => {
    if (currentPage >= contacts.length / pageSize) setCurrentPage(1);
  }, [pageSize]);

  // определение индексов строк для отображения на N (currentPage) странице
  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    const newData = sortList.slice(firstPageIndex, lastPageIndex);

    setRowsState(newData);
  }, [currentPage, pageSize, sortList]);

  // в sortConfig храним имя фильтра и направление
  // TODO вынести setSortList из хука
  //   const { sortedItems, requestSort, sortConfig } = useSortableData(
  const { requestSort, sortConfig } = useSortableData(contacts, setSortList);
  // при клике вызывается сортировка и устанавливается новое значение списка
  const onClickButton = (name: string) => {
    requestSort(name);
  };

  // назначение класса исходя из вкл\выкл фильтра
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    const styleConfigDirection = styles[`table__${sortConfig.direction}`];
    return sortConfig.key === name ? styleConfigDirection : undefined;
  };

  return (
    <>
      <table className={styles.table}>
        <caption className={styles.table__caption}>Total Contacts</caption>
        <thead>
          <tr>
            <th className={styles.table__th}>
              <button
                type="button"
                onClick={() => onClickButton('id')}
                className={getClassNamesFor('id')}
              >
                Client ID
              </button>
            </th>
            <th className={styles.table__th}>
              <button
                type="button"
                onClick={() => onClickButton('name')}
                className={getClassNamesFor('name')}
              >
                Client name
              </button>
            </th>
            <th className={styles.table__th}>
              <button
                type="button"
                onClick={() => onClickButton('number')}
                className={getClassNamesFor('number')}
              >
                TRN/PPSN
              </button>
            </th>
            <th className={styles.table__th}>
              <button
                type="button"
                onClick={() => onClickButton('year')}
                className={getClassNamesFor('year')}
              >
                Year end
              </button>
            </th>
            <th className={styles.table__th}>
              <button
                type="button"
                onClick={() => onClickButton('ard')}
                className={getClassNamesFor('ard')}
              >
                ARD
              </button>
            </th>
            <th className={styles.table__th}>
              <button
                type="button"
                onClick={() => onClickButton('companyId')}
                className={getClassNamesFor('companyId')}
              >
                Company number
              </button>
            </th>
            <th className={styles.table__th}>Email</th>
            <th className={styles.table__th}>Phone number</th>
            <th className={styles.table__th}>Company address</th>
            <th className={styles.table__th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowsState.map((contact) => (
            <CardContact
              key={contact.id}
              contact={contact}
              rowsState={rowsState}
              setRowsState={setRowsState}
            />
          ))}
        </tbody>
      </table>
      <TablePagination
        totalCount={contacts.length}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </>
  );
};
