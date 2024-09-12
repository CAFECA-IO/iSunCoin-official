import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const cards = [
  {
    title: 'AUTONOMY_PAGE.ELIGIBILITY',
    description: 'AUTONOMY_PAGE.ELIGIBILITY_DESCRIPTION',
    descriptionSecond: '',
    imageUrl: '/elements/eligibility_pig.svg',
    alt: 'eligibility',
  },
  {
    title: 'AUTONOMY_PAGE.DEPOSIT',
    description: 'AUTONOMY_PAGE.DEPOSIT_DESCRIPTION',
    descriptionSecond: '',
    imageUrl: '/elements/deposit_coin.svg',
    alt: 'deposit',
  },
  {
    title: 'AUTONOMY_PAGE.VOTING',
    description: 'AUTONOMY_PAGE.VOTING_DESCRIPTION',
    descriptionSecond: '',
    imageUrl: '/elements/voting_window.svg',
    alt: 'voting',
  },
  {
    title: 'AUTONOMY_PAGE.ADOPTION',
    description: 'AUTONOMY_PAGE.ADOPTION_DESCRIPTION',
    descriptionSecond: 'AUTONOMY_PAGE.ADOPTION_DESCRIPTION_SECOND',
    imageUrl: '/elements/adoption_cheer.svg',
    alt: 'adoption',
  },
];

const CardsComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="grid grid-cols-1 gap-40px md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="flex flex-col items-center">
          <Image src={card.imageUrl} alt={card.alt} width={204} height={200} />
          <div className="space-y-8px pb-16px pt-24px text-center text-base font-normal text-text-neutral-secondary">
            <h2 className="text-28px font-bold text-text-neutral-primary">{t(card.title)}</h2>
            <p>{t(card.description)}</p>
            {card.descriptionSecond && <p>{t(card.descriptionSecond)}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

const topics = [
  {
    title: 'AUTONOMY_PAGE.CORE_PROTOCOL_UPGRADES',
    content: 'AUTONOMY_PAGE.CORE_PROTOCOL_UPGRADES_CONTENT',
  },
  {
    title: 'AUTONOMY_PAGE.FUNCTIONAL_UPGRADES',
    content: 'AUTONOMY_PAGE.FUNCTIONAL_UPGRADES_CONTENT',
  },
  {
    title: 'Parameter Adjustments',
    content: 'AUTONOMY_PAGE.PARAMETER_ADJUSTMENTS_CONTENT',
  },
  {
    title: 'AUTONOMY_PAGE.GOVERNANCE_COMMITTEE_ADJUSTMENTS',
    content: 'AUTONOMY_PAGE.GOVERNANCE_COMMITTEE_ADJUSTMENTS_CONTENT',
  },
];

const TopicsComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="grid grid-cols-1 gap-56px md:grid-cols-2">
      {topics.map((topic) => (
        <div
          key={topic.title}
          className="space-y-16px rounded-lg bg-surface-neutral-surface-lv2 px-36px py-16px shadow-downDropShadowXS"
        >
          <h2 className="text-xl font-semibold text-text-neutral-primary">{t(topic.title)}</h2>
          <p className="text-text-neutral-primary">{t(topic.content)}</p>
        </div>
      ))}
    </div>
  );
};

const Proposals = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-40px p-80px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('AUTONOMY_PAGE.PROPOSALS')}
      </h1>

      {/* 4 icon cards */}
      <CardsComponent />

      <h2 className="text-center text-2xl font-semibold text-text-neutral-primary">
        {t('AUTONOMY_PAGE.PROPOSALS_ARE_LIMITED_TO_THE_FOLLOWING_TOPICS')}:
      </h2>

      {/* 4 topics */}
      <TopicsComponent />
    </section>
  );
};

export default Proposals;
