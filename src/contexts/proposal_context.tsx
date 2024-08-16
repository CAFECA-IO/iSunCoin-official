import React, { useState, createContext } from 'react';

interface IProposalContext {
  isDuringProposal: boolean;
  currentPhase: number;
  remainingBlocks: number;
}

export interface IProposalProvider {
  children: React.ReactNode;
}

const ProposalContext = createContext<IProposalContext | undefined>(undefined);

export const ProposalProvider = ({ children }: IProposalProvider) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDuringProposal, setIsDuringProposal] = useState(true); // ToDo: (20240815 - Julian) 從 API 取得提案期間
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPhase, setCurrentPhase] = useState(3); // ToDo: (20240815 - Julian) 從 API 取得當前期數
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [remainingBlocks, setRemainingBlocks] = useState(465368); // ToDo: (20240815 - Julian) 從 API 取得剩餘區塊數

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isDuringProposal,
    currentPhase,
    remainingBlocks,
  };

  return <ProposalContext.Provider value={value}>{children}</ProposalContext.Provider>;
};

export const useProposalCtx = () => {
  const context = React.useContext(ProposalContext);
  if (context === undefined) {
    throw new Error('useProposal must be used within a ProposalProvider');
  }
  return context;
};
