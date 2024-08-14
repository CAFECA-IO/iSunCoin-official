import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Step2 = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('USE_PAGE.RUN_CLOUD_SERVICES')}
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
        {t('USE_PAGE.RUN_CLOUD_SERVICES_DESCRIPTION')}
      </p>
    </section>
  );
};

export default Step2;
