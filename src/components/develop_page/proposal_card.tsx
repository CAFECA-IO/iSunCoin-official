import { useTranslation } from 'next-i18next';
import { IProposal } from '@/interfaces/proposal';
import { useGlobalCtx } from '@/contexts/global_context';

const ProposalCard = ({ proposal }: { proposal: IProposal }) => {
  const { t } = useTranslation('common');
  const { title, content, agreeCount, disagreeCount } = proposal;
  const { messageModalVisibleHandler, messageModalDataHandler } = useGlobalCtx();

  const agreeHandler = () => {
    messageModalDataHandler({
      title: `${t('MESSAGE_MODAL.AGREE_PROPOSAL_TITLE')} "${title}"`,
      message: t('MESSAGE_MODAL.AGREE_PROPOSAL_MESSAGE'),
      confirmBtnText: `${t('MESSAGE_MODAL.CONFIRM_BTN')} (1 ISC)`,
      confirmHandler: () => {
        // ToDo: (20240813 - Julian) Submit agree
      },
    });
    messageModalVisibleHandler();
  };

  const disagreeHandler = () => {
    messageModalDataHandler({
      title: `${t('MESSAGE_MODAL.DISAGREE_PROPOSAL_TITLE')} "${title}"`,
      message: t('MESSAGE_MODAL.DISAGREE_PROPOSAL_MESSAGE'),
      confirmBtnText: `${t('MESSAGE_MODAL.CONFIRM_BTN')} (1 ISC)`,
      confirmHandler: () => {
        // ToDo: (20240813 - Julian) Submit agree
      },
    });
    messageModalVisibleHandler();
  };

  return (
    <div className="flex flex-col divide-y divide-stroke-neutral-quaternary rounded-xs border border-stroke-neutral-quaternary bg-surface-neutral-surface-lv2">
      <div className="flex flex-1 flex-col gap-12px p-16px">
        <h3 className="text-xl font-bold text-text-neutral-primary">{title}</h3>
        <div className="line-clamp-3 h-72px text-text-neutral-secondary">{content}</div>
        <div className="grid grid-cols-2 gap-24px">
          <button
            id={`agree-button-${proposal.id}`}
            type="button"
            onClick={agreeHandler}
            className="w-full rounded-xs bg-button-surface-strong-primary px-16px py-8px text-sm text-button-text-primary-solid hover:bg-button-surface-strong-primary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable disabled:hover:bg-button-surface-strong-disable"
          >
            {t('DEVELOP_PAGE.AGREE_BUTTON')}
          </button>
          <button
            id={`disagree-button-${proposal.id}`}
            type="button"
            onClick={disagreeHandler}
            className="w-full rounded-xs bg-button-surface-strong-secondary px-16px py-8px text-sm text-button-text-invert hover:bg-button-surface-strong-secondary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable disabled:hover:bg-button-surface-strong-disable"
          >
            {t('DEVELOP_PAGE.DISAGREE_BUTTON')}
          </button>
        </div>
      </div>
      {/* Info:(20240813 - Julian) Votes */}
      <div className="grid grid-cols-2 gap-24px px-16px py-8px">
        <p className="text-base font-semibold text-text-neutral-primary">
          {t('DEVELOP_PAGE.AGREE_COUNT')}: {agreeCount} {t('DEVELOP_PAGE.VOTINGS')}
        </p>
        <p className="text-base font-semibold text-text-neutral-primary">
          {t('DEVELOP_PAGE.DISAGREE_COUNT')}: {disagreeCount} {t('DEVELOP_PAGE.VOTINGS')}
        </p>
      </div>
    </div>
  );
};

export default ProposalCard;
