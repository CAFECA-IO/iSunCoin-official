import React from 'react';
import HeroSectionOfGround from '@/components/hero_section/hero_section_of_ground';
import FeaturesSection from '@/components/ground_star_chain/features_section';
import DecentralizedNetwork from '@/components/ground_star_chain/decentralized_network';
import GreenEnergyCertificates from '@/components/ground_star_chain/green_energy_certificates';

const GroundStarChainPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfGround />

      <FeaturesSection />

      <DecentralizedNetwork />

      <GreenEnergyCertificates />
    </main>
  );
};

export default GroundStarChainPageBody;
