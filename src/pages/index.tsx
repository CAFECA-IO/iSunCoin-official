import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import HomePageBody from '@/components/home_page/home_page_body';

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <Header />

      {/* Body */}
      <HomePageBody />

      {/* Footer */}
    </>
  );
};

export default HomePage;
