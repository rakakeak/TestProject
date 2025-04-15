import {Transaction} from '@/models';

export const sortTransactions = (
  transactions: Transaction[],
  criteria: string,
): Transaction[] => {
  const [key, order] = criteria.split(':');

  return [...transactions].sort((a, b) => {
    if (key === 'beneficiary_name') {
      return order === 'asc'
        ? a.beneficiary_name.localeCompare(b.beneficiary_name)
        : b.beneficiary_name.localeCompare(a.beneficiary_name);
    }

    if (key === 'created_at') {
        const dateA = new Date(a.created_at.replace(' ', 'T')).getTime();
        const dateB = new Date(b.created_at.replace(' ', 'T')).getTime();
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    }

    return 0;
  });
};
