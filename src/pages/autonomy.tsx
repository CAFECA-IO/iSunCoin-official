import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import AutonomyPageBody from '@/components/autonomy_page/autonomy_page_body';
import Footer from '@/components/common/Footer';

const AutonomyPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <Header />

      {/* Body */}
      <AutonomyPageBody />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AutonomyPage;
