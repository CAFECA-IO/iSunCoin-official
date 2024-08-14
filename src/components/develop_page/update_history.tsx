import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import UpdateHistoryItem from '@/components/develop_page/update_history_item';
import { dummyUpdateHistoryList } from '@/interfaces/history';
import Pagination from '@/components/common/pagination';
import { ITEMS_PER_PAGE } from '@/constants/config';

const UpdateHistory = () => {
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredHistoryList, setFilteredHistoryList] = useState(dummyUpdateHistoryList);

  const totalPages = 2; // ToDo: (20240814 - Julian) Get total pages from API

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredList = dummyUpdateHistoryList.filter((history) => {
      // Info: (20240814 - Julian) 搜尋內容
      return (
        history.content.toLowerCase().includes(searchInput.toLowerCase()) ||
        // Info: (20240814 - Julian) 搜尋期數
        history.phase.toLowerCase().includes(searchInput.toLowerCase()) ||
        // Info: (20240814 - Julian) 搜尋版本
        history.version.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilteredHistoryList(filteredList);
  }, [searchInput]);

  const updateHistoryList =
    filteredHistoryList && filteredHistoryList.length > 0 ? (
      filteredHistoryList
        // Info: (20240814 - Julian) 根據更新時間排序
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        // Info: (20240814 - Julian) 分頁
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        .map((history) => <UpdateHistoryItem key={history.id} history={history} />)
    ) : (
      <div className="flex w-full items-center justify-center py-40px text-2xl font-medium text-text-neutral-secondary">
        No update history found
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-60px px-80px py-40px">
      <h2 className="text-44px font-bold text-text-neutral-primary">Update History</h2>
      <div className="flex w-full flex-col items-center gap-60px">
        {/* Info:(20240814 - Julian) Filter */}
        <div className="flex w-full items-center justify-between gap-100px">
          {/* Info:(20240814 - Julian) Date Picker */}
          <div className="inline-flex h-11 items-center justify-start rounded-lg border bg-white shadow">
            <div className="flex h-11 items-center justify-start">
              <div className="flex h-11 items-start justify-start gap-2.5 px-3 py-2.5">
                <div className="text-base font-medium leading-normal tracking-tight">
                  Start Date - End Date
                </div>
              </div>
            </div>
          </div>
          {/* Info:(20240814 - Julian) Search bar */}
          <div className="flex flex-1 items-center rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base">
            <input
              id="proposal-search-input"
              type="text"
              value={searchInput}
              onChange={handleSearch}
              placeholder="Search"
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
