import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ILocale } from '@/interfaces/locale';
import Header from '@/components/common/header';
import HomePageBody from '@/components/home_page/home_page_body';
import Footer from '@/components/common/footer';
import { getLastModifiedDate } from '@/lib/utils/common_backend';

type HomePageProps = {
  lastModifiedDate: string;
};

const HomePage: React.FC<HomePageProps> = ({ lastModifiedDate }) => {
  const jsx = (
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
      <Footer lastModifiedDate={lastModifiedDate} />
    </>
  );
  return jsx;
};

const getStaticPropsFunction = async ({ locale }: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
    lastModifiedDate: await getLastModifiedDate(),
  },
});

export const getStaticProps = getStaticPropsFunction;

export default HomePage;
