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
    title: 'Core Protocol Upgrades',
    content:
      'Changes directly affecting the underlying blockchain architecture, including but not limited to zero-knowledge proof consensus and virtual machines.',
  },
  {
    title: 'Functional Upgrades',
    content:
      'Additions or modifications to blockchain features, including but not limited to cross-chain technology support and native exchange contracts.',
  },
  {
    title: 'Parameter Adjustments',
    content:
      'Changes to various blockchain parameters to optimize network performance, such as block size and transaction fees.',
  },
  {
    title: 'Governance Committee Adjustments',
    content:
      'Changes to the composition, responsibilities, and authority of the governance committee, including adding or removing committee members.',
  },
];

const TopicsComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-56px md:grid-cols-2">
      {topics.map((topic) => (
        <div
          key={topic.title}
          className="space-y-16px rounded-lg bg-surface-neutral-surface-lv2 px-36px py-16px shadow-downDropShadowXS"
        >
          <h2 className="text-xl font-semibold text-text-neutral-primary">{topic.title}</h2>
          <p className="text-text-neutral-primary">{topic.content}</p>
        </div>
      ))}
    </div>
  );
};

const Proposals = () => {
  return (
    <section className="space-y-40px p-80px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">Proposals</h1>

      {/* 4 icon cards */}
      <CardsComponent />

      <h2 className="text-center text-2xl font-semibold text-text-neutral-primary">
        Proposals are limited to the following topics:
      </h2>

      {/* 4 topics */}
      <TopicsComponent />
    </section>
  );
};

export default Proposals;
