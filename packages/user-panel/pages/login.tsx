import { UserLoginForm } from '@seek-sage/ui';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../state/atoms/userState';
import { AuthorisedApi, loginUser, signupUser } from '../services/userServices/userServices';

const Login = () => {
  const setUser = useSetRecoilState(userState);
  return (
    <main className='grid place-items-center pt-24'>
      <UserLoginForm setUser={setUser} loginUser={loginUser} AuthorisedApi={AuthorisedApi}/>
    </main>
  );
};

export default Login;
