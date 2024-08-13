import { IProposal } from '@/interfaces/proposal';

const ProposalCard = ({ proposal }: { proposal: IProposal }) => {
  const { title, content, agreeCount, disagreeCount } = proposal;
  return (
    <div className="flex flex-col divide-y divide-stroke-neutral-quaternary rounded-xs border border-stroke-neutral-quaternary bg-surface-neutral-surface-lv2">
      <div className="flex flex-1 flex-col gap-12px p-16px">
        <h3 className="text-xl font-bold text-text-neutral-primary">{title}</h3>
        <div className="line-clamp-3 h-72px text-text-neutral-secondary">{content}</div>
        <div className="grid grid-cols-2 gap-24px">
          <button
            id={`agree-button-${proposal.id}`}
            type="button"
            className="w-full rounded-xs bg-button-surface-strong-primary px-16px py-8px text-sm text-button-text-primary-solid hover:bg-button-surface-strong-primary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable disabled:hover:bg-button-surface-strong-disable"
          >
            Agree
          </button>
          <button
            id={`disagree-button-${proposal.id}`}
            type="button"
            className="w-full rounded-xs bg-button-surface-strong-secondary px-16px py-8px text-sm text-button-text-invert hover:bg-button-surface-strong-secondary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable disabled:hover:bg-button-surface-strong-disable"
          >
            Disagree
          </button>
        </div>
      </div>
      {/* Info:(20240813 - Julian) Votes */}
      <div className="grid grid-cols-2 gap-24px px-16px py-8px">
        <p className="text-base font-semibold text-text-neutral-primary">
          Agree: {agreeCount} votings
        </p>
        <p className="text-base font-semibold text-text-neutral-primary">
          Disagree: {disagreeCount} votings
        </p>
      </div>
    </div>
  );
};

export default ProposalCard;
