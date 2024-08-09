import Link from 'next/link';
import { ISUNCOIN_ROUTE_V2 } from '@/constants/url';
import ThemeToggle from '@/components/common/toggle/theme_toggle';
import Image from 'next/image';
import I18n from '@/components/common/i18n';

const Header = () => {
  // ToDo: (20240618 - Liz) i18n
  //   const { t }: { t: TranslateFunction } = useTranslation('common');

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
      <I18n />

      {/* Theme Toggle (Light/Dark mode) Button */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
