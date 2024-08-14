import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ILocale } from '@/interfaces/locale';
import Header from '@/components/common/header';
import AutonomyPageBody from '@/components/autonomy_page/autonomy_page_body';
import Footer from '@/components/common/footer';
import { getLastModifiedDate } from '@/lib/utils/common_backend';

type AutonomyPageProps = {
  lastModifiedDate: string;
};

const AutonomyPage: React.FC<AutonomyPageProps> = ({ lastModifiedDate }) => {
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
      <Footer lastModifiedDate={lastModifiedDate} />
    </>
  );
};

const getStaticPropsFunction = async ({ locale }: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
    lastModifiedDate: await getLastModifiedDate(),
  },
});

export const getStaticProps = getStaticPropsFunction;

export default AutonomyPage;
