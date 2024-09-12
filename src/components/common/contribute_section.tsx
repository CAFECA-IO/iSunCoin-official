import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ContributeSection = () => {
  const { t } = useTranslation('common');

  return (
    <div
      id="contribute"
      className="flex w-full flex-col items-center justify-between gap-x-80px gap-y-10px bg-surface-neutral-surface-lv2 px-20px py-40px md:flex-row md:px-80px"
    >
      {/* Info:(20240808 - Julian) Image */}
      <div className="flex w-2/3 justify-end md:w-1/2">
        <Image src="/elements/contribute.png" width={480} height={480} alt="contribute_image" />
      </div>
      {/* Info:(20240808 - Julian) Text */}
      <div className="flex flex-col items-start gap-20px md:w-1/2">
        <p className="text-2xl font-bold text-text-neutral-primary md:text-36px">
          {t('HOME_PAGE.CONTRIBUTE_TITLE')}
        </p>
        <p className="text-base text-text-neutral-secondary">
          {t('HOME_PAGE.CONTRIBUTE_DESCRIPTION')}
        </p>
        <a
          href="https://github.com/CAFECA-IO/iSunCoin-official"
          target="_blank"
          className="flex items-center gap-8px rounded-xs bg-button-surface-strong-secondary px-32px py-14px text-button-text-invert hover:bg-button-surface-strong-secondary-hover"
          rel="noreferrer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8679 0.981079C6.23792 0.981079 0.86792 6.35108 0.86792 12.9811C0.86792 18.2911 4.30292 22.7761 9.07292 24.3661C9.67292 24.4711 9.89792 24.1111 9.89792 23.7961C9.89792 23.5111 9.88292 22.5661 9.88292 21.5611C6.86792 22.1161 6.08792 20.8261 5.84792 20.1511C5.71292 19.8061 5.12792 18.7411 4.61792 18.4561C4.19792 18.2311 3.59792 17.6761 4.60292 17.6611C5.54792 17.6461 6.22292 18.5311 6.44792 18.8911C7.52792 20.7061 9.25292 20.1961 9.94292 19.8811C10.0479 19.1011 10.3629 18.5761 10.7079 18.2761C8.03792 17.9761 5.24792 16.9411 5.24792 12.3511C5.24792 11.0461 5.71292 9.96608 6.47792 9.12608C6.35792 8.82608 5.93792 7.59608 6.59792 5.94608C6.59792 5.94608 7.60292 5.63108 9.89792 7.17608C10.8579 6.90608 11.8779 6.77108 12.8979 6.77108C13.9179 6.77108 14.9379 6.90608 15.8979 7.17608C18.1929 5.61608 19.1979 5.94608 19.1979 5.94608C19.8579 7.59608 19.4379 8.82608 19.3179 9.12608C20.0829 9.96608 20.5479 11.0311 20.5479 12.3511C20.5479 16.9561 17.7429 17.9761 15.0729 18.2761C15.5079 18.6511 15.8829 19.3711 15.8829 20.4961C15.8829 22.1011 15.8679 23.3911 15.8679 23.7961C15.8679 24.1111 16.0929 24.4861 16.6929 24.3661C19.0753 23.5621 21.1454 22.0311 22.612 19.9887C24.0785 17.9463 24.8675 15.4954 24.8679 12.9811C24.8679 6.35108 19.4979 0.981079 12.8679 0.981079Z"
            />
          </svg>
          <p>Github</p>
        </a>
      </div>
    </div>
  );
};

export default ContributeSection;
