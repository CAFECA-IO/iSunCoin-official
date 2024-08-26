import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const languages = [
  { label: 'English', code: 'en' },
  { label: '繁體中文', code: 'tw' },
  { label: '简体中文', code: 'cn' },
];

interface LanguageMenuProps {
  onClick: () => void;
  backBtn?: boolean;
  onClickBackBtn?: () => void;
}

const LanguageMenu = ({
  onClick,
  backBtn = false,
  onClickBackBtn = () => {},
}: LanguageMenuProps) => {
  const { asPath } = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      {languages.map((lang: { label: string; code: string }) => (
        <Link
          id={`lang-${lang.code}`}
          key={lang.code}
          href={asPath}
          onClick={onClick}
          scroll={false}
          locale={lang.code}
          className="w-full px-24px py-10px text-center text-base font-medium text-tabs-text-default hover:bg-button-surface-soft-primary-hover"
        >
          {lang.label}
        </Link>
      ))}

      {/* Back Button */}
      {backBtn && (
        <button
          id="back-btn"
          type="button"
          onClick={onClickBackBtn}
          className="flex w-full items-center justify-center gap-12px px-24px py-10px text-base font-medium text-tabs-text-default hover:bg-button-surface-soft-primary-hover"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              className="fill-current"
            >
              <path
                d="M13.8334 8H3.16669M3.16669 8L7.16669 12M3.16669 8L7.16669 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>{t('HEADER.BACK')}</p>
        </button>
      )}
    </>
  );
};

export default LanguageMenu;
