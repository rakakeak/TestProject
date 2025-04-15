import {useCallback, useState, useRef} from 'react';
import api from '../config/api';
import {Transaction} from '@/models';

type UseTransactionDataProps = {
  onSuccess: (data: Transaction[]) => void;
  onFail?: (error: unknown) => void;
};

export const useTransactionData = ({
  onSuccess,
  onFail,
}: UseTransactionDataProps) => {
  const [loading, setLoading] = useState(false);
  const cachedData = useRef<Transaction[] | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(
        'https://recruitment-test.flip.id/frontend-test',
      );
      const newData: Transaction[] = res.data;
      if (JSON.stringify(cachedData.current) === JSON.stringify(newData)) {
        console.log('⏩ No changes. Skip update');
        setLoading(false);
        return;
      }

      cachedData.current = newData;
      onSuccess(newData);
    } catch (err) {
      onFail?.(err);
    } finally {
      setLoading(false);
    }
  }, [onSuccess, onFail]);

  return {fetchData, loading};
};
