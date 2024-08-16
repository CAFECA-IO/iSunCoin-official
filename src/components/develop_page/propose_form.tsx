import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useGlobalCtx } from '@/contexts/global_context';
import { useProposalCtx } from '@/contexts/proposal_context';
import { ToastType, ToastPosition } from '@/interfaces/toastify';
import { ToastId } from '@/constants/toastify';

const ProposeForm = () => {
  const { t } = useTranslation('common');
  const { messageModalVisibleHandler, messageModalDataHandler, toastHandler } = useGlobalCtx();
  const { isDuringProposal, currentPhase, remainingBlocks } = useProposalCtx();

  const displayNextPhase = (currentPhase + 1).toString().padStart(6, '0');

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    messageModalDataHandler({
      title: t('MESSAGE_MODAL.NEW_PROPOSAL_TITLE'),
      message: t('MESSAGE_MODAL.NEW_PROPOSAL_MESSAGE'),
      confirmBtnText: `${t('MESSAGE_MODAL.CONFIRM_BTN')} (100 ISC)`,
      confirmHandler: () => {
        // ToDo: (20240813 - Julian) Submit proposal
        // Info: (20240815 - Julian) Show toast & close message modal
        toastHandler({
          id: `${ToastId.PROPOSAL_SUCCESS}`,
          type: ToastType.SUCCESS,
          content: (
            <div>
              {t('TOAST.PROPOSE_TOPIC_SUCCESS_1')}
              <span className="font-bold"> {inputTitle} </span>
              {t('TOAST.PROPOSE_TOPIC_SUCCESS_2')}
            </div>
          ),
          closeable: true,
          position: ToastPosition.BOTTOM_LEFT,
        });
        messageModalVisibleHandler();
      },
    });
    messageModalVisibleHandler();
  };

  return (
    // Info:(20240815 - Julian) 如果是在提案期間，則 ProposeForm 將顯示在最上方
    <div id="propose" className={`relative p-80px ${isDuringProposal ? 'order-first' : ''}`}>
      {/* Info:(20240813 - Julian) Background */}
      <div className="absolute left-0 top-0 h-550px w-full bg-surface-brand-primary-soft"></div>
      {/* Info:(20240813 - Julian) Content */}
      <div className="relative">
        {/* Info:(20240813 - Julian) Title & Image */}
        <div className="flex items-center justify-between px-30px">
          {/* Info:(20240813 - Julian) Title */}
          <div className="flex flex-col">
            <p className="text-lg font-bold text-text-brand-primary-lv1">
              {t('DEVELOP_PAGE.PHASE_1')} {displayNextPhase} {t('DEVELOP_PAGE.PHASE_2')}
            </p>
            <h2 className="text-36px font-semibold text-text-neutral-secondary">
              {t('DEVELOP_PAGE.PROPOSALS_START_1')}
              <span className="text-64px font-bold text-text-neutral-primary">
                {' '}
                {remainingBlocks}{' '}
              </span>
              {t('DEVELOP_PAGE.PROPOSALS_START_2')}
            </h2>
          </div>
          {/* Info:(20240813 - Julian) Image */}
          <Image
            src="/elements/blocks.png"
            alt="current_proposal_picture"
            width={305}
            height={257}
          />
        </div>
        {/* Info:(20240813 - Julian) Block */}
        <div className="relative z-10 mt-40px flex flex-col items-center gap-24px rounded-lg bg-surface-neutral-surface-lv1 p-48px shadow-downDropShadowL">
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-48px">
            {/* Info:(20240813 - Julian) Title */}
            <div className="flex flex-col items-center gap-8px">
              <h2 className="text-44px font-semibold text-text-neutral-primary">
                {t('DEVELOP_PAGE.FORM_TITLE')}
              </h2>
              <p className="text-lg text-text-neutral-secondary">
                {t('DEVELOP_PAGE.FORM_SUBTITLE')}
              </p>
            </div>
            {/* Info:(20240813 - Julian) Input */}
            <div className="flex w-full flex-col items-stretch gap-16px">
              {/* Info:(20240813 - Julian) Proposal Title */}
              <div className="flex flex-col items-start gap-8px">
                <p className="text-sm font-semibold text-input-text-primary">
                  {t('DEVELOP_PAGE.FORM_TITLE_TEXT')}
                </p>
                <input
                  id="proposal-title-input"
                  type="text"
                  placeholder={t('DEVELOP_PAGE.FORM_TITLE_PLACEHOLDER')}
                  value={inputTitle}
                  onChange={handleTitleChange}
                  className="w-full rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base outline-none placeholder:text-input-text-input-placeholder disabled:border-input-stroke-disable disabled:bg-input-surface-input-disable disabled:placeholder:text-input-text-disable"
                  required
                  disabled={!isDuringProposal}
                />
              </div>
              {/* Info:(20240813 - Julian) Proposal Content */}
              <div className="flex flex-col items-start gap-8px">
                <p className="text-sm font-semibold text-input-text-primary">
                  {t('DEVELOP_PAGE.FORM_CONTENT_TEXT')}
                </p>
                <textarea
                  id="proposal-content-input"
                  placeholder={t('DEVELOP_PAGE.FORM_CONTENT_PLACEHOLDER')}
                  value={inputContent}
                  onChange={handleContentChange}
                  className="w-full rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px text-base outline-none placeholder:text-input-text-input-placeholder disabled:border-input-stroke-disable disabled:bg-input-surface-input-disable disabled:placeholder:text-input-text-disable"
                  required
                  disabled={!isDuringProposal}
                />
              </div>
              {/* Info:(20240813 - Julian) Checkbox */}
              <label
                htmlFor="proposal-checkbox"
                className={`flex items-center gap-8px text-sm ${isDuringProposal ? 'text-checkbox-text-primary' : 'text-checkbox-text-disable'}`}
              >
                <input
                  id="proposal-checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="relative h-16px w-16px appearance-none rounded-xxs border border-navyBlue2 bg-white outline-none after:absolute after:top-0 after:-mt-3px after:ml-px after:hidden after:text-sm after:text-white after:content-checked checked:bg-navyBlue2 checked:after:block disabled:border-input-stroke-disable disabled:bg-input-surface-input-disable disabled:text-input-text-disable"
                  required
                  disabled={!isDuringProposal}
                />
                {t('DEVELOP_PAGE.CHECKBOX_TEXT')}
              </label>
            </div>
            {/* Info:(20240813 - Julian) Button */}
            <button
              id="proposal-submit-button"
              type="submit"
              className="ml-auto w-fit rounded-xs bg-button-surface-strong-primary px-32px py-14px text-button-text-primary-solid disabled:bg-button-surface-strong-disable disabled:text-button-text-disable"
              disabled={!isDuringProposal}
            >
              {t('DEVELOP_PAGE.SUBMIT_BUTTON')} (100 ISC)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProposeForm;
