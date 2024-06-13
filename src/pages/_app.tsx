// import '@/styles/globals.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-barlow selection:bg-text-brand-primary-lv3 selection:text-button-surface-strong-secondary">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
