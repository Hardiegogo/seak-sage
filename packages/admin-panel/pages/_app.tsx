import { AppProps } from 'next/app';
import './styles.css';
import { RecoilRoot } from 'recoil';
import ProtectedLayout from '../layout/ProtectedLayout';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <ProtectedLayout>
          <Component {...pageProps} />
        </ProtectedLayout>
      </RecoilRoot>
    </>
  );
};

export default CustomApp;
