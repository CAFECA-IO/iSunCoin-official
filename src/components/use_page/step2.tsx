import Image from 'next/image';

const Step2 = () => {
  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        Run Cloud Services
      </h1>

      <div className="flex justify-center bg-surface-brand-primary">
        <Image
          src="/elements/run_cloud_services.svg"
          alt="run_cloud_services"
          width={762}
          height={454}
        ></Image>
      </div>

      <p className="text-base font-normal text-text-neutral-secondary">
        {`iSunCoin supports Docker-based cloud service deployments, making it easy for developers and businesses to deploy and manage applications. You can also register a unique blockchain domain name for these services. Your cloud service will be randomly assigned to stable iSunCoin nodes to ensure high availability, providing users with a secure, efficient, and flexible cloud service experience.`}
      </p>
    </section>
  );
};

export default Step2;
