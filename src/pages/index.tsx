import React from 'react';
import Head from 'next/head';
import LandingHeader from '@/components/landing_header/landing_header';
import LandingFooter from '@/components/landing_footer/landing_footer';
import LandingPageBody from '@/components/landing_page_body/landing_page_body';

function LandingPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <LandingHeader />

      {/* Test */}
      <LandingPageBody />

      {/* Footer */}
      <LandingFooter />
    </>
  );
}

export default LandingPage;
