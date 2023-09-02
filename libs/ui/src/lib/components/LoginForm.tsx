import React, { useState } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { isAxiosError, AxiosInstance, AxiosResponse } from 'axios';
import Button from './Button';
import {getSession, signIn} from 'next-auth/react'
interface IUser {
  username: string;
  id: string;
  isLoggedIn: boolean;
}

const LoginForm: React.FC<{
  setUser: SetterOrUpdater<IUser>;
  AuthorisedApi?: AxiosInstance;
  loginUser?: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<AxiosResponse<any, any>>;
}> = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      setError('');
      // const res = await loginUser({ username, password });
      // if (res.status === 200) {
      //   localStorage.setItem('token', JSON.stringify(res.data.token));
      //   localStorage.setItem(
      //     'user',
      //     JSON.stringify({ ...res.data.user, isLoggedIn: true })
      //   );
      //   setUser({ ...res.data.user, isLoggedIn: true });
      //   AuthorisedApi.defaults.headers[
      //     'Authorization'
      //   ] = `Bearer ${res.data.token}`;
      //   setUsername('');
      //   setPassword('');
      //   router.replace('/');
      // }
      const res=await signIn("credentials",{username, password,redirect:false, callbackUrl:'/'})
      const session = await getSession()
      setUser({
        ...session?.user,
        isLoggedIn:true
      })
      router.replace('/')
    } catch (error) {
      setUsername('');
      setPassword('');
      if (isAxiosError(error)) {
        if (error.response) {
          setError(error.response.data);
        }
      } else {
        setError('An error occurred');
      }
    }
  };
  return (
    <div className="p-4 border border-greyVariant text-textColor w-80 h-fit">
      <h2 className="text-center text-2xl">Login</h2>
      <div className="flex flex-col mt-3">
        <label htmlFor="username">Username:</label>
        <input
          className="outline-none border-primary border-2 rounded-xl px-2 py-1"
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label htmlFor="password">Password:</label>
        <input
          className="outline-none border-primary border-2 rounded-xl px-2 py-1"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      {error.length ? <span className="text-red-700 ">{error}</span> : null}
      <div className="mt-6">
        <Button onClick={clickHandler} type="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
