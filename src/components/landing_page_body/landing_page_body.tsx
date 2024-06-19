import React from 'react';
import HeroSectionOfLandingPage from '@/components/hero_section_of_landing_page/hero_section_of_landing_page';
import Introduction from '@/components/introduction/introduction';
import StatisticsOverview from '@/components/statistics_overview/statistics_overview';

const LandingPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfLandingPage />

      <Introduction />

      <StatisticsOverview />
    </main>
  );
};

export default LandingPageBody;
