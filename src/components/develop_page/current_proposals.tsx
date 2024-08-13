import Image from 'next/image';
import { dummyProposals } from '@/interfaces/proposal';
import ProposalCard from '@/components/develop_page/proposal_card';

const CurrentProposals = () => {
  const proposalList = dummyProposals.map((proposal) => (
    <ProposalCard key={proposal.id} proposal={proposal} />
  ));

  return (
    <div className="relative p-80px">
      {/* Info:(20240813 - Julian) Background */}
      <div className="absolute left-0 top-0 h-550px w-full bg-surface-brand-primary-soft"></div>
      {/* Info:(20240813 - Julian) Content */}
      <div className="relative">
        {/* Info:(20240813 - Julian) Title & Image */}
        <div className="flex items-center justify-between px-30px">
          {/* Info:(20240813 - Julian) Title */}
          <div className="flex flex-col">
            <p className="text-lg font-bold text-text-brand-primary-lv1">Phase 000001</p>
            <h2 className="text-36px font-semibold text-text-neutral-secondary">
              Votings End in
              <span className="text-64px font-bold text-text-neutral-primary"> 655360</span> Blocks
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
          <h2 className="text-44px font-bold text-text-neutral-primary">Current Proposals</h2>
          <div className="grid w-full grid-flow-row grid-cols-1 gap-20px py-20px md:grid-cols-2">
            {proposalList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProposals;
