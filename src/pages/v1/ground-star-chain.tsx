import React from 'react';
import Head from 'next/head';
import LandingHeader from '@/components/v1_landing_page/landing_header/landing_header';
import LandingFooter from '@/components/v1_landing_page/landing_footer/landing_footer';
import GroundStarChainPageBody from '@/components/v1_landing_page/page_body/ground_star_chain_page_body';

function GroundStarChainPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <LandingHeader />

      {/* Body */}
      <GroundStarChainPageBody />

      {/* Footer */}
      <LandingFooter />
    </>
  );
}

export default GroundStarChainPage;
