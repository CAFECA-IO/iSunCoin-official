export const ISUNCOIN_ROUTES = {
  HOME_PAGE: '/',
  USE_PAGE: '/use',
  DEVELOP_PAGE: '/develop',
  AUTONOMY: '/autonomy',
  // ToDo: (20240808 - Liz) RESEARCH: '/research',
};

export const ISUNCOIN_ANCHORS = {
  // Info: (20240816 - Julian) Home Page
  DOWNLOAD: '/#download',
  CONTACT: '/#contact',
  REAL_TIME_DATA: '/#real-time-data',

  // Info: (20240816 - Julian) Use Page
  CONTRIBUTE: '/use#contribute',
  USE_ISUNCOIN: '/use#use-isuncoin',
  COLD_WALLETS: '/use#cold-wallets',

  // Info: (20240816 - Julian) Develop Page
  PROPOSALS: '/develop#proposals',
  PROPOSE: '/develop#propose',
};

export const ISUNCOIN_API_V1 = {
  PROPOSAL: '/api/v1/proposal', // Info: (20240816 - Julian) [GET] all proposal list
  HISTORY: '/api/v1/history', // Info: (20240816 - Julian) [GET] all history list
  PROPOSE: '/api/v1/proposal/propose', // Info: (20240816 - Julian) [POST] new proposal
  VOTE: '/api/v1/proposal/[proposalId]/vote', // Info: (20240816 - Julian) [POST] vote for a proposal
  PHASE: '/api/v1/phase', // Info: (20240816 - Julian) [GET] current phase
  EMAIL: '/api/v1/email', // Info: (20240816 - Julian) [POST] send email
};
