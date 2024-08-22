import { ISUNCOIN_API_V1 } from '@/constants/url';
import React, { useState, useEffect, createContext } from 'react';
import {
  BLOCKS_PER_PHASE,
  HALF_BLOCKS_PER_PHASE,
  FIRST_PROPOSAL_BLOCK,
  FIRST_VOTE_BLOCK,
} from '@/constants/config';
import { IPhase } from '@/interfaces/phase';

interface IProposalContext {
  isDuringProposal: boolean;
  nextProposalStartBlocks: number;
  nextVoteStartBlocks: number;
  currentPhase: number;
}

export interface IProposalProvider {
  children: React.ReactNode;
}

const ProposalContext = createContext<IProposalContext | undefined>(undefined);

export const ProposalProvider = ({ children }: IProposalProvider) => {
  // Info: (20240821 - Julian) 目前區塊數
  const [blockNumber, setBlockNumber] = useState(0);
  // Info: (20240821 - Julian) 不是提案期就是投票期
  const [isDuringProposal, setIsDuringProposal] = useState(false);
  // Info: (20240821 - Julian) 當前期數
  const [currentPhase, setCurrentPhase] = useState(0);
  // Info: (20240821 - Julian) 距離下次提案期開始的區塊數
  const [nextProposalStartBlocks, setNextProposalStartBlocks] = useState(0);
  // Info: (20240821 - Julian) 距離下次投票期開始的區塊數
  const [nextVoteStartBlocks, setNextVoteStartBlocks] = useState(0);

  useEffect(() => {
    fetch(ISUNCOIN_API_V1.PHASE)
      .then((response) => response.json())
      .then((data: IPhase) => {
        const blockHeight = parseInt(data.result, 16);
        setBlockNumber(blockHeight);
      });
  }, []);

  useEffect(() => {
    // Info: (20240821 - Julian) 如果區塊數 !== NaN，則執行以下程式碼
    if (!Number.isNaN(blockNumber)) {
      // Info: (20240821 - Julian) 計算當前期數：當前區塊數 / 每期區塊數(1310720)
      const phase = Math.floor(blockNumber / BLOCKS_PER_PHASE);

      /* Info: (20240821 - Julian) 計算距離下次提案期開始還剩多少區塊
       * 如果還在 phase 0 (未進入第一次投票期)： FIRST_PROPOSAL_BLOCK - 當前區塊數
       * 如果過了 phase 0：每期區塊數 - (當前區塊數 % 每期區塊數) */
      const nextProposalStart =
        blockNumber < FIRST_PROPOSAL_BLOCK
          ? FIRST_PROPOSAL_BLOCK - blockNumber
          : BLOCKS_PER_PHASE - (blockNumber % BLOCKS_PER_PHASE);

      /* Info: (20240821 - Julian) 計算距離下次投票期開始還剩多少區塊
       * 如果還在 phase 0 (未進入第一次投票期)： FIRST_VOTE_BLOCK - 當前區塊數
       * 如果過了 phase 0：每期區塊數的前一半 - (當前區塊數 % 每期區塊數) */
      const nextVoteStart =
        blockNumber < FIRST_VOTE_BLOCK
          ? FIRST_VOTE_BLOCK - blockNumber
          : HALF_BLOCKS_PER_PHASE - (blockNumber % BLOCKS_PER_PHASE);

      // Info: (20240821 - Julian) 提案期：過了 phase 0 && 當前區塊數 % 每期區塊數 < 每期區塊數的前一半
      const isProposal =
        blockNumber >= FIRST_PROPOSAL_BLOCK &&
        blockNumber % BLOCKS_PER_PHASE < HALF_BLOCKS_PER_PHASE;

      setCurrentPhase(phase);
      setNextProposalStartBlocks(nextProposalStart);
      setNextVoteStartBlocks(nextVoteStart);
      setIsDuringProposal(isProposal);
    } else {
      setCurrentPhase(0);
      setNextProposalStartBlocks(0);
      setNextVoteStartBlocks(0);
      setIsDuringProposal(false);
    }
  }, [blockNumber]);

  // Deprecated: (20240816 - Julian) for develop
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isDuringProposal,
    nextProposalStartBlocks,
    nextVoteStartBlocks,
    currentPhase,
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
