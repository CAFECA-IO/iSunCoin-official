import { ISUNCOIN_API_V1 } from '@/constants/url';
import React, { useState, useEffect, createContext } from 'react';
import { BLOCKS_PER_PHASE, HALF_BLOCKS_PER_PHASE } from '@/constants/config';

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
  const [blockNumber, setBlockNumber] = useState(0);
  // Info: (20240821 - Julian) 不是提案期就是投票期
  const [isDuringProposal, setIsDuringProposal] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [remainingBlocks, setRemainingBlocks] = useState(0);

  useEffect(() => {
    fetch(ISUNCOIN_API_V1.PHASE)
      .then((response) => response.json())
      .then((data) => {
        setBlockNumber(data.blockNumber);
      });
  }, []);

  useEffect(() => {
    // Info: (20240821 - Julian) 計算當前期數：當前區塊數(1310720) / 每期區塊數
    const phase = Math.floor(blockNumber / BLOCKS_PER_PHASE) + 1;
    // Info: (20240821 - Julian) 計算剩餘區塊數：每期區塊數(1310720) - (當前區塊數 % 每期區塊數)
    const blocks = BLOCKS_PER_PHASE - (blockNumber % BLOCKS_PER_PHASE);
    // Info: (20240821 - Julian) 提案期：每期區塊數(1310720)的前一半
    const isProposal = blockNumber % BLOCKS_PER_PHASE < HALF_BLOCKS_PER_PHASE;

    setCurrentPhase(phase);
    setRemainingBlocks(blocks);
    setIsDuringProposal(isProposal);
  }, [blockNumber]);

  // Deprecated: (20240816 - Julian) for develop
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
