import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import AppLayout from '../layout/AppLayout';
import { RecoilEnv, RecoilRoot, useSetRecoilState } from 'recoil';
import { SessionProvider, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { userState } from '../state/atoms/userState';
import { IUser } from '../types';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

const InitUser=()=>{
  const setUser=useSetRecoilState(userState)
  useEffect(()=>{
    (async()=>{
      const session=await getSession()
      if(!session){
        setUser({
          username:"",
          isLoggedIn:false,
          id:"",
          purchasedCourses:[]      
      })
      }else {
        setUser({
          ...session?.user,
          isLoggedIn:true
        } as IUser)
      }
    })()
  },[])
  return <></>
}

function CustomApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
    <div className="bg-bgColor">
      <Head>
        <title>Welcome to user-panel!</title>
      </Head>
      <SessionProvider session={session}>
        <RecoilRoot>
          <InitUser/>
          <AppLayout>
            <main className="min-h-[calc(100vh-134px)] bg-bgColor">
              <Component {...pageProps} />
            </main>
          </AppLayout>
        </RecoilRoot>
      </SessionProvider>
    </div>
  );
}

export default CustomApp;
