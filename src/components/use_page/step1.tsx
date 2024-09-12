import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Step1 = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('USE_PAGE.BECOME_A_GLOBAL_CITIZEN')}
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
        {t('USE_PAGE.BECOME_A_GLOBAL_CITIZEN_DESCRIPTION')}
      </p>
    </section>
  );
};

export default Step1;
