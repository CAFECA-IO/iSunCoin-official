import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const WelcomeSection = () => {
  const { t } = useTranslation('common');

  const introData = [
    {
      imageStr: '/elements/open_and_free.png',
      title: t('HOME_PAGE.INTRO_CARD_1_TITLE'),
      description: t('HOME_PAGE.INTRO_CARD_1_DESCRIPTION'),
    },
    {
      imageStr: '/elements/shared_computing.png',
      title: t('HOME_PAGE.INTRO_CARD_2_TITLE'),
      description: t('HOME_PAGE.INTRO_CARD_2_DESCRIPTION'),
    },
    {
      imageStr: '/elements/privacy_protection.png',
      title: t('HOME_PAGE.INTRO_CARD_3_TITLE'),
      description: t('HOME_PAGE.INTRO_CARD_3_DESCRIPTION'),
    },
    {
      imageStr: '/elements/connecting_world.png',
      title: t('HOME_PAGE.INTRO_CARD_4_TITLE'),
      description: t('HOME_PAGE.INTRO_CARD_4_DESCRIPTION'),
    },
  ];

  const introCards = introData.map((intro) => (
    <div
      key={intro.title}
      className="flex w-full flex-col border border-stroke-neutral-quaternary bg-white"
    >
      <div className="relative h-280px w-full">
        <Image
          src={intro.imageStr}
          fill
          style={{ objectFit: 'cover' }}
          alt={`${intro.title}_image`}
        />
      </div>
      <div className="flex flex-col items-start p-16px">
        <p className="text-xl font-bold text-text-neutral-primary">{intro.title}</p>
        <p className="text-base text-text-neutral-secondary">{intro.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      {/* Info:(20240808 - Julian) Frame */}
      <div className="relative h-800px w-screen">
        <Image src="/elements/frame.png" fill style={{ objectFit: 'cover' }} alt="" />
      </div>

      {/* Info:(20240808 - Julian) Welcome */}
      <div className="flex flex-col items-center bg-surface-neutral-main-background px-80px py-40px">
        {/* Info:(20240808 - Julian) Text */}
        <div className="flex flex-col items-center gap-24px">
          {/* Info:(20240808 - Julian) Title */}
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-text-brand-primary-lv2">
              {t('HOME_PAGE.WELCOME')}
            </p>
            <h1 className="text-64px font-semibold text-text-brand-secondary-lv1">
              {t('HOME_PAGE.ISUNCOIN')}
            </h1>
          </div>
          {/* Info:(20240808 - Julian) White Paper */}
          <a
            id="white-paper-btn"
            href={t('HOME_PAGE.WHITEPAPER_LINK')}
            download
            className="flex cursor-pointer items-center gap-4px rounded-full bg-button-surface-strong-secondary px-16px py-8px text-sm text-button-text-invert hover:bg-button-surface-strong-secondary-hover"
          >
            <p>{t('HOME_PAGE.WHITEPAPER')}</p>
            <Image src="/icons/book_open.svg" width={16} height={16} alt="book_icon" />
          </a>
          {/* Info:(20240808 - Julian) Description */}
          <div className="text-base text-text-neutral-primary">
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_1')}</p>
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_2')}</p>
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_3')}</p>
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_4')}</p>
          </div>
        </div>
        {/* Info:(20240808 - Julian) Intro cards */}
        <div className="grid w-full grid-flow-row grid-cols-1 gap-80px px-20px py-40px md:grid-cols-2">
          {introCards}
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
