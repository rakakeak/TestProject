import {Transaction} from '@/models';
import {filterTransactions} from '@/utils/filter';
import {sortTransactions} from '@/utils/sort';
import {useMemo} from 'react';

export const useFilteredTransactions = (
  transactions: Transaction[],
  searchTerm: string,
  label: string,
): Transaction[] => {
  const stableSearch = useMemo(() => searchTerm.toLowerCase(), [searchTerm]);

  // Mapping label ke key dan order
  const sortCriteriaMap: Record<string, string> = {
    'Nama A-Z': 'beneficiary_name:asc',
    'Nama Z-A': 'beneficiary_name:desc',
    'Tanggal Terbaru': 'created_at:desc',
    'Tanggal Terlama': 'created_at:asc',
  };

  return useMemo(() => {
    const filteredData = filterTransactions(transactions, stableSearch);
    const sortKey = sortCriteriaMap[label];
    return sortKey ? sortTransactions(filteredData, sortKey) : filteredData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions, stableSearch, label]);
};
