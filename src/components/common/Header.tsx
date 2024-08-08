import Link from 'next/link';
import useOuterClick from '@/lib/hooks/use_outer_click';
import { ISUNCOIN_ROUTE_V2 } from '@/constants/url';
import ThemeToggle from '@/components/toggle/theme_toggle';
import Image from 'next/image';

const languages = [
  { label: 'English', code: 'en' },
  { label: '繁體中文', code: 'tw' },
  { label: '简体中文', code: 'cn' },
];

const Header = () => {
  // ToDo: (20240618 - Liz) i18n
  //   const { t }: { t: TranslateFunction } = useTranslation('common');

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    targetRef: dropdownRef,
    componentVisible: dropdownOpen,
    setComponentVisible: setDropdownOpen,
  } = useOuterClick<HTMLDivElement>(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center gap-lv-7 bg-surface-neutral-surface-lv1 px-lv-10 py-lv-4 font-barlow shadow-header">
      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-lv-7">
          <li>
            <div>
              <Link href={ISUNCOIN_ROUTE_V2.HOME_PAGE} className="flex items-center gap-8px">
                <Image
                  src="/logo/isuncoin_logo.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="max-w-fit"
                ></Image>
                <Image
                  src="/logo/isuncoin.svg"
                  alt="logo_string"
                  width={90}
                  height={18}
                  className="max-w-fit"
                ></Image>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              <Link href={ISUNCOIN_ROUTE_V2.USE_PAGE}>
                <p className="text-base font-medium">Use</p>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              <Link href={ISUNCOIN_ROUTE_V2.DEVELOP_PAGE}>
                <p className="text-base font-medium">Develop</p>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              <Link href={ISUNCOIN_ROUTE_V2.AUTONOMY}>
                <p className="text-base font-medium">Autonomy</p>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              {/* <Link href={ISUNCOIN_ROUTE_V2.RESEARCH}></Link> */}
              <p className="cursor-not-allowed text-base font-medium text-tabs-text-disable">
                Research
              </p>
            </div>
          </li>
        </ul>
      </nav>

      {/* Divider */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="56"
          fill="none"
          viewBox="0 0 21 56"
        >
          <path stroke="#1D283A" strokeLinecap="round" d="M10.139 55.5V.5" />
        </svg>
      </div>

      {/* Search Bar */}
      <div className="flex grow justify-between rounded-sm bg-input-surface-input-background">
        <div className="grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-l-sm border border-r-0 border-lightGray3 bg-transparent px-12px py-10px text-base font-medium outline-none placeholder:text-input-text-input-placeholder"
          />
        </div>
        <div className="flex cursor-pointer rounded-r-sm border border-l-0 border-lightGray3 px-12px py-10px">
          <Image src="/elements/search_icon.svg" alt="search_icon" width={20} height={20}></Image>
        </div>
      </div>

      {/* Language Selector Button */}
      <div className="p-12px">
        <div onClick={toggleDropdown} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className="hover:cursor-pointer hover:text-stroke-brand-primary"
          >
            <path
              // fill="#001840"
              fill="currentColor"
              fillRule="evenodd"
              d="M4.038 13.001a12.36 12.36 0 0 0-.367 3c0 1.035.127 2.04.367 3h5.904a21.4 21.4 0 0 1-.271-3.02c.02-1.004.112-2 .27-2.98H4.039Zm.688-2h5.64a21.403 21.403 0 0 1 3.366-7.124A12.353 12.353 0 0 0 4.726 11ZM16.004 4.2a19.4 19.4 0 0 0-3.564 6.802h7.128A19.4 19.4 0 0 0 16.004 4.2Zm4.033 8.802h-8.066a19.405 19.405 0 0 0-.3 3c.022 1.012.123 2.015.3 3h8.066c.177-.985.278-1.988.3-3a19.405 19.405 0 0 0-.3-3Zm2.029 6a21.41 21.41 0 0 0 .271-3.02 21.409 21.409 0 0 0-.271-2.98h5.904c.24.96.367 1.965.367 3s-.127 2.04-.367 3h-5.904Zm-2.498 2H12.44a19.4 19.4 0 0 0 3.564 6.802A19.4 19.4 0 0 0 19.568 21Zm-5.836 7.125A21.404 21.404 0 0 1 10.365 21H4.726a12.353 12.353 0 0 0 9.006 7.125Zm4.544 0A21.404 21.404 0 0 0 21.643 21h5.639a12.353 12.353 0 0 1-9.006 7.125ZM27.282 11h-5.64a21.403 21.403 0 0 0-3.366-7.124A12.353 12.353 0 0 1 27.282 11ZM1.671 16c0-7.916 6.417-14.333 14.333-14.333S30.337 8.085 30.337 16 23.92 30.334 16.004 30.334 1.67 23.917 1.67 16.001Z"
              clipRule="evenodd"
            />
          </svg>
          {/* dropmenu */}
          <ul
            className={`absolute left-1/2 top-80px flex h-200px w-160px -translate-x-1/2 flex-col items-center justify-evenly rounded-xs border bg-surface-neutral-surface-lv2 px-24px text-center shadow-downDropShadowS ${dropdownOpen ? 'block' : 'hidden'}`}
          >
            {languages.map((lang: { label: string; code: string }) => (
              <li
                key={lang.code}
                className="cursor-pointer text-base font-medium text-button-text-secondary"
                // onClick={() => changeLanguage(lang.code)} // ToDo: (20240618 - Liz) i18n
              >
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Theme Toggle (Light/Dark mode) Button */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
