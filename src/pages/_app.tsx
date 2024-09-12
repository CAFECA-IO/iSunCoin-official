import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { GlobalProvider } from '@/contexts/global_context';
import { ProposalProvider } from '@/contexts/proposal_context';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ProposalProvider>
        <Component {...pageProps} />
      </ProposalProvider>
    </GlobalProvider>
  );
}

export default appWithTranslation(App);
