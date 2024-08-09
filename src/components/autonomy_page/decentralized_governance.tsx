import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const DecentralizedGovernance = () => {
  const { t } = useTranslation('common');
  const blocksAmount = '32,768';

  return (
    <section className="flex justify-between md:p-10px lg:p-80px">
      {/* ===== Left Section ===== */}
      <div>
        <div className="space-y-24px py-32px">
          <h1 className="text-44px font-semibold text-text-neutral-primary">
            {t('AUTONOMY_PAGE.DECENTRALIZED_GOVERNANCE')}
          </h1>
          <ul className="list-inside list-disc text-lg font-medium text-text-neutral-secondary">
            <li>{t('AUTONOMY_PAGE.PARTICIPATION')}</li>
            <li>{t('AUTONOMY_PAGE.COMMUNITY_MEMBERS')}</li>
          </ul>
        </div>

        {/* Small Cover */}
        <div className="flex w-fit bg-surface-brand-primary-soft pb-14px pt-24px">
          <Image
            src="/elements/decentralized_governance.svg"
            alt="decentralized_governance"
            width={602}
            height={360}
          ></Image>
        </div>
      </div>

      {/* ===== Right Section ===== */}
      <div className="flex flex-col items-start justify-between py-60px pl-20px font-semibold text-text-neutral-primary">
        {/* 1 */}
        <div className="flex items-center md:gap-10px lg:gap-30px">
          {/* circle */}
          <div className="flex h-28px w-28px shrink-0 items-center justify-center rounded-full border border-stroke-brand-secondary text-sm">
            <p>1</p>
          </div>
          {/* content */}
          <p className="md:text-xs lg:text-lg">
            {t('AUTONOMY_PAGE.SUBMIT_PROPOSALS_WITH_100_ISC_DEPOSIT')}
          </p>
        </div>

        {/* Line */}
        <div className="ml-13px w-1px grow bg-stroke-brand-primary"></div>

        {/* 2 */}
        <div className="flex items-center md:gap-10px lg:gap-30px">
          {/* circle */}
          <div className="flex h-28px w-28px shrink-0 items-center justify-center rounded-full border border-stroke-brand-secondary text-sm">
            <p>2</p>
          </div>
          {/* content */}
          <p className="md:text-xs lg:text-lg">
            {t('AUTONOMY_PAGE.VOTING_AFTER')} {blocksAmount} {t('AUTONOMY_PAGE.BLOCKS')}
          </p>
        </div>

        {/* Line */}
        <div className="ml-13px w-1px grow bg-stroke-brand-primary"></div>

        {/* 3 */}
        <div className="flex md:gap-10px lg:gap-30px">
          {/* circle */}
          <div className="flex h-28px w-28px shrink-0 items-center justify-center rounded-full border border-stroke-brand-secondary text-sm">
            <p>3</p>
          </div>
          {/* content */}
          <p className="md:text-xs lg:text-lg">
            {t('AUTONOMY_PAGE.APPROVED_PROPOSALS_1000_VOTES_GET_DEPOSIT_REFUNDED')} <br />
            {t('AUTONOMY_PAGE.REJECTED_PROPOSALS_FORFEIT_DEPOSIT_GOES_TO_REWARD_POOL')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedGovernance;
