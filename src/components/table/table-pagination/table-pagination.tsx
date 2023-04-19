import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';

import { TTablePagination } from '../../../services/types/types';
import styles from './table-pagination.module.scss';

const TablePagination: React.FC<TTablePagination> = ({
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
