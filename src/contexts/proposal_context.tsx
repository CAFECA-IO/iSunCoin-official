import { ISUNCOIN_API_V1 } from '@/constants/url';
import React, { useState, useEffect, createContext } from 'react';

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
  const [isDuringProposal, setIsDuringProposal] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [remainingBlocks, setRemainingBlocks] = useState(0);

  useEffect(() => {
    fetch(ISUNCOIN_API_V1.PHASE)
      .then((response) => response.json())
      .then((data) => {
        setIsDuringProposal(data.isDuringProposal);
        setCurrentPhase(data.phase);
        setRemainingBlocks(data.remainingBlocks);
      });
  }, []);

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
