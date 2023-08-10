import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import AppLayout from '../layout/AppLayout';
import { RecoilRoot } from 'recoil';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-bgColor">
      <Head>
        <title>Welcome to user-panel!</title>
      </Head>
      <RecoilRoot>
        <AppLayout>
          <main className="h-[calc(100vh-134px)]">
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </RecoilRoot>
    </div>
  );
}

export default CustomApp;
