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
          <main className="min-h-[calc(100vh-134px)] bg-bgColor">
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </RecoilRoot>
    </div>
  );
}

export default CustomApp;
