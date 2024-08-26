import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { searchableItems } from '@/constants/search';
import Link from 'next/link';

interface Result {
  title: string;
  url: string;
}

interface SearchResultItemsProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  results: Result[];
}

const SearchResultItems = ({ setIsOpen, setSearchTerm, results }: SearchResultItemsProps) => {
  const handleResultClick = () => {
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <ul className="p-8px">
      {results.map((item) => (
        <li key={item.title}>
          <Link
            href={item.url}
            className="block px-12px py-8px text-sm font-medium text-dropdown-text-primary"
            onClick={() => handleResultClick()}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Search = () => {
  const { t } = useTranslation('common');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Info: (20240819 - Liz) handle the click outside event
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

  // Info: (20240819 - Liz) filter the searchable items based on the search term
  const handleSearch = (term: string) => {
    const filtered = searchableItems.filter((item) => {
      return item.title.toLowerCase().includes(term.toLowerCase());
    });
    setResults(filtered);
    setIsOpen(filtered.length > 0);
  };

  // Info: (20240819 - Liz) handle the input change event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div className="relative grow" ref={searchRef}>
      <div className="flex justify-between rounded-sm border border-input-stroke-input bg-input-surface-input-background">
        <input
          id="global-search-input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={t('HEADER.SEARCH')}
          className="w-full rounded-l-sm bg-transparent px-12px py-10px text-base font-medium text-input-text-input-filled outline-none placeholder:text-input-text-input-placeholder"
        />
        <div className="flex shrink-0 cursor-pointer items-center justify-center rounded-r-sm px-12px py-10px">
          <Image src="/icons/search_icon.svg" alt="search_icon" width={20} height={20} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-sm bg-surface-neutral-surface-lv1 shadow-downDropShadowM">
          <SearchResultItems
            setIsOpen={setIsOpen}
            setSearchTerm={setSearchTerm}
            results={results}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
