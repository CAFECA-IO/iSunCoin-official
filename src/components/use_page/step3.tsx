import { useTranslation } from 'next-i18next';

// Info: (20240814 - Liz) 暫時關閉未有功能的按鈕
const disableButton: boolean = true;

const Step3 = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('USE_PAGE.UTILIZE_GENERATIVE_AI_SERVICES')}
      </h1>

      {/* Chat */}
      <div className="h-350px bg-surface-neutral-main-background p-20px">
        {/* Help Card */}
        <div className="flex max-w-fit flex-col gap-8px rounded-lg border border-chat-bubbles-stroke-bubble-outline bg-chat-bubbles-surface-secondary p-20px">
          <h4 className="text-xl font-bold text-chat-bubbles-text-primary">
            {t('USE_PAGE.HOW_CAN_WE_HELP')}
          </h4>
          <p className="font-medium text-chat-bubbles-text-primary">
            {t('USE_PAGE.YOU_CAN_ASK_QUESTIONS_LIKE')}
          </p>
          <ul className="list-inside list-disc font-medium text-chat-bubbles-text-primary">
            <li>{t('USE_PAGE.WHAT_S_PRELINE_UI')}</li>
            <li>{t('USE_PAGE.HOW_MANY_STARTER_PAGES_EXAMPLES_ARE_THERE')}</li>
            <li>{t('USE_PAGE.IS_THERE_A_PRO_VERSION')}</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-16px">
        <input
          type="text"
          placeholder={t('USE_PAGE.ENTER_YOUR_PROMPT_AND_LET_AI_DRAW_FOR_YOU_REQUIRES_1_ISC')}
          className="grow rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px font-medium shadow-downDropShadowSM outline-none placeholder:text-input-text-input-placeholder"
        />

        <button
          type="button"
          disabled={disableButton}
          className="rounded-xs bg-button-surface-strong-secondary px-24px py-10px font-medium text-button-text-invert hover:bg-button-surface-strong-secondary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable"
        >
          {disableButton ? t('COMMON.COMING_SOON') : t('COMMON.TRY_IT_NOW')}
        </button>
      </div>

      <p className="text-base font-normal text-text-neutral-secondary">
        {t('USE_PAGE.UTILIZE_GENERATIVE_AI_SERVICES_DESCRIPTION')}
      </p>
    </section>
  );
};

export default Step3;
