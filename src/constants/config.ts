export const ITEMS_PER_PAGE = 5;

// Info: (20240814 - Julian) For date picker
export const MILLISECONDS_IN_A_SECOND = 1000;
export const SECONDS_TO_TOMORROW = 86400 - 1;

// Info: (20240821 - Julian) Whitepaper info
export const BLOCKS_PER_PHASE = 1310720;
export const HALF_BLOCKS_PER_PHASE = BLOCKS_PER_PHASE / 2;

/* Info: (2024082ㄉ - Julian) 由於 Phase 0 (前 1310720 個區塊) 還沒開始投票和提案
 * 所以第一次的提案期是第 1310721 個區塊，第一次的投票期是第 1310720 + 655360 = 1966080 個區塊 */
export const FIRST_PROPOSAL_BLOCK = BLOCKS_PER_PHASE;
export const FIRST_VOTE_BLOCK = BLOCKS_PER_PHASE + HALF_BLOCKS_PER_PHASE;
