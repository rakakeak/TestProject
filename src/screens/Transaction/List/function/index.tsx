import {useState, useEffect, useCallback} from 'react';
import {useTransactionStore} from '@/stores/useTransactionStore';
import {useTransactionData} from '@/hooks/useTransactionData';
import {useFilteredTransactions} from '@/hooks/useFilteredTransactions';
import {useDebounce} from '@/hooks/useDebounce';
import {Alert} from 'react-native';

export const useTransactionList = (closeModal: () => void) => {
  const [textSearch, setTextSearch] = useState<string>('');
  const debouncedSearch = useDebounce(textSearch, 300);
  const {dataTransaction, setDataTransaction, label, setLabel} =
    useTransactionStore();
  const {fetchData, loading} = useTransactionData({
    onSuccess: newData => {
      setDataTransaction(Object.values(newData));
    },
    onFail: err => {
      Alert.alert('Ups, error!');
      console.error(err);
    },
  });

  const filteredData = useFilteredTransactions(
    dataTransaction,
    debouncedSearch,
    label,
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeText = useCallback((text: string) => setTextSearch(text), []);

  const handleRadio = useCallback(
    ({item}: {item: {title: string}}) => {
      setLabel(item.title);
      closeModal();
    },
    [closeModal, setLabel],
  );

  return {
    filteredData,
    loading,
    textSearch,
    setTextSearch,
    onChangeText,
    label,
    handleRadio,
  };
};
