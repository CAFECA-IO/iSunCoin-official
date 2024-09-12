import { ISUNCOIN_ROUTES, ISUNCOIN_ANCHORS } from '@/constants/url';

interface SearchableItem {
  title: string;
  url: string;
}
export const searchableItems: SearchableItem[] = [
  // Routes
  { title: 'home', url: ISUNCOIN_ROUTES.HOME_PAGE },
  { title: 'use', url: ISUNCOIN_ROUTES.USE_PAGE },
  { title: 'develop', url: ISUNCOIN_ROUTES.DEVELOP_PAGE },
  { title: 'autonomy', url: ISUNCOIN_ROUTES.AUTONOMY },
  // Anchor Links
  { title: 'download', url: ISUNCOIN_ANCHORS.DOWNLOAD },
  { title: 'contact', url: ISUNCOIN_ANCHORS.CONTACT },
  { title: 'contribute', url: ISUNCOIN_ANCHORS.CONTRIBUTE },
  { title: 'real time data', url: ISUNCOIN_ANCHORS.REAL_TIME_DATA },
  { title: 'use isuncoin', url: ISUNCOIN_ANCHORS.USE_ISUNCOIN },
  { title: 'cold wallets', url: ISUNCOIN_ANCHORS.COLD_WALLETS },
  { title: 'proposals', url: ISUNCOIN_ANCHORS.PROPOSALS },
  { title: 'propose', url: ISUNCOIN_ANCHORS.PROPOSE },
];
