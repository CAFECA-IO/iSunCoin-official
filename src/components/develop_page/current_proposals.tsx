import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import ProposalCard from '@/components/develop_page/proposal_card';
import { useProposalCtx } from '@/contexts/proposal_context';
import { IProposal } from '@/interfaces/proposal';
import { ISUNCOIN_API_V1 } from '@/constants/url';

const CurrentProposals = () => {
  const { t } = useTranslation('common');
  const [proposalList, setProposalList] = useState<IProposal[]>([]);

  useEffect(() => {
    fetch(ISUNCOIN_API_V1.PROPOSAL)
      .then((response) => response.json())
      .then((data) => setProposalList(data));
  }, []);

  const { isDuringProposal, currentPhase, remainingBlocks } = useProposalCtx();

  const displayCurrentPhase = currentPhase.toString().padStart(6, '0');

  const displayProposalList =
    proposalList && proposalList.length > 0 ? (
      proposalList.map((proposal) => <ProposalCard key={proposal.id} proposal={proposal} />)
    ) : (
      <div className="col-span-2 flex w-full flex-col items-center text-xl font-semibold text-card-text-tertiary">
        <Image src="/elements/empty.svg" alt="Empty" width={80} height={90} />
        <p>{t('DEVELOP_PAGE.NOT_PROPOSALS_YET')}</p>
      </div>
    );

  return (
    // Info:(20240815 - Julian) 如果不是提案期間，則 CurrentProposals 將顯示在最上方
    <div id="proposals" className={`relative p-80px ${isDuringProposal ? '' : 'order-first'}`}>
      {/* Info:(20240813 - Julian) Background */}
      <div className="absolute left-0 top-0 h-550px w-full bg-surface-brand-primary-soft"></div>
      {/* Info:(20240813 - Julian) Content */}
      <div className="relative">
        {/* Info:(20240813 - Julian) Title & Image */}
        <div className="flex items-center justify-between px-30px">
          {/* Info:(20240813 - Julian) Title */}
          <div className="flex flex-col">
            <p className="text-lg font-bold text-text-brand-primary-lv1">
              {t('DEVELOP_PAGE.PHASE_1')} {displayCurrentPhase} {t('DEVELOP_PAGE.PHASE_2')}
            </p>
            <h2 className="text-36px font-semibold text-text-neutral-secondary">
              {t('DEVELOP_PAGE.VOTINGS_END_1')}
              <span className="text-64px font-bold text-text-neutral-primary">
                {' '}
                {remainingBlocks}{' '}
              </span>
              {t('DEVELOP_PAGE.VOTINGS_END_2')}
            </h2>
          </div>
          {/* Info:(20240813 - Julian) Image */}
          <Image
            src="/elements/proposal.png"
            alt="current_proposal_picture"
            width={515}
            height={308}
          />
        </div>
        {/* Info:(20240813 - Julian) Block */}
        <div className="relative z-10 -mt-50px flex flex-col items-center gap-24px rounded-lg bg-surface-neutral-surface-lv1 px-32px py-40px shadow-downDropShadowL">
          <h2 className="text-44px font-bold text-text-neutral-primary">
            {t('DEVELOP_PAGE.CURRENT_PROPOSALS')}
          </h2>
          <div className="grid w-full grid-flow-row grid-cols-1 gap-20px py-20px md:grid-cols-2">
            {displayProposalList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProposals;
