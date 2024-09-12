import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ILocale } from '@/interfaces/locale';
import Header from '@/components/common/header';
import DevelopPageBody from '@/components/develop_page/develop_page_body';
import Footer from '@/components/common/footer';
import { getLastModifiedDate } from '@/lib/utils/common_backend';

type DevelopPageProps = {
  lastModifiedDate: string;
};

const DevelopPage: React.FC<DevelopPageProps> = ({ lastModifiedDate }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Info:(20240813 - Julian) Navbar */}
      <Header />

      {/* Info:(20240813 - Julian) Body */}
      <DevelopPageBody />

      {/* Info:(20240813 - Julian) Footer */}
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

export default DevelopPage;
