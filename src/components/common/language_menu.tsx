import Link from 'next/link';
import { useRouter } from 'next/router';

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
          className="w-full cursor-pointer px-24px py-10px text-center text-base font-medium text-button-text-secondary hover:bg-drag-n-drop-surface-hover"
        >
          {lang.label}
        </Link>
      ))}

      {/* Back Button */}
      {backBtn && (
        <button
          type="button"
          onClick={onClickBackBtn}
          className="flex w-full cursor-pointer items-center justify-center gap-12px px-24px py-10px text-base font-medium text-button-text-secondary hover:bg-drag-n-drop-surface-hover"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M13.8334 8H3.16669M3.16669 8L7.16669 12M3.16669 8L7.16669 4"
                stroke="#314362"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Back</p>
        </button>
      )}
    </>
  );
};

export default LanguageMenu;
