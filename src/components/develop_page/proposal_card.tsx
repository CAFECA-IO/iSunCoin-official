import { useTranslation } from 'next-i18next';
import { IProposal } from '@/interfaces/proposal';
import { useGlobalCtx } from '@/contexts/global_context';
import { ToastPosition, ToastType } from '@/interfaces/toastify';
import { ToastId } from '@/constants/toastify';
import { ISUNCOIN_API_V1 } from '@/constants/url';

const ProposalCard = ({ proposal }: { proposal: IProposal }) => {
  const { t } = useTranslation('common');
  const { id, title, content, agreeCount, disagreeCount } = proposal;
  const { messageModalVisibleHandler, messageModalDataHandler, toastHandler } = useGlobalCtx();

  const voteHandler = async (isAgree: boolean) => {
    const voteType = isAgree ? 'agree' : 'disagree';

    const response = await fetch(ISUNCOIN_API_V1.VOTE.replace('[proposalId]', `${id}`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: voteType,
      }),
    });

    if (response.ok) {
      // Info: (20240816 - Julian) Show toast
      toastHandler({
        id: `${ToastId.VOTING_SUCCESS}-${id}`,
        type: ToastType.SUCCESS,
        content: `${t('TOAST.VOTING_SUCCESS')} (${title})`,
        closeable: true,
        position: ToastPosition.BOTTOM_LEFT,
      });
    }
  };

  const agreeHandler = () => {
    messageModalDataHandler({
      title: `${t('MESSAGE_MODAL.AGREE_PROPOSAL_TITLE')} "${title}"`,
      message: t('MESSAGE_MODAL.AGREE_PROPOSAL_MESSAGE'),
      confirmBtnText: `${t('MESSAGE_MODAL.CONFIRM_BTN')} (1 ISC)`,
      confirmHandler: () => voteHandler(true), // Info:(20240816 - Julian) 投贊成票
    });
    messageModalVisibleHandler();
  };

  const disagreeHandler = () => {
    messageModalDataHandler({
      title: `${t('MESSAGE_MODAL.DISAGREE_PROPOSAL_TITLE')} "${title}"`,
      message: t('MESSAGE_MODAL.DISAGREE_PROPOSAL_MESSAGE'),
      confirmBtnText: `${t('MESSAGE_MODAL.CONFIRM_BTN')} (1 ISC)`,
      confirmHandler: () => voteHandler(false), // Info:(20240816 - Julian) 投反對票
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
