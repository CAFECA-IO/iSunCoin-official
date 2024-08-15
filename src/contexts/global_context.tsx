import React, { useState, useContext, createContext, useCallback } from 'react';
import Image from 'next/image';
import { toast as toastify } from 'react-toastify';
import MessageModal from '@/components/common/message_modal';
import Toast from '@/components/common/toast';
import { IToastify, ToastPosition, ToastType } from '@/interfaces/toastify';
import { IMessageModal, defaultMessageModalData } from '@/interfaces/message_modal';

interface IGlobalContext {
  isMessageModalVisible: boolean;
  messageModalVisibleHandler: () => void;
  messageModalDataHandler: (data: IMessageModal) => void;

  toastHandler: (props: IToastify) => void;
  eliminateToast: (id?: string) => void;
}

export interface IGlobalProvider {
  children: React.ReactNode;
}

const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [messageModalData, setMessageModalData] = useState<IMessageModal>(defaultMessageModalData);

  const messageModalVisibleHandler = () => {
    setIsMessageModalVisible(!isMessageModalVisible);
  };

  const messageModalDataHandler = (data: IMessageModal) => {
    setMessageModalData(data);
  };

  // Info: (20240815 - Julian)  呼叫 toast 的方法
  const toastHandler = useCallback(
    ({
      id,
      type,
      content,
      closeable,
      autoClose: isAutoClose,
      position: toastPosition,
      onClose = () => {},
    }: IToastify) => {
      const bodyStyle =
        'before:absolute before:h-100vh before:w-5px before:top-0 before:left-0 md:w-400px w-100vw md:scale-100 scale-75 text-sm font-barlow pointer-events-auto';

      const toastId = id;
      const position = toastPosition ?? ToastPosition.TOP_CENTER; // Info:(20240513 - Julian) default position 'top-center'

      // Info:(20240513 - Julian) 如果 closeable 為 false，則 autoClose、closeOnClick、draggable 都會被設為 false
      const autoClose = closeable ? (isAutoClose ?? 5000) : false; // Info:(20240513 - Julian) default autoClose 5000ms

      const closeOnClick = closeable; // Info:(20240513 - Julian) default closeOnClick true
      const draggable = closeable; // Info:(20240513 - Julian) default draggable true
      const closeButton = closeable
        ? () => (
            <div className="h-20px w-20px">
              <Image src="/icons/cross.svg" width={16} height={16} alt="close" />
            </div>
          )
        : false;

      switch (type) {
        case ToastType.SUCCESS:
          toastify.success(content, {
            icon: <Image src="/icons/success.svg" alt="success" width={24} height={24} />,
            className: `${bodyStyle} before:bg-alert-surface-surface-success`,
            toastId,
            position,
            autoClose,
            closeOnClick,
            draggable,
            closeButton,
            onClose,
          });
          break;
        case ToastType.ERROR:
          toastify.error(content, {
            icon: <Image src="/icons/error.svg" alt="error" width={24} height={24} />,
            className: `${bodyStyle} before:bg-alert-surface-surface-error`,
            toastId,
            position,
            autoClose,
            closeOnClick,
            draggable,
            closeButton,
            onClose,
          });
          break;
        case ToastType.WARNING:
          toastify.warning(content, {
            icon: <Image src="/icons/warning.svg" alt="warning" width={24} height={24} />,
            className: `${bodyStyle} before:bg-alert-surface-surface-warning`,
            toastId,
            position,
            autoClose,
            closeOnClick,
            draggable,
            closeButton,
            onClose,
          });
          break;
        case ToastType.INFO:
          toastify.info(content, {
            icon: <Image src="/icons/info.svg" alt="info" width={24} height={24} />,
            className: `${bodyStyle} before:bg-alert-surface-surface-info`,
            toastId,
            position,
            autoClose,
            closeOnClick,
            draggable,
            closeButton,
            onClose,
          });
          break;
        default:
          toastify(content);
          break;
      }
    },
    []
  );

  // Info: (20240815 - Julian) 清除 toast 的方法
  const eliminateToast = (id?: string) => {
    if (id) {
      toastify.dismiss(id);
    } else {
      toastify.dismiss(); // Info:(20240815 - Julian) 清除所有 toast
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isMessageModalVisible,
    messageModalVisibleHandler,
    messageModalDataHandler,

    toastHandler,
    eliminateToast,
  };

  return (
    <GlobalContext.Provider value={value}>
      <MessageModal
        isModalVisible={isMessageModalVisible}
        modalVisibilityHandler={messageModalVisibleHandler}
        messageModalData={messageModalData}
      />

      <Toast />

      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalCtx = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g: any =
    typeof globalThis === 'object'
      ? globalThis
      : typeof window === 'object'
        ? window
        : typeof global === 'object'
          ? global
          : null; // Info: Causes an error on the next line

  g.globalContext = context;
  return context;
};
