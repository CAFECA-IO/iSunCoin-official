import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Deposit = () => {
  const { t } = useTranslation('common');

  return (
    <section className="flex flex-col items-center space-y-40px p-80px">
      <div className="space-y-16px">
        <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
          {t('AUTONOMY_PAGE.DEPOSIT_1_ISC_PER_VOTE')}
        </h1>
        <p className="text-2xl font-semibold text-text-neutral-secondary">
          {t('AUTONOMY_PAGE.DEPOSIT_1_ISC_PER_VOTE_DESCRIPTION')}
        </p>
      </div>

      <div className="flex justify-center gap-120px">
        {/* O */}
        <div className="flex flex-col items-center gap-8px">
          <div className="flex">
            <Image src="/elements/o_approval.svg" alt="o_approval" width={200} height={200}></Image>
          </div>
          <div className="space-y-8px p-16px text-center">
            <h4 className="text-xl font-semibold text-text-neutral-primary">
              {t('AUTONOMY_PAGE.APPROVAL')}
            </h4>
            <p className="text-text-neutral-secondary">
              {t('AUTONOMY_PAGE.REFUND_PROPOSAL_DEPOSITS')}, <br />
              {t('AUTONOMY_PAGE.REFUND_VOTING_DEPOSIT')}.
            </p>
          </div>
        </div>

        {/* X */}
        <div className="flex flex-col items-center gap-8px">
          <div className="flex">
            <Image
              src="/elements/x_rejection.svg"
              alt="x_rejection"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="space-y-8px p-16px text-center">
            <h4 className="text-xl font-semibold text-text-neutral-primary">
              {t('AUTONOMY_PAGE.REJECTION')}
            </h4>
            <p className="text-text-neutral-secondary">
              {t('AUTONOMY_PAGE.FORFEIT_PROPOSAL_DEPOSIT')} <br /> (
              {t('AUTONOMY_PAGE.GOES_TO_REWARD_POOL')}), <br />
              {t('AUTONOMY_PAGE.REFUND_VOTING_DEPOSIT')}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
