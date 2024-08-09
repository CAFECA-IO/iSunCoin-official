import Image from 'next/image';
import DecentralizedGovernance from '@/components/autonomy_page/decentralized_governance';
import { useTranslation } from 'next-i18next';

const AutonomyPageBody = () => {
  const { t } = useTranslation('common');

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
          {t('AUTONOMY_PAGE.AUTONOMY_TITLE')}
        </h1>
        <p className="text-base font-normal text-text-neutral-primary">
          {t('AUTONOMY_PAGE.AUTONOMY_DESCRIPTION')}
        </p>
      </section>

      {/* DecentralizedGovernance */}
      <DecentralizedGovernance />
    </main>
  );
};

export default AutonomyPageBody;
