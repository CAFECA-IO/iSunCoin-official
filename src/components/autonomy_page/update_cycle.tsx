/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const cards = [
  {
    title: 'System Update',
    content: 'Every 1,310,720 blocks.',
    imageUrl: '/elements/system_update.svg',
    alt: 'system_update',
  },
  {
    title: 'Decision-Making',
    content:
      'Community members can participate in decision-making regarding the future development direction of iSunCoin through proposals and voting.Community members who participate in governance and provide effective, adopted suggestions will receive governance rewards in the next update cycle.',
    imageUrl: '/elements/decision_making.svg',
    alt: 'decision_making',
  },
  {
    title: 'Execution',
    content:
      'Proposals approved by community resolution will be executed by a dedicated team, which will regularly report execution progress to the community. To ensure system stability, the execution team will strictly evaluate each plan and adjust the execution schedule flexibly.',
    imageUrl: '/elements/execution.svg',
    alt: 'execution',
  },
  {
    title: 'Prioritization',
    content:
      'Proposals will be prioritized for execution based on the difference between approval and disapproval votes. If there are too many proposals to complete in the current cycle, they will be carried over to the next cycle.',
    imageUrl: '/elements/prioritization.svg',
    alt: 'prioritization',
  },
];

const displayCards = cards.map((card) => {
  return (
    <div
      key={card.title}
      className="basis-580px rounded border border-stroke-neutral-quaternary shadow-downDropShadowS"
    >
      <div>
        <Image
          src={card.imageUrl}
          width={580}
          height={280}
          alt={card.alt}
          className="rounded-t"
        ></Image>
      </div>
      <div className="p-16px">
        <h3 className="text-xl font-bold text-text-neutral-primary">{card.title}</h3>
        <p className="text-base font-normal text-text-neutral-secondary">{card.content}</p>
      </div>
    </div>
  );
});

const UpdateCycle = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-40px p-80px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        Update Cycle
      </h1>

      {/* cards */}
      <div className="flex flex-wrap justify-center gap-40px">{displayCards}</div>
    </section>
  );
};

export default UpdateCycle;
