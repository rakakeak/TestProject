import {Transaction} from '@/models';
import {create} from 'zustand';

type TransactionStore = {
  dataTransaction: Transaction[];
  label: string;
  setDataTransaction: (data: Transaction[]) => void;
  setLabel: (label: string) => void;
};

export const useTransactionStore = create<TransactionStore>(set => ({
  dataTransaction: [],
  label: 'URUTKAN',
  setDataTransaction: data => set({dataTransaction: data}),
  setLabel: label => set({label}),
}));
