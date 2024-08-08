import Image from 'next/image';

const Introduction = () => {
  return (
    <section id="about" className="mx-auto flex h-660px max-w-1440px flex-col gap-64px p-80px">
      <div className="flex flex-col gap-8px">
        <p className="text-center text-sm font-medium text-text-brand-primary-lv2">INTRODUCTION</p>
        <p className="text-center text-48px font-semibold text-text-brand-secondary-lv1">
          What is iSunCoin
        </p>
      </div>
      <div className="flex justify-center gap-16px text-center text-lg font-medium text-text-neutral-primary">
        <div className="flex w-416px flex-col items-center gap-16px rounded-sm bg-surface-neutral-surface-lv1 px-20px py-16px shadow-downDropShadowS">
          <Image
            src="/v1/elements/introduction_computer.svg"
            alt="introduction"
            width={64}
            height={64}
          />
          <p>{`A blockchain platform designed for edge computing. Through smart contracts, you can ask nodes in the entire network to perform various applications such as data storage, big data analysis, and artificial intelligence computations.`}</p>
        </div>
        <div className="flex w-416px flex-col items-center gap-16px rounded-sm bg-surface-neutral-surface-lv1 px-20px py-16px shadow-downDropShadowS">
          <Image
            src="/v1/elements/introduction_share_link.svg"
            alt="introduction"
            width={64}
            height={64}
          />
          <p>{`iSunCoin serves as a platform for data transactions and sharing, leveraging zero-knowledge proof technology to securely store data on the blockchain. Smart contracts  authorize users to access the data they require and receive reasonable rewards.`}</p>
        </div>
        <div className="flex w-416px flex-col items-center gap-16px rounded-sm bg-surface-neutral-surface-lv1 px-20px py-16px shadow-downDropShadowS">
          <Image
            src="/v1/elements/introduction_calculator.svg"
            alt="introduction"
            width={64}
            height={64}
          />
          <p>{`iSunCoin is designed as a platform for accounting and auditing. Enterprises can achieve continuous auditing by uploading specified data, getting technical assistance provided by the platform.`}</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
