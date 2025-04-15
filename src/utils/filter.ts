import {Transaction} from '@/models';

export const filterTransactions = (
  transactions: Transaction[],
  searchTerm: string,
): Transaction[] => {
  if (!searchTerm) {
    return transactions;
  }

  const term = searchTerm.toLowerCase();

  return transactions.filter(item => {
    const match = [
      item.beneficiary_name.toLowerCase().includes(term),
      item.sender_bank.toLowerCase().includes(term),
      item.beneficiary_bank.toLowerCase().includes(term),
      item.amount.toString().includes(term),
    ];

    return match.some(Boolean);
  });
};
