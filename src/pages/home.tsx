import React from 'react';
import Head from 'next/head';
import LandingHeader from '@/components/landing_header/landing_header';
import LandingFooter from '@/components/landing_footer/landing_footer';
import HeadPageBody from '@/components/page_body/home_page_body';

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Info:(20240808 - Julian) Navbar */}
      <LandingHeader />

      {/* Info:(20240808 - Julian) Body */}
      <HeadPageBody />

      {/* Info:(20240808 - Julian) Footer */}
      <LandingFooter />
    </>
  );
};

export default HomePage;
