import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { IMessageModal } from '@/interfaces/message_modal';

interface IMessageModalProps {
  isModalVisible: boolean;
  modalVisibilityHandler: () => void;
  messageModalData: IMessageModal;
}

const MessageModal = ({
  isModalVisible,
  modalVisibilityHandler,
  messageModalData,
}: IMessageModalProps) => {
  const { t } = useTranslation('common');
  const { title, message, confirmBtnText, confirmHandler } = messageModalData;

  const confirmClickHandler = () => {
    confirmHandler();
    modalVisibilityHandler(); // Info:(20240816 - Julian) Close Modal
  };

  const isDisplayModal = isModalVisible ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-barlow">
      <div className="relative flex w-90vw flex-col items-center gap-32px rounded-md border border-card-stroke-primary bg-card-surface-primary px-20px py-16px md:w-440px">
        {/* Info:(20240813 - Julian) Close Button */}
        <button type="button" onClick={modalVisibilityHandler} className="absolute right-20px">
          <Image src="/icons/cross.svg" alt="Close" width={24} height={24} />
        </button>
        {/* Info:(20240813 - Julian) Title */}
        <h2 className="text-xl font-bold text-card-text-primary">{title}</h2>
        {/* Info:(20240813 - Julian) Message */}
        <p className="text-sm text-card-text-secondary">{message}</p>
        {/* Info:(20240813 - Julian) Buttons */}
        <div className="ml-auto flex items-center gap-12px">
          <button
            id="cancel-btn"
            type="button"
            onClick={modalVisibilityHandler}
            className="rounded-xs border border-button-stroke-secondary bg-button-surface-soft-secondary px-16px py-8px text-button-text-secondary-solid hover:bg-button-surface-soft-secondary-hover"
          >
            {t('MESSAGE_MODAL.CANCEL_BTN')}
          </button>
          <button
            id="confirm-btn"
            type="button"
            onClick={confirmClickHandler}
            className="rounded-xs border border-button-surface-strong-secondary bg-button-surface-strong-secondary px-16px py-8px text-button-text-invert hover:bg-button-surface-strong-secondary-hover"
          >
            {confirmBtnText}
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return isDisplayModal;
};

export default MessageModal;
