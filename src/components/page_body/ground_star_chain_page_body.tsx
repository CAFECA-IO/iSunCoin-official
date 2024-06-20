import React from 'react';
import HeroSectionOfGround from '@/components/hero_section/hero_section_of_ground';
import FeaturesSection from '@/components/features_section/features_section';
import DecentralizedNetwork from '@/components/decentralized_network/decentralized_network';

const GroundStarChainPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfGround />

      <FeaturesSection />

      <DecentralizedNetwork />
    </main>
  );
};

export default GroundStarChainPageBody;
