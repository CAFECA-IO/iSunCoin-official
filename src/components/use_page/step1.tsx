import Image from 'next/image';

const Step1 = () => {
  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        Become a Global Citizen
      </h1>

      <div className="flex bg-surface-brand-primary-soft">
        <Image
          src="/elements/global_citizen.svg"
          alt="global_citizen"
          width={858}
          height={442}
        ></Image>
      </div>

      <p className="text-base font-normal text-text-neutral-secondary">
        {`The iSunCoin network offers a simple, secure, and internationally recognized blockchain identity known as iSunID. In the digital and globalized era, iSunID allows you to have an internationally valid blockchain identity. You can use iSunID for travel and visas in countries like Palau that recognize blockchain technology, access financial services, engage in business and commercial activities, and more.`}
      </p>
    </section>
  );
};

export default Step1;
