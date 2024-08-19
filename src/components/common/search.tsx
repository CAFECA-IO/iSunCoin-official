import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { searchableItems } from '@/constants/search';

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
  const router = useRouter();

  // Info: (20240819 - Liz) handle the result click event
  const handleResultClick = (url: string) => {
    const [pathname, hash] = url.split('#');
    const isSamePage = pathname === router.pathname;

    const scrollToHash = () => {
      if (hash) {
        // Info: (20240819 - Liz) scroll to the element with the id of the hash
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Info: (20240819 - Liz) scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Info: (20240819 - Liz) if the path is the same, just scroll to the hash
    if (isSamePage) {
      scrollToHash();
    } else {
      // Info: (20240819 - Liz) if the path is different, push the new path to the router
      router.push(pathname).then(scrollToHash);
    }

    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <ul className="p-8px">
      {results.map((item) => (
        <li key={item.title}>
          <div
            className="block px-12px py-8px text-sm font-medium text-dropdown-text-primary"
            onClick={() => handleResultClick(item.url)}
          >
            {item.title}
          </div>
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
