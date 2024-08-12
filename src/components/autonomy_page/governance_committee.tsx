import Image from 'next/image';

const cards = [
  {
    title: 'Proposal Review',
    content: 'Reviewing community member proposals to ensure their reasonableness and feasibility.',
    imageUrl: '/elements/magnifying_glass.svg',
    alt: 'proposal review',
  },
  {
    title: 'Decision-Making',
    content: 'Voting on major decisions and representing the community in making decisions.',
    imageUrl: '/elements/justice_hammer.svg',
    alt: 'decision-making',
  },
  {
    title: 'Communication',
    content: 'Maintaining close communication with community members and collecting feedback.',
    imageUrl: '/elements/business_handshake.svg',
    alt: 'communication',
  },
  {
    title: 'Risk Management',
    content: 'Assessing project risks and formulating corresponding countermeasures.',
    imageUrl: '/elements/shield_check.svg',
    alt: 'risk management',
  },
];

const CardsComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-y-40px lg:w-1/2">
      {cards.map((card) => (
        <div key={card.title} className="flex flex-col items-center gap-8px">
          <div className="flex h-64px w-64px">
            <Image src={card.imageUrl} alt={card.alt} width={64} height={64} />
          </div>
          <div className="space-y-8px p-16px text-base font-normal text-text-neutral-secondary">
            <h2 className="text-center text-xl font-semibold text-text-neutral-primary">
              {card.title}
            </h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const GovernanceCommittee = () => {
  return (
    <section className="flex flex-col gap-60px p-80px lg:flex-row lg:gap-0">
      {/* Left Section */}
      <div className="flex flex-col justify-between lg:w-1/2">
        <h1 className="text-center text-48px font-semibold text-text-neutral-primary">
          Governance Committee
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
            Top 5 ISC holders
          </h3>
          <p className="text-center font-semibold text-text-neutral-secondary">
            others via proposals.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <CardsComponent />
    </section>
  );
};

export default GovernanceCommittee;
