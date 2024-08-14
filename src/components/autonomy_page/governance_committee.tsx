import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const cards = [
  {
    title: 'AUTONOMY_PAGE.PROPOSAL_REVIEW',
    content: 'AUTONOMY_PAGE.PROPOSAL_REVIEW_CONTENT',
    imageUrl: '/elements/magnifying_glass.svg',
    alt: 'proposal review',
  },
  {
    title: 'AUTONOMY_PAGE.DECISION_MAKING',
    content: 'AUTONOMY_PAGE.DECISION_MAKING_CONTENT_2',
    imageUrl: '/elements/justice_hammer.svg',
    alt: 'decision-making',
  },
  {
    title: 'AUTONOMY_PAGE.COMMUNICATION',
    content: 'AUTONOMY_PAGE.COMMUNICATION_CONTENT',
    imageUrl: '/elements/business_handshake.svg',
    alt: 'communication',
  },
  {
    title: 'AUTONOMY_PAGE.RISK_MANAGEMENT',
    content: 'AUTONOMY_PAGE.RISK_MANAGEMENT_CONTENT',
    imageUrl: '/elements/shield_check.svg',
    alt: 'risk management',
  },
];

const CardsComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="grid grid-cols-2 gap-y-40px lg:w-1/2">
      {cards.map((card) => (
        <div key={card.title} className="flex flex-col items-center gap-8px">
          <div className="flex h-64px w-64px">
            <Image src={card.imageUrl} alt={card.alt} width={64} height={64} />
          </div>
          <div className="space-y-8px p-16px text-base font-normal text-text-neutral-secondary">
            <h2 className="text-center text-xl font-semibold text-text-neutral-primary">
              {t(card.title)}
            </h2>
            <p>{t(card.content)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const GovernanceCommittee = () => {
  const { t } = useTranslation('common');

  return (
    <section className="flex flex-col gap-60px p-80px lg:flex-row lg:gap-0">
      {/* Left Section */}
      <div className="flex flex-col justify-between lg:w-1/2">
        <h1 className="text-center text-48px font-semibold text-text-neutral-primary">
          {t('AUTONOMY_PAGE.GOVERNANCE_COMMITTEE')}
        </h1>

        {/* Top 5 Holders */}
        <div className="flex justify-center -space-x-56px pt-20px">
          <div className="flex w-140px">
            <Image src="/elements/person1.svg" alt="person1" width={140} height={140}></Image>
          </div>
          <div className="flex w-160px">
            <Image src="/elements/person2.svg" alt="person2" width={160} height={160}></Image>
          </div>
          <div className="z-10 flex w-180px">
            <Image src="/elements/person3.svg" alt="person3" width={180} height={180}></Image>
          </div>
          <div className="z-5 flex w-160px">
            <Image src="/elements/person4.svg" alt="person4" width={160} height={160}></Image>
          </div>
          <div className="flex w-140px">
            <Image src="/elements/person5.svg" alt="person5" width={140} height={140}></Image>
          </div>
        </div>

        <div>
          <h3 className="text-center text-4xl font-semibold text-text-neutral-primary">
            {t('AUTONOMY_PAGE.TOP_5_ISC_HOLDERS')}
          </h3>
          <p className="text-center font-semibold text-text-neutral-secondary">
            {t('AUTONOMY_PAGE.OTHERS_VIA_PROPOSALS')}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <CardsComponent />
    </section>
  );
};

export default GovernanceCommittee;
