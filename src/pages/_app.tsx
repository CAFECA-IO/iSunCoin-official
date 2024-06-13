// import '@/styles/globals.css'; work?
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-barlow selection:bg-slate-500">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
