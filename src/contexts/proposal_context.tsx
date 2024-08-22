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
  isStart: boolean;
  currentPhase: number;
  proposalBlock: number;
  votingBlock: number;
}

export interface IProposalProvider {
  children: React.ReactNode;
}

const ProposalContext = createContext<IProposalContext | undefined>(undefined);

export const ProposalProvider = ({ children }: IProposalProvider) => {
  // Info: (20240821 - Julian) 目前區塊數
  const [blockNumber, setBlockNumber] = useState(0);
  // Info: (20240822 - Julian) 過了第 1310720 區塊後，才會開始第一次提案期
  const [isStart, setIsStart] = useState(false);
  // Info: (20240821 - Julian) 不是提案期就是投票期
  const [isDuringProposal, setIsDuringProposal] = useState(false);
  // Info: (20240821 - Julian) 當前期數
  const [currentPhase, setCurrentPhase] = useState(0);
  // Info: (20240822 - Julian) 用於顯示 ProposeForm 的區塊數
  const [proposalBlock, setProposalBlock] = useState(0);
  // Info: (20240822 - Julian) 用於顯示 CurrentProposals 的區塊數
  const [votingBlock, setVotingBlock] = useState(0);

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
      // Info: (20240821 - Julian) 計算當前期數：當前區塊數 / 每期區塊數(1310720) +1
      const phase = Math.floor(blockNumber / BLOCKS_PER_PHASE) + 1;

      // Info: (20240821 - Julian) 是否已經過了 phase 0 (開始第一次提案期)
      const isStarting = blockNumber >= FIRST_PROPOSAL_BLOCK;

      // Info: (20240821 - Julian) 提案期：過了 phase 0 && 當前區塊數 % 每期區塊數 < 每期區塊數的前一半
      const isProposal = blockNumber % BLOCKS_PER_PHASE < HALF_BLOCKS_PER_PHASE;

      const remainingBlock = isProposal
        ? // 正在提案中 -> 計算距離「本次投票期開始」「下次提案期結束」還剩多少區塊： 每期區塊數的前一半 - (當前區塊數 % 每期區塊數)
          HALF_BLOCKS_PER_PHASE - (blockNumber % BLOCKS_PER_PHASE)
        : // 已進入投票期 -> 計算距離「本次投票期結束」「下次提案期開始」還剩多少區塊： 每期區塊數 - (當前區塊數 % 每期區塊數)
          BLOCKS_PER_PHASE - (blockNumber % BLOCKS_PER_PHASE);

      const showingProposalBlock = isStarting
        ? // Info: (20240821 - Julian) 如果已經過了 phase 0：剩餘區塊數
          remainingBlock
        : // 如果還在 phase 0 (未進入第一次投票期)： FIRST_PROPOSAL_BLOCK - 當前區塊數
          FIRST_PROPOSAL_BLOCK - blockNumber;

      const showingVotingBlock =
        blockNumber < FIRST_PROPOSAL_BLOCK
          ? // 如果還在 phase 0 (未進入第一次投票期)： FIRST_VOTE_BLOCK - 當前區塊數
            FIRST_VOTE_BLOCK - blockNumber
          : remainingBlock;

      setCurrentPhase(phase);
      setIsStart(isStarting);
      setProposalBlock(showingProposalBlock);
      setVotingBlock(showingVotingBlock);
      setIsDuringProposal(isProposal);
    } else {
      setCurrentPhase(0);
      setIsStart(false);
      setProposalBlock(0);
      setVotingBlock(0);
      setIsDuringProposal(false);
    }
  }, [blockNumber]);

  // ToDo: (20240816 - Julian) for develop
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isStart,
    isDuringProposal,
    currentPhase,
    proposalBlock,
    votingBlock,
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
