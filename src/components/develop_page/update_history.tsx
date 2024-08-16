import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { IHistory } from '@/interfaces/history';
import UpdateHistoryItem from '@/components/develop_page/update_history_item';
import Pagination from '@/components/common/pagination';
import DatePicker, { DatePickerType } from '@/components/common/date_picker';
import { ITEMS_PER_PAGE } from '@/constants/config';
import { IDatePeriod, defaultDatePeriod } from '@/interfaces/date_period';
import { ISUNCOIN_API_V1 } from '@/constants/url';

const UpdateHistory = () => {
  const { t } = useTranslation('common');

  const [searchInput, setSearchInput] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<IDatePeriod>(defaultDatePeriod);
  const [historyList, setHistoryList] = useState<IHistory[]>([]);
  const [filteredHistoryList, setFilteredHistoryList] = useState<IHistory[]>([]);

  useEffect(() => {
    fetch(ISUNCOIN_API_V1.HISTORY)
      .then((response) => response.json())
      .then((data) => setHistoryList(data));
  }, []);

  const totalPages = 2; // ToDo: (20240814 - Julian) Get total pages from API

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredList = historyList
      .filter((history) => {
        return (
          // Info: (20240814 - Julian) 搜尋內容
          history.content.toLowerCase().includes(searchInput.toLowerCase()) ||
          // Info: (20240814 - Julian) 搜尋期數
          history.phase.toLowerCase().includes(searchInput.toLowerCase()) ||
          // Info: (20240814 - Julian) 搜尋版本
          history.version.toLowerCase().includes(searchInput.toLowerCase())
        );
      })
      .filter((history) => {
        // Info: (20240814 - Julian) 搜尋日期
        if (selectedPeriod.startTimeStamp === 0 && selectedPeriod.endTimeStamp === 0) {
          return true;
        } else {
          return (
            history.updateTimestamp >= selectedPeriod.startTimeStamp &&
            history.updateTimestamp <= selectedPeriod.endTimeStamp
          );
        }
      });
    setFilteredHistoryList(filteredList);
  }, [searchInput, selectedPeriod, historyList]);

  const updateHistoryList =
    filteredHistoryList && filteredHistoryList.length > 0 ? (
      filteredHistoryList
        // Info: (20240814 - Julian) 根據更新時間排序
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        // Info: (20240814 - Julian) 分頁
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        .map((history) => <UpdateHistoryItem key={history.id} history={history} />)
    ) : (
      <div className="flex w-full flex-col items-center p-40px text-xl font-semibold text-card-text-tertiary">
        <Image src="/elements/empty.svg" alt="Empty" width={80} height={90} />
        <p>{t('COMMON.EMPTY')}</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-60px px-80px py-40px">
      <h2 className="text-44px font-bold text-text-neutral-primary">
        {t('DEVELOP_PAGE.UPDATE_HISTORY')}
      </h2>
      <div className="flex w-full flex-col items-center gap-60px">
        {/* Info:(20240814 - Julian) Filter */}
        <div className="flex w-full items-center justify-between gap-100px">
          {/* Info:(20240814 - Julian) Date Picker */}
          <DatePicker
            type={DatePickerType.PERIOD}
            period={selectedPeriod}
            setPeriod={setSelectedPeriod}
          />
          {/* Info:(20240814 - Julian) Search bar */}
          <div className="flex flex-1 items-center rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base">
            <input
              id="proposal-search-input"
              type="text"
              value={searchInput}
              onChange={handleSearch}
              placeholder={t('COMMON.SEARCH')}
              className="flex-1 bg-transparent outline-none placeholder:text-input-text-input-placeholder"
            />
            <Image src="/icons/search_icon.svg" alt="search_icon" width={20} height={20} />
          </div>
        </div>
        {/* Info:(20240814 - Julian) Update History List */}
        <div className="flex w-full flex-col rounded-lg border border-accordion-surface-background-stroke-border bg-accordion-surface-background-primary">
          {updateHistoryList}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default UpdateHistory;
