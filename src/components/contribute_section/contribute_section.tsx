import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ContributeSection = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex w-full items-center justify-between gap-80px bg-surface-neutral-surface-lv2 px-80px py-40px">
      {/* Info:(20240808 - Julian) Image */}
      <div className="flex w-1/2 justify-end">
        <Image src="/elements/contribute.png" width={480} height={480} alt="contribute_image" />
      </div>
      {/* Info:(20240808 - Julian) Text */}
      <div className="flex w-1/2 flex-col items-start gap-20px">
        <p className="text-36px font-bold text-text-neutral-primary">
          {t('HOME_PAGE.CONTRIBUTE_TITLE')}
        </p>
        <p className="text-base text-text-neutral-secondary">
          {t('HOME_PAGE.CONTRIBUTE_DESCRIPTION')}
        </p>
        <a
          href="https://github.com/CAFECA-IO"
          target="_blank"
          className="flex items-center gap-8px rounded-xs bg-button-surface-strong-secondary px-32px py-14px text-button-text-invert hover:bg-button-surface-strong-secondary-hover"
          rel="noreferrer"
        >
          <Image src="/icons/github.svg" width={24} height={24} alt="github_icon" />
          <p>Github</p>
        </a>
      </div>
    </div>
  );
};

export default ContributeSection;
