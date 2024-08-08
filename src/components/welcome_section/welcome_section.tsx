import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const WelcomeSection = () => {
  const { t } = useTranslation('common');

  const introData = [
    {
      imageStr: '/elements/open_and_free.png',
      title: 'Open and Free',
      description:
        'iSunCoin is an open and free internet technology that connects all computers to redefine the standard unit of computing power and provides an operational environment for tens of thousands of decentralized applications.',
    },
    {
      imageStr: '/elements/shared_computing.png',
      title: 'Shared Computing Power',
      description:
        'iSunCoin connects all computers to redefine the standard unit of computing power and provides an operational environment for tens of thousands of decentralized applications.',
    },
    {
      imageStr: '/elements/privacy_protection.png',
      title: 'Privacy Protection',
      description:
        'iSunCoin implements an accounting vector standard with zero-knowledge proof, allowing public information exchange in a standardized and privacy-protected format.',
    },
    {
      imageStr: '/elements/connecting_world.png',
      title: 'Connecting the World',
      description:
        'iSunCoin can establish a globally accessible public ledger, easily creating application services for the entire world.',
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
            <p className="text-xl font-bold text-text-brand-primary-lv2">Welcome to</p>
            <h1 className="text-64px font-semibold text-text-brand-secondary-lv1">iSunCoin</h1>
          </div>
          {/* Info:(20240808 - Julian) White Paper */}

          <a
            id="white-paper-btn"
            href={t('HOME_PAGE.WHITEPAPER_LINK')}
            download
            className="flex cursor-pointer items-center gap-4px rounded-full bg-button-surface-strong-secondary px-16px py-8px text-sm text-button-text-invert hover:bg-button-surface-strong-secondary-hover"
          >
            <p>White Paper</p>
            <Image src="/icons/book_open.svg" width={16} height={16} alt="book_icon" />
          </a>
          {/* Info:(20240808 - Julian) Description */}
          <div className="text-base text-text-neutral-primary">
            <p>
              iSunCoin is an open and free internet technology that connects all computers to
              redefine the standard unit of computing power and provides an operational environment
              for tens of thousands of decentralized applications.
            </p>
            <p>
              It implements an accounting vector standard with zero-knowledge proof, allowing people
              to publicly exchange information in a standardized and privacy-protected format. It
              can establish a globally accessible public ledger and also enable people to create and
              run decentralized application services on the platform.
            </p>
            <p>
              The distributed ledger technology of iSunCoin is highly flexible, allowing users to
              create any form of program logic, realizing systems we have yet to imagine.
            </p>
            <p>
              Any computer can run iSunCoin, providing computing power to the platform and earning
              rewards.
            </p>
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
