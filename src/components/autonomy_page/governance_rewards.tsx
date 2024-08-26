import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const GovernanceRewards = () => {
  const { t } = useTranslation('common');

  return (
    <section className="flex flex-col bg-surface-brand-primary-10 px-80px lg:flex-row lg:gap-80px">
      <div className="flex flex-col justify-center gap-24px py-10px lg:w-1/3">
        <h1 className="text-44px font-bold text-text-neutral-primary">
          {t('AUTONOMY_PAGE.GOVERNANCE_REWARDS')}
        </h1>
        <p className="text-base font-medium text-text-neutral-secondary">
          {t('AUTONOMY_PAGE.GOVERNANCE_REWARDS_DESCRIPTION')}
        </p>
      </div>

      <div className="flex justify-center lg:w-2/3">
        <Image src="/elements/cheer.svg" alt="cheer" width={746} height={568} />
      </div>
    </section>
  );
};

export default GovernanceRewards;
