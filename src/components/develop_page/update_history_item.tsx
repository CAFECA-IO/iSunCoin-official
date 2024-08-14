import Image from 'next/image';
import React from 'react';
import useOuterClick from '@/lib/hooks/use_outer_click';
import { IHistory } from '@/interfaces/history';
import { timestampToString } from '@/lib/utils/common';

const UpdateHistoryItem = ({ history }: { history: IHistory }) => {
  const { phase, version, updateTimestamp, content } = history;

  const {
    targetRef,
    componentVisible: isOpen,
    setComponentVisible: setIsOpen,
  } = useOuterClick<HTMLDivElement>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div ref={targetRef} className="flex flex-col">
      {/* Info:(20240814 - Julian) Header */}
      <div
        id={`phase-${phase}-history`}
        onClick={handleToggle}
        className={`flex h-96px cursor-pointer items-center justify-between px-40px py-32px text-xl font-semibold ${isOpen ? 'text-accordion-surface-background-text-title-active' : 'text-accordion-surface-background-text-title'} `}
      >
        <h3>Phase {phase}</h3>
        <div className="flex items-center gap-10px">
          <p>Version {version}</p>
          <p>|</p>
          <p
            className={
              isOpen
                ? 'text-accordion-surface-background-text-title-active'
                : 'text-text-neutral-tertiary'
            }
          >
            {timestampToString(updateTimestamp).DMY}
          </p>
          <div
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`}
          >
            <Image src="/icons/chevron_down.svg" width={24} height={24} alt="arrow_down_icon" />
          </div>
        </div>
      </div>
      {/* Info:(20240814 - Julian) Panel */}
      <div
        className={`grid overflow-hidden px-40px text-lg text-accordion-surface-background-text-paragraph ${
          isOpen ? 'grid-rows-1 py-32px' : 'grid-rows-0'
        } transition-all duration-300 ease-in-out`}
      >
        {content}
      </div>
    </div>
  );
};

export default UpdateHistoryItem;
