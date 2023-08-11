import { Footer, Navbar } from '@seek-sage/ui';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../state/atoms/userState';
import { logoutUser } from '../services/userServices/userServices';

const AppLayout = ({ children }: { children: React.JSX.Element | string }) => {
  const [user,setUser]=useRecoilState(userState)
  const logout=()=>logoutUser(setUser)
  return (
    <>
      <Navbar user={user} logoutUser={logout}/>
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
