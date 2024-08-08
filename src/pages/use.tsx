import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import UsePageBody from '@/components/use_page/use_page_bode';
import Footer from '@/components/common/Footer';

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
      <Footer />
    </>
  );
};

export default UsePage;
