import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';

import styles from './table-pagination.module.scss';

interface TTablePaginationInterface
  // TODO разобраться со строчкой extends Omit<
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  // TODO уточнить object
  totalCount: number;
  pageSize: number;
  onPageChange: (value: React.SetStateAction<number>) => void;
  currentPage: number;
}

const TablePagination: React.FC<TTablePaginationInterface> = ({
  totalCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  return (
    <ResponsivePagination
      total={Math.ceil(totalCount / pageSize)}
      current={currentPage}
      onPageChange={(page) => onPageChange(page)}
      className={styles.pagination}
      pageItemClassName={styles.pagination__item}
      pageLinkClassName={styles.pagination__link}
      activeItemClassName={styles['pagination__item--active']}
      disabledItemClassName={styles['pagination__item--disabled']}
      previousLabel=" "
      nextLabel=" "
      previousClassName={styles.pagination__nav}
      nextClassName={`${styles.pagination__nav} ${styles['pagination__nav--next']}`}
    />
  );
};

export default TablePagination;
