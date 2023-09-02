import { AppProps } from 'next/app';
import './styles.css';
import { RecoilEnv, RecoilRoot, useSetRecoilState } from 'recoil';
import ProtectedLayout from '../layout/ProtectedLayout';
import { SessionProvider, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { adminState } from '../state/atoms/adminState';
import { IAdmin } from '../types';
import ToastProvider from '../state/context/ToastContext';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const InitAdmin = () => {
  const setAdmin = useSetRecoilState(adminState);
  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (session) {
        setAdmin({ ...session?.user, isLoggedIn: true } as IAdmin);
      }
    })();
  }, []);
  return <></>;
};

const CustomApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <>
      <ToastProvider>
        <SessionProvider session={session}>
          <RecoilRoot>
            <InitAdmin />
            <ProtectedLayout>
              <Component {...pageProps} />
            </ProtectedLayout>
          </RecoilRoot>
        </SessionProvider>
      </ToastProvider>
    </>
  );
};

export default CustomApp;
