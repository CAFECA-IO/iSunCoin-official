import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ILocale } from '@/interfaces/locale';
import Header from '@/components/common/header_1';
import HomePageBody from '@/components/home_page/home_page_body';
import Footer from '@/components/common/footer';

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Info:(20240808 - Julian) Navbar */}
      <Header />

      {/* Info:(20240808 - Julian) Body */}
      <HomePageBody />

      {/* Info:(20240808 - Julian) Footer */}
      <Footer />
    </>
  );
};

const getStaticPropsFunction = async ({ locale }: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticProps = getStaticPropsFunction;

export default HomePage;
