import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
// ToDo: (20240816 - Liz) 預計用 useRouter 來做路由跳轉，待研究成功後再移除 window.location.href，改用 router.push
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { searchableItems } from '@/constants/search';

const Search = () => {
  const { t } = useTranslation('common');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<{ title: string; url: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  // const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (term: string) => {
    const filtered = searchableItems.filter((item) => {
      return item.title.toLowerCase().includes(term.toLowerCase());
    });
    setResults(filtered);
    setIsOpen(filtered.length > 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleResultClick = (url: string) => {
    // router.push(url); // This will trigger error: Error: Cancel rendering route

    window.location.href = url; // This is a temporary solution
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative grow" ref={searchRef}>
      <div className="flex justify-between rounded-sm bg-input-surface-input-background">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={t('HEADER.SEARCH')}
          className="w-full rounded-l-sm border border-r-0 border-lightGray3 bg-transparent px-12px py-10px text-lg font-medium outline-none placeholder:text-input-text-input-placeholder"
        />
        <div className="flex shrink-0 cursor-pointer items-center justify-center rounded-r-sm border border-l-0 border-lightGray3 px-12px py-10px">
          <Image src="/icons/search_icon.svg" alt="search_icon" width={20} height={20} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-sm bg-white shadow-downDropShadowM">
          <ul className="p-8px">
            {results.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className="block px-12px py-8px text-sm font-medium text-dropdown-text-primary"
                  onClick={() => handleResultClick(item.url)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
