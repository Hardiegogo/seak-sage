import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { adminState } from '../state/atoms/adminState';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

function RequireAuth({ children }: { children: React.JSX.Element | string }) {
  const {data,status}=useSession()
  const [loader, setLoader] = useState(true);
  console.log(data)
  useEffect(() => {
    if (status==="unauthenticated") {
        signIn()
    } else setLoader(false);
  }, [status]);

  return <>{!loader && children}</>;
}

export default RequireAuth;
