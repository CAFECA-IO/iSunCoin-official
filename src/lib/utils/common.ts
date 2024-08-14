import { MILLISECONDS_IN_A_SECOND } from '@/constants/config';
import { MONTH_ABBREVIATION_NAME_LIST, MONTH_FULL_NAME_LIST } from '@/constants/display';

export const timestampToString = (timestamp: number | undefined) => {
  if (timestamp === undefined || timestamp === null || timestamp <= 0) {
    return {
      date: 'N/A',
      monthAbrName: 'N/A',
      monthFullName: 'N/A',
      year: '-',
      month: '-',
      day: '-',
    };
  }

  const date = new Date(timestamp * MILLISECONDS_IN_A_SECOND);

  const fullYear = date.getFullYear();

  const month = date.getMonth() + 1;
  const monthName = MONTH_FULL_NAME_LIST[month - 1]; // Info:(20240814 - Julian) e.g. August / 八月
  const monthNameInShort = MONTH_ABBREVIATION_NAME_LIST[month - 1]; // Info:(20240814 - Julian) e.g. Aug / 八月
  const monthStr = month < 10 ? `0${month}` : `${month}`; // Info:(20240814 - Julian) e.g. 08

  const day = date.getDate();
  const dayStr = day < 10 ? `0${day}` : `${day}`; // Info:(20240814 - Julian)

  return {
    date: `${fullYear}-${monthStr}-${dayStr}`,
    monthAbrName: `${monthNameInShort}`,
    monthFullName: `${monthName}`,
    year: `${fullYear}`,
    month: `${monthStr}`,
    day: `${dayStr}`,
  };
};
