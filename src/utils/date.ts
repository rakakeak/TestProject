import {Platform} from 'react-native';
import {MONTH_NAMES} from './constants';

const converDate = (timeDate: string): string => {
  const dateObj = new Date(timeDate.split(' ')[0]);

  if (Platform.OS === 'ios') {
    return dateObj.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  const date = dateObj.getDate();
  const month = MONTH_NAMES[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${date} ${month} ${year}`;
};

export default converDate;
