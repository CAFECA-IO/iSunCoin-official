import {
  SetStateAction,
  Dispatch,
  useEffect,
  useCallback,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import useStateRef from 'react-usestateref';

export interface IPaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  pagePrefix?: string;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  pagePrefix = 'page',
}: IPaginationProps) => {
  const { t } = useTranslation('common');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [targetPage, setTargetPage, targetPageRef] = useStateRef<number>(currentPage);
  const router = useRouter();

  // Info: 從 URL 獲取初始頁碼 (20240712 - Shirley)
  useEffect(() => {
    const pageFromUrl = Number(router.query[pagePrefix]);
    if (!Number.isNaN(pageFromUrl) && pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [router.query, pagePrefix, setCurrentPage]);

  // Info: 更新 URL (20240712 - Shirley)
  const updateUrl = useCallback(
    (newPage: number) => {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, [pagePrefix]: newPage },
        },
        undefined,
        { shallow: true }
      );
    },
    [router, pagePrefix]
  );

  // Info: (20240419 - Julian) 如果位於第一頁，則將第一頁和上一頁的按鈕設為 disabled
  const isFirstPage = currentPage === 1;
  // Info: (20240419 - Julian) 如果位於最後一頁，則將最後一頁和下一頁的按鈕設為 disabled
  const isLastPage = currentPage === totalPages;

  // Info: (20240419 - Julian)  限制輸入的頁數在 1 ~ totalPages 之間
  // Info: 用來處理頁數變更邏輯 (20240712 - Shirley)
  const changePage = useCallback(
    (newPage: number) => {
      if (newPage !== currentPage && newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        setTargetPage(newPage);
        updateUrl(newPage);
      }
    },
    [currentPage, totalPages, setCurrentPage, updateUrl]
  );

  // Info: input 的 onChange 事件處理函數 (20240712 - Shirley)
  const pageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(1, parseInt(e.target.value, 10)), totalPages);
    if (!Number.isNaN(value)) {
      setTargetPage(value);
    }
  };

  // Info: (20240419 - Julian) 按下 Enter 鍵後，輸入頁數
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && targetPageRef.current !== currentPage) {
      changePage(targetPageRef.current);
    }
  };

  // Info: 按鈕處理函數 (20240712 - Shirley)
  const firstPageHandler = () => changePage(1);
  const previousPageHandler = () => changePage(currentPage - 1);
  const nextPageHandler = () => changePage(currentPage + 1);
  const lastPageHandler = () => changePage(totalPages);

  const displayFirstButton = (
    <button
      type="button"
      onClick={firstPageHandler}
      disabled={isFirstPage}
      className="flex h-40px w-40px items-center justify-center rounded border border-button-stroke-secondary hover:border-primaryYellow hover:text-primaryYellow disabled:border-lightGray3 disabled:text-lightGray3"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7369 4.08614L5.05348 9.88153C5.0352 9.89246 5.00244 9.92673 5.00244 10.0011C5.00244 10.0755 5.03509 10.1097 5.05336 10.1206L14.7369 15.9161C14.7706 15.9362 14.7952 15.9393 14.8126 15.9386C14.8324 15.9379 14.858 15.9313 14.8861 15.913C14.9415 15.877 15.0024 15.7966 15.0024 15.6652V4.33704C15.0024 4.20564 14.9415 4.12521 14.8861 4.08918C14.858 4.07088 14.8324 4.06431 14.8126 4.06356C14.7952 4.0629 14.7706 4.06605 14.7369 4.08614ZM15.568 3.04153C15.9814 3.31058 16.2524 3.78718 16.2524 4.33704V15.6652C16.2524 16.215 15.9814 16.6916 15.568 16.9607C15.1493 17.2332 14.5899 17.2841 14.0961 16.9893L4.41168 11.1933C3.9566 10.921 3.75244 10.441 3.75244 10.0011C3.75244 9.56125 3.95648 9.08123 4.41156 8.80895L14.0958 3.01309C14.5896 2.71821 15.1493 2.76904 15.568 3.04153Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.37744 2.5011C4.72262 2.5011 5.00244 2.78092 5.00244 3.1261V16.8761C5.00244 17.2213 4.72262 17.5011 4.37744 17.5011C4.03226 17.5011 3.75244 17.2213 3.75244 16.8761V3.1261C3.75244 2.78092 4.03226 2.5011 4.37744 2.5011Z"
        />
      </svg>
    </button>
  );

  const displayPreviousButton = (
    <button
      type="button"
      onClick={previousPageHandler}
      disabled={isFirstPage}
      className="flex h-40px w-40px items-center justify-center rounded border border-button-stroke-secondary hover:border-primaryYellow hover:text-primaryYellow disabled:border-lightGray3 disabled:text-lightGray3"
    >
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
            d="M13.4779 3.71319C13.844 4.0793 13.844 4.67289 13.4779 5.03901L8.51577 10.0011L13.4779 14.9632C13.844 15.3293 13.844 15.9229 13.4779 16.289C13.1117 16.6551 12.5181 16.6551 12.152 16.289L6.52703 10.664C6.16091 10.2979 6.16091 9.7043 6.52703 9.33819L12.152 3.71319C12.5181 3.34707 13.1117 3.34707 13.4779 3.71319Z"
          />
        </g>
      </svg>
    </button>
  );

  const displayLastButton = (
    <button
      type="button"
      onClick={lastPageHandler}
      disabled={isLastPage}
      className="flex h-40px w-40px items-center justify-center rounded border border-button-stroke-secondary hover:border-primaryYellow hover:text-primaryYellow disabled:border-lightGray3 disabled:text-lightGray3"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.43691 3.04153C4.85558 2.76904 5.41499 2.71805 5.90881 3.01293L15.5928 8.80888C16.0479 9.08116 16.2521 9.56125 16.2521 10.0011C16.2521 10.4409 16.048 10.921 15.5929 11.1932L5.90935 16.9889C5.41553 17.2838 4.85558 17.2332 4.43691 16.9607C4.02351 16.6916 3.75244 16.215 3.75244 15.6652V4.33704C3.75244 3.78718 4.02351 3.31058 4.43691 3.04153ZM5.11876 4.08918C5.0634 4.12521 5.00244 4.20564 5.00244 4.33704V15.6652C5.00244 15.7966 5.0634 15.877 5.11876 15.913C5.14688 15.9313 5.17245 15.9379 5.19223 15.9386C5.20967 15.9393 5.23427 15.9362 5.26795 15.9161L14.9511 10.1206C14.9694 10.1097 15.0021 10.0755 15.0021 10.0011C15.0021 9.92673 14.9694 9.89253 14.9511 9.8816L5.26795 4.08614C5.23435 4.06612 5.20965 4.0629 5.19223 4.06356C5.17245 4.06431 5.14688 4.07088 5.11876 4.08918Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6274 2.5011C15.9726 2.5011 16.2524 2.78092 16.2524 3.1261V16.8761C16.2524 17.2213 15.9726 17.5011 15.6274 17.5011C15.2823 17.5011 15.0024 17.2213 15.0024 16.8761V3.1261C15.0024 2.78092 15.2823 2.5011 15.6274 2.5011Z"
        />
      </svg>
    </button>
  );

  const displayNextButton = (
    <button
      type="button"
      onClick={nextPageHandler}
      disabled={isLastPage}
      className="flex h-40px w-40px items-center justify-center rounded border border-button-stroke-secondary hover:border-primaryYellow hover:text-primaryYellow disabled:border-lightGray3 disabled:text-lightGray3"
    >
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
            d="M6.52703 3.71319C6.89315 3.34707 7.48674 3.34707 7.85285 3.71319L13.4779 9.33819C13.844 9.7043 13.844 10.2979 13.4779 10.664L7.85285 16.289C7.48674 16.6551 6.89315 16.6551 6.52703 16.289C6.16091 15.9229 6.16091 15.3293 6.52703 14.9632L11.4891 10.0011L6.52703 5.03901C6.16091 4.67289 6.16091 4.0793 6.52703 3.71319Z"
          />
        </g>
      </svg>
    </button>
  );

  const displayPageInput = (
    <input
      name="page"
      type="number"
      placeholder={`${currentPage}`}
      min={1}
      max={totalPages}
      value={targetPageRef.current}
      onChange={pageChangeHandler}
      onKeyDown={handleKeyDown}
      className="h-40px w-40px rounded border border-button-stroke-secondary bg-transparent text-center text-sm font-semibold outline-none placeholder:text-lightGray3 disabled:border-lightGray3"
    />
  );

  return (
    <ul className="flex items-start gap-10px text-button-text-secondary">
      {/* Info: (20240419 - Julian) 最前一頁 */}
      <li>{displayFirstButton}</li>
      {/* Info: (20240419 - Julian) 上一頁 */}
      <li>{displayPreviousButton}</li>
      {/* Info: (20240419 - Julian) 手動輸入/顯示當前頁數 */}
      <li className="flex flex-col items-center">
        {displayPageInput}
        {/* Info: (20240419 - Julian) 顯示總頁數 */}
        <p>
          {t('COMMON.OF')} {totalPages}
        </p>
      </li>
      {/* Info: (20240419 - Julian) 下一頁 */}
      <li>{displayNextButton}</li>
      {/* Info: (20240419 - Julian) 最後一頁 */}
      <li>{displayLastButton}</li>
    </ul>
  );
};

export default Pagination;
