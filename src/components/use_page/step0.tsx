import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Step0 = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('USE_PAGE.SAFEGUARD_YOUR_DATA_UNTIL_THE_END_OF_THE_WORLD')}
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
        {t('USE_PAGE.SAFEGUARD_YOUR_DATA_UNTIL_THE_END_OF_THE_WORLD_DESCRIPTION')}
      </p>
    </section>
  );
};

export default Step0;
