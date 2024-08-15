import React, { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
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

  // Info: (2020417 - Julian) 用於日期選取的樣式
  const selectedCircleStyle =
    'before:absolute before:top-0 before:-z-10 before:w-30px before:h-30px before:rounded-full before:bg-date-picker-surface-date-selected';

  // Info: (20240417 - Julian) 顯示星期標題
  const weekNameList = WEEK_DAY_NAME_LIST.map((week) => (
    <p className="mx-auto h-35px w-35px text-primaryYellow" key={week}>
      {t(week)}
    </p>
  ));

  // Info: (2020417 - Julian) 將時間戳記還原為當天日期且時間設置為 00:00:00 的時間戳記
  const resetTimestampToMidnight = (timestamp: number) => {
    const date = new Date(timestamp);
    date.setHours(0, 0, 0);
    return date.getTime();
  };

  // Info: (20240417 - Julian) 顯示月份中的每一天
  const formatDaysInMonth = daysInMonth.map((el: Dates) => {
    const date = el ? new Date(`${selectedYear}/${selectedMonth}/${el.date} 00:00:00`) : null;

    // Info: (20240417 - Julian) 因為 selectTimeTwo 是 23:59:59，所以還原時間設置為 00:00:00
    const selectTimeTwoReset = resetTimestampToMidnight(selectTimeTwo);

    // Info: (20240417 - Julian) 已選擇區間的樣式
    const isSelectedPeriodStyle =
      selectTimeOne &&
      selectTimeTwoReset &&
      date?.getTime() &&
      date?.getTime() >= selectTimeOne &&
      date?.getTime() <= selectTimeTwoReset &&
      selectTimeOne !== selectTimeTwoReset
        ? 'bg-date-picker-surface-date-period'
        : '';

    // Info: (20240417 - Julian) DateOne 和 DateTwo 的樣式
    const isSelectedDateStyle = date?.getTime()
      ? !selectTimeTwoReset && date.getTime() === selectTimeOne
        ? // ToDo: (20240814 - Julian) 樣式怪怪的，要再調整
          'rounded-full before:left-0 before:right-0 before:rounded-full before:bg-date-picker-surface-date-selected'
        : selectTimeOne && selectTimeTwoReset
          ? date.getTime() === selectTimeOne && date.getTime() === selectTimeTwoReset
            ? // ToDo: (20240814 - Julian) 樣式怪怪的，要再調整
              'rounded-full before:left-0 before:right-0 before:rounded-full before:bg-date-picker-surface-date-selected'
            : date.getTime() === selectTimeOne
              ? `rounded-l-full before:left-0 ${selectedCircleStyle}`
              : date.getTime() === selectTimeTwoReset
                ? `rounded-r-full before:right-0 ${selectedCircleStyle}`
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
        key={`${el?.date}`}
        type="button"
        disabled={isDisable}
        className={`relative z-10 h-30px w-full whitespace-nowrap text-base disabled:text-date-picker-text-disable ${isDisable ? '' : 'hover:bg-date-picker-surface-input-selected'} ${isSelectedPeriodStyle} ${isSelectedDateStyle}`}
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

  const isDateSelected = dateOne && dateTwo && dateOne.getTime() !== 0 && dateTwo.getTime() !== 0;

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
      id="date_picker_button"
      type="button"
      onClick={openCalendarHandler}
      className={`flex w-300px items-center justify-between rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base ${isDateSelected ? 'text-date-picker-surface-date-selected' : 'text-date-picker-text-default'} `}
    >
      <p>{displayedText}</p>
      <Image src="/icons/calendar.svg" alt="calendar_icon" width={20} height={20} />
    </button>
  );

  return (
    <div className="relative flex flex-col">
      {displayedButtonContent}
      {/* Info: (20240814 - Julian) Calender part */}
      <div
        ref={targetRef}
        className={`absolute left-0 top-50px flex flex-col gap-12px rounded-md bg-date-picker-surface-calendar-background px-32px py-24px shadow-downDropShadowM ${componentVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out`}
      >
        {/* Info: Info: (20240814 - Julian) Today button */}
        <button
          type="button"
          onClick={todayClickHandler}
          className="w-full rounded border border-secondaryBlue p-1 text-sm text-secondaryBlue hover:border-primaryYellow hover:text-primaryYellow"
        >
          {t('DATE_PICKER.TODAY')}
        </button>

        <div className="flex w-full items-center justify-between">
          {/* Info: Previous button (20240417 - Julian) */}
          <button
            type="button"
            onClick={goToPrevMonth}
            className="rounded border border-secondaryBlue p-2 text-secondaryBlue hover:border-primaryYellow hover:text-primaryYellow"
          >
            <Image src="/icons/chevron_left.svg" height={16} width={16} alt="go_previous_button" />
          </button>
          {/* Info: (20240417 - Julian) Month and Year */}
          <div className="flex space-x-4">
            <p className="text-secondaryBlue">{displayedYear}</p>
            <p className="text-secondaryBlue">{displayedMonth}</p>
          </div>

          {/* Info: Next button (20240417 - Julian) */}
          <button
            type="button"
            onClick={goToNextMonth}
            className="rounded border border-secondaryBlue p-2 text-secondaryBlue hover:border-primaryYellow hover:text-primaryYellow"
          >
            <Image src="/icons/chevron_right.svg" height={16} width={16} alt="go_next_button" />
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
