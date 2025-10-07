import { useMemo } from 'react';

interface FormattedDate {
  year: number;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
}

export const useFormattedDate = (date: Date | string): FormattedDate => {
  const formattedDate = useMemo(() => {
    const defaultDate = {
      year: 0,
      month: '00',
      day: '00',
      hour: '00',
      minute: '00',
      second: '00',
    };

    if (!date) {
      return defaultDate;
    }

    try {
      const dateObj = new Date(date);

      if (isNaN(dateObj.getTime())) {
        return defaultDate;
      }

      const year = dateObj.getUTCFullYear();
      const monthNum = dateObj.getUTCMonth() + 1;
      const dayNum = dateObj.getUTCDate();
      const hourNum = dateObj.getUTCHours();
      const minuteNum = dateObj.getUTCMinutes();
      const secondNum = dateObj.getUTCSeconds();

      const month = String(monthNum).padStart(2, '0');
      const day = String(dayNum).padStart(2, '0');
      const hour = String(hourNum).padStart(2, '0');
      const minute = String(minuteNum).padStart(2, '0');
      const second = String(secondNum).padStart(2, '0');

      return { year, month, day, hour, minute, second };
    } catch (error) {
      console.error('Error parsing date:', error);
      return defaultDate;
    }
  }, [date]);

  return formattedDate;
};
