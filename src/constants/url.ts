export const ISUNCOIN_ROUTE_V1 = {
  LANDING_PAGE: '/v1',
  ABOUT: '/v1/#about',
  GROUND_STAR_CHAIN: '/v1/ground-star-chain',
  PRODUCTS: '/v1/products',
};

export const ISUNCOIN_ROUTE_V2 = {
  HOME_PAGE: '/',
  USE_PAGE: '/use',
  DEVELOP_PAGE: '/develop',
  AUTONOMY: '/autonomy',
  // ToDo: (20240808 - Liz) RESEARCH: '/research',
};

export const ISUNCOIN_API_V1 = {
  PROPOSAL: '/api/v1/proposal', // Info: (20240816 - Julian) [GET] all proposal list
  HISTORY: '/api/v1/history', // Info: (20240816 - Julian) [GET] all history list
  PROPOSE: '/api/v1/proposal/propose', // Info: (20240816 - Julian) [POST] new proposal
  VOTE: '/api/v1/proposal/[proposalId]/vote', // Info: (20240816 - Julian) [POST] vote for a proposal
  PHASE: '/api/v1/phase', // Info: (20240816 - Julian) [GET] current phase
  EMAIL: '/api/v1/email', // Info: (20240816 - Julian) [POST] send email
};
