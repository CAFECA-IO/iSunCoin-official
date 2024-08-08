import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import UsePageBody from '@/components/use_page/use_page_bode';

const UsePage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <Header />

      {/* Body */}
      <UsePageBody />

      {/* Footer */}
    </>
  );
};

export default UsePage;
