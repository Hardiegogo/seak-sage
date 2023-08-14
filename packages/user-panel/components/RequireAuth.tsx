import React, { ReactElement, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../state/atoms/userState';
import { useRouter } from 'next/router';

const RequireAuth: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const user = useRecoilValue(userState);
  const router = useRouter();
  useEffect(() => {
    if (user.isLoggedIn) {
      setLoader(false);
    } else router.replace('/login');
  }, []);

  return <>{!loader && children}</>;
};

export default RequireAuth;
