import Link from 'next/link';
import { useRouter } from 'next/router';
import useOuterClick from '@/lib/hooks/use_outer_click';

const languages = [
  { label: 'English', code: 'en' },
  { label: '繁體中文', code: 'tw' },
  { label: '简体中文', code: 'cn' },
];

const I18n = () => {
  const { asPath } = useRouter();
  const {
    targetRef: dropdownRef,
    componentVisible: dropdownOpen,
    setComponentVisible: setDropdownOpen,
  } = useOuterClick<HTMLDivElement>(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const langMenu = languages.map((lang: { label: string; code: string }) => (
    <Link
      id={`lang-${lang.code}`}
      key={lang.code}
      href={asPath}
      onClick={toggleDropdown}
      scroll={false}
      locale={lang.code}
      className="w-full cursor-pointer px-24px py-10px text-base font-medium text-button-text-secondary hover:bg-drag-n-drop-surface-hover"
    >
      {lang.label}
    </Link>
  ));

  return (
    <div className="relative flex justify-center">
      <button type="button" onClick={toggleDropdown} className="hover:text-stroke-brand-primary">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.03799 13.0011C3.79799 13.9614 3.67057 14.9664 3.67057 16.0011C3.67057 17.0358 3.79799 18.0407 4.03799 19.0011H9.94193C9.78296 18.0205 9.69169 17.0253 9.67079 16.0219C9.6705 16.008 9.6705 15.9941 9.67079 15.9802C9.69169 14.9769 9.78296 13.9816 9.94193 13.0011H4.03799ZM4.72618 11.0011H10.3651C11.0349 8.44558 12.1741 6.02825 13.7319 3.87655C9.69444 4.62839 6.34852 7.34722 4.72618 11.0011ZM16.0039 4.19936C14.3664 6.21649 13.1594 8.53155 12.4401 11.0011H19.5678C18.8485 8.53155 17.6414 6.21649 16.0039 4.19936ZM20.037 13.0011H11.9708C11.7941 13.9864 11.693 14.9892 11.6708 16.0011C11.693 17.013 11.7941 18.0158 11.9708 19.0011H20.037C20.2137 18.0158 20.3148 17.013 20.337 16.0011C20.3148 14.9892 20.2137 13.9864 20.037 13.0011ZM22.0659 19.0011C22.2248 18.0205 22.3161 17.0253 22.337 16.0219C22.3373 16.008 22.3373 15.9941 22.337 15.9802C22.3161 14.9769 22.2248 13.9816 22.0659 13.0011H27.9698C28.2098 13.9614 28.3372 14.9664 28.3372 16.0011C28.3372 17.0358 28.2098 18.0407 27.9698 19.0011H22.0659ZM19.5678 21.0011H12.4401C13.1594 23.4706 14.3664 25.7856 16.0039 27.8028C17.6414 25.7856 18.8485 23.4706 19.5678 21.0011ZM13.7319 28.1256C12.1741 25.9739 11.0349 23.5565 10.3651 21.0011H4.72618C6.34852 24.6549 9.69443 27.3737 13.7319 28.1256ZM18.2759 28.1256C19.8337 25.9739 20.9729 23.5565 21.6427 21.0011H27.2816C25.6593 24.6549 22.3134 27.3737 18.2759 28.1256ZM27.2816 11.0011H21.6427C20.9729 8.44558 19.8337 6.02825 18.2759 3.87655C22.3134 4.62839 25.6593 7.34722 27.2816 11.0011ZM1.67057 16.0011C1.67057 8.08498 8.08782 1.66772 16.0039 1.66772C23.92 1.66772 30.3372 8.08498 30.3372 16.0011C30.3372 23.9171 23.92 30.3344 16.0039 30.3344C8.08782 30.3344 1.67057 23.9171 1.67057 16.0011Z"
          />
        </svg>
      </button>
      <div
        ref={dropdownRef}
        className={`absolute top-50px flex h-160px w-120px flex-col items-center justify-evenly rounded-xs bg-surface-neutral-surface-lv2 text-center shadow-downDropShadowS ${dropdownOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-10 opacity-0'} transition-all duration-300 ease-in-out`}
      >
        {langMenu}
      </div>
    </div>
  );
};

export default I18n;
