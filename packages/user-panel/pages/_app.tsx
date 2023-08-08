import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to user-panel!</title>
      </Head>
      <main className="app bg-bgColor min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
