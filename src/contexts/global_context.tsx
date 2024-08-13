import React, { useState, useContext, createContext } from 'react';
import { IMessageModal, defaultMessageModalData } from '@/interfaces/message_modal';
import MessageModal from '@/components/common/message_modal';

interface IGlobalContext {
  isMessageModalVisible: boolean;
  messageModalVisibleHandler: () => void;
  messageModalDataHandler: (data: IMessageModal) => void;
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

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isMessageModalVisible,
    messageModalVisibleHandler,
    messageModalDataHandler,
  };

  return (
    <GlobalContext.Provider value={value}>
      <MessageModal
        isModalVisible={isMessageModalVisible}
        modalVisibilityHandler={messageModalVisibleHandler}
        messageModalData={messageModalData}
      />

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
