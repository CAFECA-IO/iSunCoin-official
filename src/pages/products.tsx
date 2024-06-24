import React from 'react';
import Head from 'next/head';
import LandingHeader from '@/components/landing_header/landing_header';
import LandingFooter from '@/components/landing_footer/landing_footer';
import ProductsPageBody from '@/components/page_body/products_page_body';

function ProductsPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/isuncoin_logo.svg" />
        <title>iSunCoin</title>
      </Head>

      {/* Navbar */}
      <LandingHeader />

      {/* Body */}
      <ProductsPageBody />

      {/* Footer */}
      <LandingFooter />
    </>
  );
}

export default ProductsPage;
