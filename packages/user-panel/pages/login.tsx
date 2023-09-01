import { UserLoginForm } from '@seek-sage/ui';
import React,{useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/userState';
import {
  AuthorisedApi,
  loginUser,
  signupUser,
} from '../services/userServices/userServices';

const Login = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user.isLoggedIn) {
      setUser({
        username: '',
        id: '',
        isLoggedIn: false,
        purchasedCourses: [],
      });
    }
  }, []);
  
  return (
    <main className="grid place-items-center pt-24">
      <UserLoginForm
        setUser={setUser}
        loginUser={loginUser}
        AuthorisedApi={AuthorisedApi}
      />
    </main>
  );
};

export default Login;
