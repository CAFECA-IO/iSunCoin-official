import React from 'react';
import HeroSectionOfLandingPage from '@/components/hero_section_of_landing_page/hero_section_of_landing_page';
import Introduction from '@/components/introduction/introduction';

const LandingPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-surface-lv1 font-barlow">
      <HeroSectionOfLandingPage />

      <Introduction />
    </main>
  );
};

export default LandingPageBody;
