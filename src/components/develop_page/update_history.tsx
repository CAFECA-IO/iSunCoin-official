import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { IHistory, IHistoryData } from '@/interfaces/history';
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
  const [historyData, setHistoryData] = useState<IHistoryData>();
  const [filteredHistoryList, setFilteredHistoryList] = useState<IHistory[]>([]);

  useEffect(() => {
    fetch(ISUNCOIN_API_V1.HISTORY)
      .then((response) => response.json())
      .then((data) => setHistoryData(data));
  }, []);

  const totalPages = historyData ? historyData.totalPages : 0;
  const historyList = historyData ? historyData.historyList : [];

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
  }, [searchInput, selectedPeriod, historyData]);

  const updateHistoryList =
    historyList.length <= 0 ? (
      // Info: (20240816 - Julian) 目前還沒有資料
      <div className="flex w-full flex-col items-center p-40px text-xl font-semibold text-card-text-tertiary">
        <Image src="/elements/empty.svg" alt="Empty" width={80} height={90} />
        <p>{t('DEVELOP_PAGE.NOT_HISTORY_YET')}</p>
      </div>
    ) : filteredHistoryList && filteredHistoryList.length > 0 ? (
      filteredHistoryList
        // Info: (20240814 - Julian) 根據更新時間排序
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        // Info: (20240814 - Julian) 分頁
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        .map((history) => <UpdateHistoryItem key={history.id} history={history} />)
    ) : (
      // Info: (20240816 - Julian) 查無資料
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
          <div className="flex flex-1 items-center rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base text-button-text-secondary">
            <input
              id="proposal-search-input"
              type="text"
              value={searchInput}
              onChange={handleSearch}
              placeholder={t('COMMON.SEARCH')}
              className="flex-1 bg-transparent outline-none placeholder:text-input-text-input-placeholder"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 20"
              className="fill-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="wrapper">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.58574 3.25122C6.08794 3.25122 3.25241 6.08675 3.25241 9.58455C3.25241 13.0824 6.08794 15.9179 9.58574 15.9179C11.2885 15.9179 12.8344 15.2459 13.9725 14.1526C13.9969 14.1181 14.0246 14.0851 14.0555 14.0542C14.0864 14.0233 14.1193 13.9957 14.1539 13.9713C15.2471 12.8331 15.9191 11.2873 15.9191 9.58455C15.9191 6.08675 13.0835 3.25122 9.58574 3.25122ZM15.6298 14.5679C16.7476 13.2137 17.4191 11.4776 17.4191 9.58455C17.4191 5.25832 13.912 1.75122 9.58574 1.75122C5.25951 1.75122 1.75241 5.25832 1.75241 9.58455C1.75241 13.9108 5.25951 17.4179 9.58574 17.4179C11.4788 17.4179 13.215 16.7464 14.5692 15.6286L16.9721 18.0315C17.265 18.3244 17.7398 18.3244 18.0327 18.0316C18.3256 17.7387 18.3256 17.2638 18.0327 16.9709L15.6298 14.5679Z"
                />
              </g>
            </svg>
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
