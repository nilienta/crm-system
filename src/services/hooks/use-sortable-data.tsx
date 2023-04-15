/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useMemo } from 'react';

export const useSortableData = (
  items: any,
  setSortList: {
    (
      value: React.SetStateAction<
        {
          id: number;
          name: string;
          number: number;
          year: string;
          ard: string;
          companyId: number;
          email: string;
          phoneNumber: number;
          companyAddress: string;
        }[]
      >
    ): void;
    (arg0: any[]): void;
  }
) => {
  const [sortConfig, setSortConfig] = React.useState(null);
  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      // TODO создавать новый массив
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setSortList(sortableItems);
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }

    setSortConfig({ key, direction });
  };

  return { sortedItems, requestSort, sortConfig };
};
