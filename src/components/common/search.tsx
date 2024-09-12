import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
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
          className="w-full bg-transparent px-12px py-10px text-base font-medium text-input-text-input-filled outline-none placeholder:text-input-text-input-placeholder"
        />
        <div className="flex items-center justify-center px-12px py-10px text-icon-surface-single-color-primary">
          <svg width="20" height="20" viewBox="0 0 16 16" className="fill-current">
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.90615 2.41269C4.79566 1.81833 5.84145 1.5011 6.91126 1.5011C8.3458 1.50119 9.72158 2.0711 10.736 3.08547C11.7503 4.09984 12.3202 5.47559 12.3203 6.91013C12.3203 7.97994 12.0031 9.02576 11.4087 9.91528C10.8144 10.8048 9.9696 11.4981 8.98122 11.9075C7.99284 12.3169 6.90526 12.424 5.85601 12.2153C4.80675 12.0066 3.84295 11.4914 3.08648 10.7349C2.33001 9.97847 1.81484 9.01467 1.60613 7.96542C1.39742 6.91616 1.50454 5.82858 1.91394 4.8402C2.32334 3.85183 3.01663 3.00705 3.90615 2.41269ZM6.91123 2.5011C6.03921 2.5011 5.18678 2.75969 4.46172 3.24416C3.73665 3.72863 3.17153 4.41724 2.83782 5.22289C2.50411 6.02854 2.41679 6.91505 2.58692 7.77033C2.75704 8.6256 3.17697 9.41122 3.79358 10.0278C4.4102 10.6445 5.19582 11.0644 6.0511 11.2345C6.90637 11.4046 7.79289 11.3173 8.59854 10.9836C9.40419 10.6499 10.0928 10.0848 10.5773 9.3597C11.0617 8.63465 11.3203 7.78221 11.3203 6.91019M6.91123 2.5011C8.08056 2.50118 9.20201 2.96573 10.0288 3.79257C10.8557 4.61942 11.3202 5.74086 11.3203 6.91019"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2202 10.2191C10.4155 10.0238 10.7321 10.0238 10.9273 10.2191L14.3558 13.6475C14.551 13.8428 14.551 14.1594 14.3558 14.3547C14.1605 14.5499 13.8439 14.5499 13.6486 14.3547L10.2202 10.9262C10.0249 10.731 10.0249 10.4144 10.2202 10.2191Z"
              />
            </g>
          </svg>
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
