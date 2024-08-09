import Image from 'next/image';

const AutonomyPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      {/* HeroForAutonomyPage */}
      <section className="flex justify-center bg-surface-brand-primary-soft pt-60px">
        <Image
          src="/elements/hero_autonomy.svg"
          alt="hero_autonomy"
          width={861}
          height={539}
        ></Image>
      </section>

      {/* AutonomyBanner */}
      <section className="space-y-24px p-80px">
        <h1 className="text-center text-64px font-semibold text-text-brand-secondary-lv1">
          iSunCoin Autonomy
        </h1>
        <p className="text-base font-normal text-text-neutral-primary">
          iSunCoin adopts decentralized governance, allowing coin holders to participate in
          community governance through proposals and voting. Users holding iSunCoin automatically
          become community members, with the right to propose improvements to the iSunCoin
          ecosystem. After extensive community discussion and voting, decisions are written into
          smart contracts and executed automatically through community consensus-driven
          decision-making. This ensures the long-term healthy development of the project and
          attracts more users and developers to join.
        </p>
      </section>
    </main>
  );
};

export default AutonomyPageBody;
