import React from 'react';
import { useTranslation } from 'next-i18next';
import useOuterClick from '@/lib/hooks/use_outer_click';
import { IHistory } from '@/interfaces/history';
import { timestampToString } from '@/lib/utils/common';

const UpdateHistoryItem = ({ history }: { history: IHistory }) => {
  const { t } = useTranslation('common');
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
        <h3>
          {t('DEVELOP_PAGE.PHASE_1')} {phase} {t('DEVELOP_PAGE.PHASE_2')}
        </h3>
        <div className="flex items-center gap-10px">
          <p>
            {t('COMMON.VERSION')} {version}
          </p>
          <p>|</p>
          <p
            className={
              isOpen
                ? 'text-accordion-surface-background-text-title-active'
                : 'text-text-neutral-tertiary'
            }
          >
            {timestampToString(updateTimestamp).date}
          </p>
          <div
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`}
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              className="fill-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="wrapper">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.97187 5.72077C3.26476 5.42788 3.73963 5.42788 4.03253 5.72077L8.0022 9.69044L11.9719 5.72077C12.2648 5.42788 12.7396 5.42788 13.0325 5.72077C13.3254 6.01366 13.3254 6.48854 13.0325 6.78143L8.53253 11.2814C8.23963 11.5743 7.76476 11.5743 7.47187 11.2814L2.97187 6.78143C2.67897 6.48854 2.67897 6.01366 2.97187 5.72077Z"
                />
              </g>
            </svg>
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
