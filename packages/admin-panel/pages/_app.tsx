import { AppProps } from 'next/app';
import './styles.css';
import { RecoilRoot } from 'recoil';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
          <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default CustomApp;
