import React, { useState } from 'react';
import Image from 'next/image';
import UpdateHistoryItem from '@/components/develop_page/update_history_item';
import { dummyUpdateHistoryList } from '@/interfaces/history';

const UpdateHistory = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const updateHistoryList = dummyUpdateHistoryList
    .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
    .map((history) => <UpdateHistoryItem key={history.id} history={history} />);

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
      </div>
    </div>
  );
};

export default UpdateHistory;
