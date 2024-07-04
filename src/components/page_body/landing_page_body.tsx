import React from 'react';
import HeroSectionOfLandingPage from '@/components/landing_page_index/hero_section_of_landing_page';
import Introduction from '@/components/landing_page_index/introduction';
import StatisticsOverview from '@/components/landing_page_index/statistics_overview';
import WhatWeDo from '@/components/landing_page_index/what_we_do';

const LandingPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfLandingPage />

      <Introduction />

      <StatisticsOverview />

      <WhatWeDo />
    </main>
  );
};

export default LandingPageBody;
