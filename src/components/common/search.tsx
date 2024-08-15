import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Search = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex grow justify-between rounded-sm bg-input-surface-input-background">
      <div className="grow">
        <input
          type="text"
          placeholder={t('HEADER.SEARCH')}
          className="w-full rounded-l-sm border border-r-0 border-lightGray3 bg-transparent px-12px py-10px text-lg font-medium outline-none placeholder:text-input-text-input-placeholder"
        />
      </div>
      <div className="flex cursor-pointer rounded-r-sm border border-l-0 border-lightGray3 px-12px py-10px">
        <Image src="/icons/search_icon.svg" alt="search_icon" width={20} height={20}></Image>
      </div>
    </div>
  );
};

export default Search;
