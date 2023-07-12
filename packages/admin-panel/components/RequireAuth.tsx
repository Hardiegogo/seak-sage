import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { adminState } from '../state/atoms/adminState';
import { useRouter } from 'next/router';

function RequireAuth({ children }: { children: React.JSX.Element | string }) {
  const router = useRouter();
  const admin = useRecoilValue(adminState);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (!admin.isLoggedIn) {
      router.replace('/login');
    } else setLoader(false);
  }, [admin.isLoggedIn]);

  return <>{!loader && children}</>;
}

export default RequireAuth;
