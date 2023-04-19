import React, { useMemo, useState } from 'react';

import { TContacts, TConfig, TContact } from '../types/types';

export const useSortableData = (
  items: TContacts,
  setSortList: React.Dispatch<React.SetStateAction<TContacts>>
) => {
  const [sortConfig, setSortConfig] = useState<TConfig>(null);

  const getSortedItems = useMemo(() => {
    const sortableItems: TContact[] = [...items];
    if (sortConfig !== null) {
      const isAscending: boolean = sortConfig.direction === 'ascending';
      sortableItems.sort((a, b) => {
        const currentValue = a[sortConfig.key as keyof TContact];
        const nextValue = b[sortConfig.key as keyof TContact];
        if (currentValue < nextValue) {
          return isAscending ? -1 : 1;
        }
        if (currentValue > nextValue) {
          return isAscending ? 1 : -1;
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

  return { getSortedItems, requestSort, sortConfig };
};
