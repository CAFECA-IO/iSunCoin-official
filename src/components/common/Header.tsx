import Link from 'next/link';
import { useState } from 'react';
import { ISUNCOIN_ROUTE_V2 } from '@/constants/url';
import ThemeToggle from '@/components/common/toggle/theme_toggle';
import Image from 'next/image';
import I18n from '@/components/common/i18n';
import { useTranslation } from 'next-i18next';

const DesktopVersion = () => {
  const { t } = useTranslation('common');

  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden items-center gap-40px bg-surface-neutral-surface-lv1 px-80px py-16px font-barlow shadow-header lg:flex">
      {/* Navigation Links */}
      <nav className="w-520px">
        <ul className="flex items-center justify-between gap-10px">
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
                <p className="text-lg font-medium">{t('HEADER.USE')}</p>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              <Link href={ISUNCOIN_ROUTE_V2.DEVELOP_PAGE}>
                <p className="text-lg font-medium">{t('HEADER.DEVELOP')}</p>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              <Link href={ISUNCOIN_ROUTE_V2.AUTONOMY}>
                <p className="text-lg font-medium">{t('HEADER.AUTONOMY')}</p>
              </Link>
            </div>
          </li>
          <li className="text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
            <div>
              {/* <Link href={ISUNCOIN_ROUTE_V2.RESEARCH}></Link> */}
              <p className="cursor-not-allowed text-lg font-medium text-tabs-text-disable">
                {t('HEADER.RESEARCH')}
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
            placeholder={t('HEADER.SEARCH')}
            className="w-full rounded-l-sm border border-r-0 border-lightGray3 bg-transparent px-12px py-10px text-lg font-medium outline-none placeholder:text-input-text-input-placeholder"
          />
        </div>
        <div className="flex cursor-pointer rounded-r-sm border border-l-0 border-lightGray3 px-12px py-10px">
          <Image src="/icons/search_icon.svg" alt="search_icon" width={20} height={20}></Image>
        </div>
      </div>

      {/* Language Selector Button */}
      <I18n isIconVersion />

      {/* Theme Toggle (Light/Dark mode) Button */}
      <ThemeToggle />
    </header>
  );
};

const MobileVersion = () => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex flex-col justify-between bg-surface-neutral-surface-lv1 font-barlow shadow-header lg:hidden">
      <div className="flex h-88px items-center justify-between p-16px">
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

        <button type="button" className="p-16px" onClick={toggleMenu}>
          <Image src="/elements/hamburger.svg" alt="hamburger" width={20} height={20}></Image>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col p-4`}>
        {/* Search Bar */}
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

        {/* Navigation Links */}
        <nav>
          <h5 className="px-12px py-8px text-xs font-semibold text-dropdown-text-head">MENU</h5>
          <ul>
            <li className="px-12px py-8px text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
              <div>
                <Link href={ISUNCOIN_ROUTE_V2.USE_PAGE}>
                  <p className="text-lg font-medium text-dropdown-text-primary">
                    {t('HEADER.USE')}
                  </p>
                </Link>
              </div>
            </li>
            <li className="px-12px py-8px text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
              <div>
                <Link href={ISUNCOIN_ROUTE_V2.DEVELOP_PAGE}>
                  <p className="text-lg font-medium text-dropdown-text-primary">
                    {t('HEADER.DEVELOP')}
                  </p>
                </Link>
              </div>
            </li>
            <li className="px-12px py-8px text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
              <div>
                <Link href={ISUNCOIN_ROUTE_V2.AUTONOMY}>
                  <p className="text-lg font-medium text-dropdown-text-primary">
                    {t('HEADER.AUTONOMY')}
                  </p>
                </Link>
              </div>
            </li>
            <li className="px-12px py-8px text-tabs-text-default hover:text-tabs-text-hover active:text-tabs-text-active">
              <div>
                {/* <Link href={ISUNCOIN_ROUTE_V2.RESEARCH}></Link> */}
                <p className="cursor-not-allowed text-lg font-medium text-tabs-text-disable">
                  {t('HEADER.RESEARCH')}
                </p>
              </div>
            </li>
          </ul>
        </nav>

        {/* Language Selector Button */}
        <I18n isIconVersion={false} />

        {/* Theme Toggle (Light/Dark mode) Button */}
        <div className="flex items-center justify-between px-12px py-8px text-lg font-medium text-dropdown-text-primary">
          <p>Dark Mode</p>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

const Header = () => {
  return (
    <>
      <DesktopVersion />
      <MobileVersion />
    </>
  );
};

export default Header;
