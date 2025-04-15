import {Transaction} from '@/models';

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: {
    transaction: Transaction;
  };
};
