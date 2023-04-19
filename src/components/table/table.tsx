import React, { useState, useMemo, useEffect } from 'react';

import { pageSize } from '../../utils/get-number-pages';
import { useSortableData } from '../../services/hooks/use-sortable-data';
import { CardContact } from '../card-contact/card-contact';
import TablePagination from './table-pagination/table-pagination';
import { CellHeader } from './cell-header/cell-header';
import { useAppSelector, TState } from '../../services/types/types';

import styles from './table.module.scss';

export const Table: React.FC = () => {
  const { contacts } = useAppSelector((state: TState) => state.app);
  const [sortList, setSortList] = useState(contacts);
  // rowsState - текущие строки на странице
  const [rowsState, setRowsState] = useState(contacts);
  // pageSize - кол-во строчек на странице
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setSortList(contacts);
    setRowsState(contacts);
  }, [contacts]);

  // в sortConfig храним имя фильтра и направление
  // TODO вынести setSortList из хука
  const { requestSort } = useSortableData(contacts, setSortList);

  // при клике вызывается сортировка и устанавливается новое значение списка
  const onClickButton = (nameCell: string) => {
    requestSort(nameCell);
  };

  // определение индексов строк для отображения на N (currentPage) странице
  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const newData = sortList.slice(firstPageIndex, lastPageIndex);

    setRowsState(newData);
  }, [currentPage, pageSize, sortList]);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <CellHeader
              onClickButton={onClickButton}
              isButtonNeed
              text="Client ID"
              name="id"
            />
            <CellHeader
              onClickButton={onClickButton}
              isButtonNeed
              text="Client name"
              name="name"
            />
            <CellHeader
              onClickButton={onClickButton}
              isButtonNeed
              text="TRN/PPSN"
              name="number"
            />
            <CellHeader
              onClickButton={onClickButton}
              isButtonNeed
              text="Year end"
              name="year"
            />
            <CellHeader
              onClickButton={onClickButton}
              isButtonNeed
              text="ARD"
              name="ard"
            />
            <CellHeader
              onClickButton={onClickButton}
              isButtonNeed
              text="Company number"
              name="companyId"
            />
            <CellHeader isButtonNeed={false} text="Email" />
            <CellHeader isButtonNeed={false} text="Phone number" />
            <CellHeader isButtonNeed={false} text="Company address" />
            <CellHeader isButtonNeed={false} text="Action" />
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
