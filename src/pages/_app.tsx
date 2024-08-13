import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { GlobalProvider } from '@/contexts/global_context';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default appWithTranslation(App);
