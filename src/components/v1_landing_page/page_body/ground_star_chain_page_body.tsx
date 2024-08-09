import React from 'react';
import HeroSectionOfGround from '@/components/v1_landing_page/ground_star_chain/hero_section_of_ground';
import FeaturesSection from '@/components/v1_landing_page/ground_star_chain/features_section';
import DecentralizedNetwork from '@/components/v1_landing_page/ground_star_chain/decentralized_network';
import GreenEnergyCertificates from '@/components/v1_landing_page/ground_star_chain/green_energy_certificates';
import DigitalAssetConversion from '@/components/v1_landing_page/ground_star_chain/digital_asset_conversion';

const GroundStarChainPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfGround />

      <FeaturesSection />

      <DecentralizedNetwork />

      <GreenEnergyCertificates />

      <DigitalAssetConversion />
    </main>
  );
};

export default GroundStarChainPageBody;
