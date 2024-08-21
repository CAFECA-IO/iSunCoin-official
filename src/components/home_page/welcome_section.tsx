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
      className="flex w-full flex-col border border-stroke-neutral-quaternary bg-surface-neutral-surface-lv2"
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
      <div className="relative mt-60px h-300px w-screen md:h-600px">
        <Image src="/elements/frame.png" fill style={{ objectFit: 'cover' }} alt="" />
      </div>

      {/* Info:(20240808 - Julian) Welcome */}
      <div className="flex flex-col items-center bg-surface-neutral-main-background px-20px py-40px md:px-80px">
        {/* Info:(20240808 - Julian) Text */}
        <div className="flex flex-col items-center gap-24px">
          {/* Info:(20240808 - Julian) Title */}
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-text-brand-primary-lv2">
              {t('HOME_PAGE.WELCOME')}
            </p>
            <h1 className="text-3xl font-semibold text-text-brand-secondary-lv1 md:text-64px">
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="wrapper">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.94068 1.2511C3.95005 1.2511 3.95945 1.2511 3.96888 1.2511H4.23554L4.26722 1.2511C4.98706 1.25109 5.57273 1.25108 6.04808 1.28992C6.53913 1.33004 6.97811 1.41532 7.38668 1.62349C7.82112 1.84485 8.20067 2.15532 8.50221 2.53176C8.80375 2.15532 9.1833 1.84485 9.61774 1.62349C10.0263 1.41532 10.4653 1.33004 10.9563 1.28992C11.4317 1.25108 12.0174 1.25109 12.7372 1.2511L12.7689 1.2511H13.0355L13.0637 1.2511C13.413 1.25108 13.7192 1.25107 13.9723 1.27176C14.2411 1.29371 14.5154 1.34266 14.7814 1.47817C15.1734 1.67791 15.4921 1.99662 15.6918 2.38862C15.8273 2.65458 15.8763 2.92891 15.8982 3.19763C15.9189 3.45081 15.9189 3.757 15.9189 4.10627V4.13443V9.86777V9.89593C15.9189 10.2452 15.9189 10.5514 15.8982 10.8046C15.8763 11.0733 15.8273 11.3476 15.6918 11.6136C15.4921 12.0056 15.1734 12.3243 14.7814 12.524C14.5154 12.6595 14.2411 12.7085 13.9723 12.7304C13.7192 12.7511 13.413 12.7511 13.0638 12.7511H13.0355H12.119C11.2374 12.7511 10.9529 12.7587 10.7057 12.8338C10.4646 12.907 10.2404 13.0271 10.0457 13.1871C9.84613 13.3511 9.68195 13.5836 9.19295 14.3171L9.12625 14.4171C8.98715 14.6258 8.75297 14.7511 8.50221 14.7511C8.25144 14.7511 8.01727 14.6258 7.87817 14.4171L7.81147 14.3171C7.32247 13.5836 7.15829 13.3511 6.95872 13.1871C6.76407 13.0271 6.53977 12.907 6.29867 12.8338C6.0515 12.7587 5.76698 12.7511 4.88542 12.7511H3.96888H3.94067C3.59141 12.7511 3.28524 12.7511 3.03207 12.7304C2.76335 12.7085 2.48902 12.6595 2.22306 12.524C1.83106 12.3243 1.51235 12.0056 1.31261 11.6136C1.1771 11.3476 1.12815 11.0733 1.1062 10.8046C1.08551 10.5514 1.08553 10.2452 1.08554 9.89596L1.08554 9.86777V4.13443C1.08554 4.12501 1.08554 4.11561 1.08554 4.10624C1.08553 3.75698 1.08551 3.4508 1.1062 3.19763C1.12815 2.92891 1.1771 2.65458 1.31261 2.38862C1.51235 1.99662 1.83106 1.67791 2.22306 1.47817C2.48902 1.34266 2.76335 1.29371 3.03207 1.27176C3.28524 1.25107 3.59142 1.25108 3.94068 1.2511ZM7.75221 6.26777C7.75221 5.50865 7.75163 4.98443 7.71837 4.57738C7.68583 4.17909 7.62578 3.95948 7.5433 3.79762C7.35955 3.43697 7.06633 3.14376 6.70569 2.96C6.54383 2.87753 6.32422 2.81748 5.92593 2.78494C5.51888 2.75168 4.99465 2.7511 4.23554 2.7511H3.96888C3.58313 2.7511 3.33893 2.75168 3.15422 2.76678C2.97826 2.78115 2.9233 2.80487 2.90405 2.81468C2.79429 2.87061 2.70505 2.95984 2.64912 3.06961C2.63931 3.08886 2.61559 3.14382 2.60122 3.31978C2.58613 3.50449 2.58554 3.74869 2.58554 4.13443V9.86777C2.58554 10.2535 2.58613 10.4977 2.60122 10.6824C2.61559 10.8584 2.63931 10.9133 2.64912 10.9326C2.70505 11.0424 2.79429 11.1316 2.90405 11.1875C2.9233 11.1973 2.97826 11.2211 3.15422 11.2354C3.33893 11.2505 3.58313 11.2511 3.96888 11.2511H4.88542C4.92124 11.2511 4.95657 11.2511 4.99143 11.2511C5.72352 11.2507 6.24713 11.2505 6.73455 11.3985C7.10014 11.5096 7.44405 11.681 7.75221 11.9052V6.26777ZM9.25221 11.9052C9.56037 11.681 9.90428 11.5096 10.2699 11.3985C10.7573 11.2505 11.2809 11.2507 12.013 11.2511C12.0478 11.2511 12.0832 11.2511 12.119 11.2511H13.0355C13.4213 11.2511 13.6655 11.2505 13.8502 11.2354C14.0262 11.2211 14.0811 11.1973 14.1004 11.1875C14.2101 11.1316 14.2994 11.0424 14.3553 10.9326C14.3651 10.9133 14.3888 10.8584 14.4032 10.6824C14.4183 10.4977 14.4189 10.2535 14.4189 9.86777V4.13443C14.4189 3.74869 14.4183 3.50449 14.4032 3.31978C14.3888 3.14382 14.3651 3.08886 14.3553 3.06961C14.2994 2.95984 14.2101 2.87061 14.1004 2.81468C14.0811 2.80487 14.0262 2.78115 13.8502 2.76678C13.6655 2.75168 13.4213 2.7511 13.0355 2.7511H12.7689C12.0098 2.7511 11.4855 2.75168 11.0785 2.78494C10.6802 2.81748 10.4606 2.87753 10.2987 2.96C9.93808 3.14376 9.64487 3.43697 9.46111 3.79762C9.37864 3.95948 9.31859 4.17909 9.28605 4.57738C9.25279 4.98443 9.25221 5.50865 9.25221 6.26777V11.9052Z"
                />
              </g>
            </svg>
          </a>
          {/* Info:(20240808 - Julian) Description */}
          <div className="text-sm text-text-neutral-primary md:text-base">
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_1')}</p>
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_2')}</p>
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_3')}</p>
            <p>{t('HOME_PAGE.WELCOME_DESCRIPTION_4')}</p>
          </div>
        </div>
        {/* Info:(20240808 - Julian) Intro cards */}
        <div className="grid w-full grid-flow-row grid-cols-1 gap-40px px-20px py-40px md:grid-cols-2">
          {introCards}
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
