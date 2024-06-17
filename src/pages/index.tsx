import React from 'react';
import Head from 'next/head';
import LandingHeader from '@/components/landing_header/landing_header';
import LandingFooter from '@/components/landing_footer/landing_footer';

function LandingPage() {
  return (
    <>
      <Head>
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <div>
        <LandingHeader />
      </div>

      {/* Test */}
      <div className="h-fullpx bg-surface-neutral-surface-lv1">
        <h1 className="text-text-brand-primary-lv2">內文</h1>
      </div>

      {/* Footer */}
      <div>
        <LandingFooter />
      </div>
    </>
  );
}

export default LandingPage;
