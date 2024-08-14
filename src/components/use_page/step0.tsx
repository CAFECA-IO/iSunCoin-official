import Image from 'next/image';

const Step0 = () => {
  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        Safeguard Your Data Until the End of the World
      </h1>

      <div className="flex justify-center bg-surface-brand-primary-soft">
        <Image
          src="/elements/safeguard_your_data.svg"
          alt="safeguard_your_data"
          width={669}
          height={346}
        ></Image>
      </div>

      <p className="text-base font-normal text-text-neutral-secondary">
        {`iSunCoin offers state-of-the-art data storage solutions, providing you with a dedicated space on the iSunCoin network to store your data. Each piece of data is encrypted through multiple layers to ensure its security during transmission and storage. Using zero-knowledge proof technology, iSunCoin performs redundant backups and integrity verification across multiple nodes worldwide. As long as iSunCoin is operational, your data remains complete and secure.`}
      </p>
    </section>
  );
};

export default Step0;
