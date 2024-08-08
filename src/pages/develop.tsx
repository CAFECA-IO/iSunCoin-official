import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import DevelopPageBody from '@/components/develop_page/develop_page_body';

const DevelopPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <Header />

      {/* Body */}
      <DevelopPageBody />

      {/* Footer */}
    </>
  );
};

export default DevelopPage;
