import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import DecentralizedGovernance from '@/components/autonomy_page/decentralized_governance';
import UpdateCycle from '@/components/autonomy_page/update_cycle';
import Proposals from '@/components/autonomy_page/proposals';
import GovernanceCommittee from '@/components/autonomy_page/governance_committee';
import Deposit from '@/components/autonomy_page/deposit';
import GovernanceRewards from '@/components/autonomy_page/governance_rewards';
import ContributeSection from '@/components/common/contribute_section';

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

      {/* Decentralized Governance */}
      <DecentralizedGovernance />

      {/* Update Cycle */}
      <UpdateCycle />

      {/* Proposals */}
      <Proposals />

      {/* Governance Committee */}
      <GovernanceCommittee />

      {/* Deposit */}
      <Deposit />

      {/* Governance Rewards */}
      <GovernanceRewards />

      <ContributeSection />
    </main>
  );
};

export default AutonomyPageBody;
