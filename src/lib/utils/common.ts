export const timestampToString = (timestamp: number | undefined) => {
  if (timestamp === undefined || timestamp === null || timestamp === 0) {
    return {
      DMY: 'N/A',
    };
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(timestamp * 1000);

  const fullYear = date.getFullYear();

  const month = date.getMonth() + 1;
  const monthName = monthNames[month - 1];
  const monthNameInShort = monthName.length > 3 ? `${monthName.slice(0, 3)}.` : monthName;

  const day = date.getDate();

  return {
    DMY: `${day} ${monthNameInShort} ${fullYear}`,
  };
};
