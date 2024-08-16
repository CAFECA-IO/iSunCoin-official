import React, { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'next-i18next';
import useOuterClick from '@/lib/hooks/use_outer_click';
import { MONTH_ABBREVIATION_NAME_LIST, WEEK_DAY_NAME_LIST } from '@/constants/display';
import { timestampToString } from '@/lib/utils/common';
import { IDatePeriod, defaultDatePeriod } from '@/interfaces/date_period';
import { MILLISECONDS_IN_A_SECOND, SECONDS_TO_TOMORROW } from '@/constants/config';

export enum DatePickerType {
  DATE = 'DATE',
  PERIOD = 'PERIOD',
}

type Dates = {
  date: number;
  time: number;
  disable: boolean;
};
interface IPopulateDatesParams {
  type: DatePickerType;
  daysInMonth: Dates[];
  selectedYear: number;
  selectedMonth: number;
  selectTimeOne: number;
  selectDateOne: (date: Dates | null) => void;
  selectTimeTwo: number;
  selectDateTwo: (date: Dates | null) => void;
  setComponentVisible: Dispatch<SetStateAction<boolean>>;
}

interface IDatePickerProps {
  type: DatePickerType;
  period: IDatePeriod;
  setPeriod: Dispatch<SetStateAction<IDatePeriod>>;
  minDate?: Date;
  maxDate?: Date;
  onClose?: () => void; // Info: (20240509 - Julian) 關閉日期選擇器時的 callback
  datePickerHandler?: (start: number, end: number) => Promise<void>;
}

const PopulateDates = ({
  type,
  daysInMonth,
  selectedYear,
  selectedMonth,
  selectTimeOne,
  selectDateOne,
  selectTimeTwo,
  selectDateTwo,
  setComponentVisible,
}: IPopulateDatesParams) => {
  const { t } = useTranslation('common');

  // Info: (20240815 - Julian) 選取日期的橘色圓圈
  const selectedCircleStyle =
    'before:absolute before:top-0 before:-z-10 before:w-full before:h-30px before:rounded-full before:bg-date-picker-surface-date-selected';

  // Info: (20240815 - Julian) 顯示星期標題
  const weekNameList = WEEK_DAY_NAME_LIST.map((week) => (
    <p className="mx-auto h-35px w-35px text-primaryYellow" key={week}>
      {t(week)}
    </p>
  ));

  // Info: (20240815 - Julian) 將時間戳記還原為當天日期且時間設置為 00:00:00 的時間戳記
  const resetTimestampToMidnight = (timestamp: number) => {
    const date = new Date(timestamp);
    date.setHours(0, 0, 0);
    return date.getTime();
  };

  // Info: (20240815 - Julian) 顯示月份中的每一天
  const formatDaysInMonth = daysInMonth.map((el: Dates) => {
    const date = el ? new Date(`${selectedYear}/${selectedMonth}/${el.date} 00:00:00`) : null;

    const uniqueKey = el?.date || Math.random().toString(36).substring(7); // Info: (20240417 - Julian) 如果日期不存在，則用亂數產生 key

    // Info: (20240815 - Julian) 因為 selectTimeTwo 是 23:59:59，所以還原時間設置為 00:00:00
    const selectTimeTwoReset = resetTimestampToMidnight(selectTimeTwo);

    // Info: (20240815 - Julian) 已選擇區間的樣式
    const isSelectedPeriodStyle =
      selectTimeOne &&
      selectTimeTwoReset &&
      date?.getTime() &&
      date?.getTime() >= selectTimeOne &&
      date?.getTime() <= selectTimeTwoReset &&
      selectTimeOne !== selectTimeTwoReset
        ? 'bg-date-picker-surface-date-period'
        : '';

    // Info: (20240417 - Julian) 日期樣式
    const isSelectedDateStyle = date?.getTime()
      ? // Info: (20240417 - Julian) 區間日期的樣式 -> 淺色背景填滿
        !selectTimeTwoReset && date.getTime() === selectTimeOne
        ? 'rounded-full before:rounded-full before:bg-date-picker-surface-date-selected'
        : selectTimeOne && selectTimeTwoReset
          ? // Info: (20240814 - Julian) 日期一和日期二相同 -> 橘色圓圈
            date.getTime() === selectTimeOne && date.getTime() === selectTimeTwoReset
            ? 'rounded-full bg-date-picker-surface-date-selected'
            : // Info: (20240815 - Julian) 日期一的樣式 -> 橘色圓圈 + 圓角左邊的淺色背景
              date.getTime() === selectTimeOne
              ? `rounded-l-full ${selectedCircleStyle}`
              : // Info: (20240815 - Julian) 日期二的樣式 -> 橘色圓圈 + 圓角右邊的淺色背景
                date.getTime() === selectTimeTwoReset
                ? `rounded-r-full ${selectedCircleStyle}`
                : ''
          : ''
      : '';

    // Info: (20240417 - Julian) 只有可選擇的日期才能點擊
    const dateClickHandler = () => {
      if (el?.date && !el?.disable) {
        // Info: (20240417 - Julian) elTemp 是點擊的日期
        const elTime = new Date(`${selectedYear}/${selectedMonth}/${el.date} 00:00:00`).getTime();
        // Info: (20240605 - Julian) If DatePickerType is allowed for single date, select the date and close the component
        if (type === DatePickerType.DATE) {
          selectDateOne({ date: el.date, time: elTime, disable: el.disable });
          selectDateTwo({ date: el.date, time: elTime, disable: el.disable });
          setComponentVisible(false);
          return;
        }

        if (selectTimeOne !== 0 && selectTimeTwo !== 0) {
          // Info: (20240417 - Julian) 如果有已選擇的日期區間，則先清除
          selectDateOne(null);
          selectDateTwo(null);
        }
        if (selectTimeOne === 0) {
          // Info: (20240417 - Julian) 如果第一個日期尚未選擇，則將 el 填入第一個日期
          selectDateOne(el);
        } else if (selectTimeTwo === 0) {
          // Info: (20240417 - Julian) 如果第二個日期尚未選擇，則將 el 填入第二個日期
          if (selectTimeOne > elTime) {
            // Info: (20240417 - Julian) 檢查 TimeOne 是否大於 TimeTwo，如果是則交換
            const temp = new Date(selectTimeOne);
            selectDateOne(el);
            selectDateTwo({
              date: temp.getDate(),
              time: new Date(
                // Info: (20240417 - Julian) 這裡的月份要加 1，因為 new Date() 的月份是 0 ~ 11
                `${temp.getFullYear()}/${temp.getMonth() + 1}/${temp.getDate()}`
              ).getTime(),
              disable: true,
            });
          } else {
            // Info: (20240417 - Julian) 如果 TimeOne 小於 TimeTwo，則直接填入
            selectDateTwo(el);
          }
          setComponentVisible(false);
        }
      }
    };

    const isDisable = el?.disable || !el?.date; // Info: (20240417 - Julian) 如果日期不存在或是禁用的日期，則不能點擊

    return (
      <button
        key={uniqueKey}
        type="button"
        disabled={isDisable}
        className={`relative z-10 flex h-30px w-full items-center justify-center whitespace-nowrap text-base disabled:text-date-picker-text-disable ${isDisable ? '' : 'hover:bg-date-picker-surface-input-selected'} ${isSelectedPeriodStyle} ${isSelectedDateStyle}`}
        onClick={dateClickHandler}
      >
        {el?.date ?? ' '}
      </button>
    );
  });

  return (
    <div className="grid grid-cols-7 gap-y-2 text-center text-base">
      {weekNameList}
      {formatDaysInMonth}
    </div>
  );
};

const DatePicker = ({
  type,
  period,
  setPeriod,
  minDate,
  maxDate,
  onClose,
  datePickerHandler,
}: IDatePickerProps) => {
  const { t } = useTranslation('common');
  const { targetRef, componentVisible, setComponentVisible } = useOuterClick<HTMLDivElement>(false);

  const today = new Date();
  const minTime = minDate ? minDate.getTime() : 0;
  const maxTime = maxDate ? maxDate.getTime() : new Date().getTime();

  const [dateOne, setDateOne] = useState<Date | null>(
    new Date(period.startTimeStamp * MILLISECONDS_IN_A_SECOND)
  );
  const [dateTwo, setDateTwo] = useState<Date | null>(
    new Date(period.endTimeStamp * MILLISECONDS_IN_A_SECOND)
  );

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1); // Info: (20240814 - Julian) 0 (January) to 11 (December).
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  useEffect(() => {
    // Info: (20240417 - Julian) 如果已取得兩個日期，則將日期區間傳回父層
    // Info: (20240417 - Julian) 如果兩個日期相同，則將日期區間設為當天 00:00:00 ~ 23:59:59
    let dateOneStamp = 0;
    let dateTwoStamp = 0;

    // Info: (20240417 - Julian) 如果是日期區間，則將日期轉換為時間戳記
    if (type === DatePickerType.PERIOD) {
      dateOneStamp = dateOne ? dateOne.getTime() / MILLISECONDS_IN_A_SECOND : 0;
      dateTwoStamp = dateTwo ? dateTwo.getTime() / MILLISECONDS_IN_A_SECOND : 0;
    } else {
      dateOneStamp = dateOne ? dateOne.getTime() / MILLISECONDS_IN_A_SECOND : 0;
      dateTwoStamp = dateOne ? dateOne.getTime() / MILLISECONDS_IN_A_SECOND : 0;
    }

    if (dateOneStamp && dateTwoStamp) {
      const isSameDate = dateOneStamp === dateTwoStamp;
      setPeriod({
        startTimeStamp: dateOneStamp,
        endTimeStamp: isSameDate ? dateTwoStamp + SECONDS_TO_TOMORROW : dateTwoStamp,
      });

      if (datePickerHandler) {
        datePickerHandler(
          dateOneStamp,
          isSameDate ? dateTwoStamp + SECONDS_TO_TOMORROW : dateTwoStamp
        );
      }
      // Info: 都選好日期之後執行 onClose callback (20240509 - Julian)
      if (onClose) {
        onClose();
      }
    } else if (dateOneStamp === 0 && dateTwoStamp === 0) {
      setPeriod(defaultDatePeriod);
      if (onClose) {
        onClose();
      }
      if (datePickerHandler) {
        datePickerHandler(0, 0);
      }
    } else {
      setPeriod(defaultDatePeriod);
    }
  }, [dateOne, dateTwo]);

  // Info: (20240814 - Julian) 取得該月份第一天是星期幾
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(`${year}/${month}/01`).getDay();
  };

  // Info: (20240814 - Julian) 取得該月份的全部日期
  const daysInMonth = (year: number, month: number) => {
    const day = firstDayOfMonth(year, month);
    const dateLength = new Date(year, month, 0).getDate();

    let dates: Dates[] = [];

    for (let i = 0; i < dateLength; i += 1) {
      const dateTime = new Date(`${year}/${month}/${i + 1}`).getTime(); // MILLISECONDS_IN_A_SECOND;
      const date: Dates = {
        date: i + 1,
        time: dateTime,
        disable: dateTime < minTime || dateTime > maxTime, // Info: (20240814 - Julian) 禁用小於最小日期或大於最大日期的日期
      };
      dates.push(date);
    }
    dates = Array(...Array(day)).concat(dates);
    return dates;
  };

  const goToNextMonth = useCallback(() => {
    let month = selectedMonth;
    let year = selectedYear;
    month += 1;
    // Info: (20240814 - Julian) 過了 12 月就到下一年，月份設為 1
    if (month > 12) {
      month = 1;
      year += 1;
    }
    setSelectedMonth(month);
    setSelectedYear(year);
  }, [selectedMonth, selectedYear]);

  const goToPrevMonth = useCallback(() => {
    let month = selectedMonth;
    let year = selectedYear;
    month -= 1;
    // Info: (20240814 - Julian) 1 月往前一個月就到上一年，月份設為 12
    if (month < 1) {
      month = 12;
      year -= 1;
    }
    setSelectedMonth(month);
    setSelectedYear(year);
  }, [selectedMonth, selectedYear]);

  const selectDateOne = useCallback((el: Dates | null) => {
    if (!el) {
      setDateOne(null);
      return;
    }
    const newDate = new Date(el.time);
    // Info: (20240417 - Julian) 設定時間為當天的開始（00:00:00）
    newDate.setHours(0, 0, 0);
    setDateOne(newDate);
  }, []);

  const selectDateTwo = useCallback((el: Dates | null) => {
    if (!el) {
      setDateTwo(null);
      return;
    }
    const newDate = new Date(el.time);
    // Info: (20240417 - Julian) 設定時間為當天的最後一秒（23:59:59）
    newDate.setHours(23, 59, 59);
    setDateTwo(newDate);
  }, []);

  // Info: (20240814 - Julian) 選單展開/收合
  const openCalendarHandler = () => setComponentVisible(!componentVisible);
  // Info: (20240814 - Julian) 選擇今天
  const todayClickHandler = () => {
    const dateOfToday = new Date(
      `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()} 00:00:00`
    );

    // Info: (20240417 - Julian) 選擇區間改成今天
    setDateOne(dateOfToday);
    setDateTwo(dateOfToday);
    setSelectedMonth(today.getMonth() + 1);
    setSelectedYear(today.getFullYear());
    setComponentVisible(false);
  };

  const defaultText =
    type === DatePickerType.DATE ? t('DATE_PICKER.SELECT_DATE') : t('DATE_PICKER.SELECT_PERIOD');

  // Info: (20240814 - Julian) 顯示時間區間
  const displayedText =
    period.startTimeStamp !== 0 && period.endTimeStamp !== 0 // Info: (20240510 - Julian) edited
      ? type === DatePickerType.DATE
        ? `${timestampToString(period.startTimeStamp).date}`
        : `${timestampToString(period.startTimeStamp).date} ${t(
            'DATE_PICKER.TO'
          )} ${timestampToString(period.endTimeStamp).date}`
      : defaultText;

  // Info: (20240814 - Julian) 顯示月份和年份
  const displayedYear = `${selectedYear}`;
  const displayedMonth = `${t(MONTH_ABBREVIATION_NAME_LIST[selectedMonth - 1])}`;

  const displayedButtonContent = (
    <button
      id="date-picker-button"
      type="button"
      onClick={openCalendarHandler}
      className={`flex w-300px items-center justify-between rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base text-date-picker-text-default`}
    >
      <p>{displayedText}</p>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="wrapper">
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66911 0.917763C7.08332 0.917763 7.41911 1.25355 7.41911 1.66776V2.58443H12.5858V1.66776C12.5858 1.25355 12.9216 0.917763 13.3358 0.917763C13.75 0.917763 14.0858 1.25355 14.0858 1.66776V2.5853C14.516 2.58745 14.8869 2.59495 15.2055 2.62098C15.6688 2.65883 16.0872 2.73957 16.4779 2.93866C17.0894 3.25025 17.5866 3.74743 17.8982 4.35896C18.0973 4.7497 18.178 5.1681 18.2159 5.63136C18.2525 6.07893 18.2525 6.62965 18.2524 7.30304V7.33443V8.33443V14.3344V14.3658C18.2525 15.0392 18.2525 15.5899 18.2159 16.0375C18.178 16.5008 18.0973 16.9192 17.8982 17.3099C17.5866 17.9214 17.0894 18.4186 16.4779 18.7302C16.0872 18.9293 15.6688 19.01 15.2055 19.0479C14.7579 19.0844 14.2072 19.0844 13.5339 19.0844H13.5024H6.50244H6.47101C5.79764 19.0844 5.24693 19.0844 4.79937 19.0479C4.33611 19.01 3.91771 18.9293 3.52697 18.7302C2.91545 18.4186 2.41826 17.9214 2.10667 17.3099C1.90758 16.9192 1.82684 16.5008 1.78899 16.0375C1.75243 15.5899 1.75243 15.0392 1.75244 14.3658L1.75244 14.3344V8.33443V7.33443L1.75244 7.30301C1.75243 6.62963 1.75243 6.07892 1.78899 5.63136C1.82684 5.1681 1.90758 4.7497 2.10667 4.35896C2.41826 3.74743 2.91545 3.25025 3.52697 2.93866C3.91771 2.73957 4.33611 2.65883 4.79937 2.62098C5.118 2.59495 5.48889 2.58745 5.91911 2.5853V1.66776C5.91911 1.25355 6.2549 0.917763 6.66911 0.917763ZM5.91911 4.08539C5.5067 4.08751 5.18714 4.0943 4.92152 4.116C4.55102 4.14627 4.352 4.20178 4.20796 4.27517C3.87867 4.44295 3.61096 4.71066 3.44318 5.03995C3.36979 5.18398 3.31428 5.38301 3.28401 5.75351C3.25303 6.13276 3.25244 6.62199 3.25244 7.33443V7.58443H16.7524V7.33443C16.7524 6.62199 16.7519 6.13276 16.7209 5.75351C16.6906 5.38301 16.6351 5.18398 16.5617 5.03995C16.3939 4.71066 16.1262 4.44295 15.7969 4.27517C15.6529 4.20178 15.4539 4.14627 15.0834 4.116C14.8177 4.0943 14.4982 4.08751 14.0858 4.08539V5.0011C14.0858 5.41531 13.75 5.7511 13.3358 5.7511C12.9216 5.7511 12.5858 5.41531 12.5858 5.0011V4.08443H7.41911V5.0011C7.41911 5.41531 7.08332 5.7511 6.66911 5.7511C6.2549 5.7511 5.91911 5.41531 5.91911 5.0011V4.08539ZM16.7524 9.08443H3.25244V14.3344C3.25244 15.0469 3.25303 15.5361 3.28401 15.9154C3.31428 16.2859 3.36979 16.4849 3.44318 16.6289C3.61096 16.9582 3.87868 17.2259 4.20796 17.3937C4.352 17.4671 4.55102 17.5226 4.92152 17.5529C5.30078 17.5838 5.79 17.5844 6.50244 17.5844H13.5024C14.2149 17.5844 14.7041 17.5838 15.0834 17.5529C15.4539 17.5226 15.6529 17.4671 15.7969 17.3937C16.1262 17.2259 16.3939 16.9582 16.5617 16.6289C16.6351 16.4849 16.6906 16.2859 16.7209 15.9154C16.7519 15.5361 16.7524 15.0469 16.7524 14.3344V9.08443Z"
          />
        </g>
      </svg>
    </button>
  );

  return (
    <div className="relative flex flex-col">
      {displayedButtonContent}
      {/* Info: (20240814 - Julian) Calender part */}
      <div
        ref={targetRef}
        className={`absolute left-0 top-50px flex flex-col gap-12px rounded-md bg-date-picker-surface-calendar-background px-32px py-24px shadow-downDropShadowM ${componentVisible ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-300 ease-in-out`}
      >
        {/* Info: Info: (20240814 - Julian) Today button */}
        <button
          type="button"
          onClick={todayClickHandler}
          className="w-full rounded border border-secondaryBlue p-1 text-sm text-text-brand-secondary-lv1 hover:border-primaryYellow hover:text-primaryYellow"
        >
          {t('DATE_PICKER.TODAY')}
        </button>

        <div className="flex w-full items-center justify-between">
          {/* Info: Previous button (20240417 - Julian) */}
          <button
            type="button"
            onClick={goToPrevMonth}
            className="rounded border border-secondaryBlue p-2 text-text-brand-secondary-lv1 hover:border-primaryYellow hover:text-primaryYellow"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="wrapper">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4779 3.71319C13.844 4.0793 13.844 4.67289 13.4779 5.03901L8.51577 10.0011L13.4779 14.9632C13.844 15.3293 13.844 15.9229 13.4779 16.289C13.1117 16.6551 12.5181 16.6551 12.152 16.289L6.52703 10.664C6.16091 10.2979 6.16091 9.7043 6.52703 9.33819L12.152 3.71319C12.5181 3.34707 13.1117 3.34707 13.4779 3.71319Z"
                />
              </g>
            </svg>
          </button>
          {/* Info: (20240417 - Julian) Month and Year */}
          <div className="flex space-x-4">
            <p className="text-text-brand-secondary-lv1">{displayedYear}</p>
            <p className="text-text-brand-secondary-lv1">{displayedMonth}</p>
          </div>

          {/* Info: Next button (20240417 - Julian) */}
          <button
            type="button"
            onClick={goToNextMonth}
            className="rounded border border-secondaryBlue p-2 text-text-brand-secondary-lv1 hover:border-primaryYellow hover:text-primaryYellow"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="wrapper">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.52703 3.71319C6.89315 3.34707 7.48674 3.34707 7.85285 3.71319L13.4779 9.33819C13.844 9.7043 13.844 10.2979 13.4779 10.664L7.85285 16.289C7.48674 16.6551 6.89315 16.6551 6.52703 16.289C6.16091 15.9229 6.16091 15.3293 6.52703 14.9632L11.4891 10.0011L6.52703 5.03901C6.16091 4.67289 6.16091 4.0793 6.52703 3.71319Z"
                />
              </g>
            </svg>
          </button>
        </div>
        <PopulateDates
          type={type}
          daysInMonth={daysInMonth(selectedYear, selectedMonth)}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectTimeOne={dateOne?.getTime() ?? 0}
          selectDateOne={selectDateOne}
          selectTimeTwo={dateTwo?.getTime() ?? 0}
          selectDateTwo={selectDateTwo}
          setComponentVisible={setComponentVisible}
        />
      </div>
    </div>
  );
};

export default DatePicker;
