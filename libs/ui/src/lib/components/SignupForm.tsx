import React, { useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useRouter } from 'next/router';
import { isAxiosError, AxiosResponse } from 'axios';

interface IUser {
  username: string;
  id: string;
  isLoggedIn: boolean;
}

const SignupForm = ({
  setUser,
  signupUser,
}: {
  setUser: SetterOrUpdater<IUser>;
  signupUser: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<AxiosResponse<any, any>>;
}) => {
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
      const res = await signupUser({ username, password });
      // if (res.status === 201) {
      //   localStorage.setItem('token', JSON.stringify(res.data.token));
      //   localStorage.setItem(
      //     'user',
      //     JSON.stringify({ ...res.data.user, isLoggedIn: true })
      //   );
      //   setUser({ ...res.data.user, isLoggedIn: true });
      //   setUsername('');
      //   setPassword('');
      //   router.replace('/');
      // }
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
    <form className="p-4 border border-greyVariant mt-20 text-textColor w-80">
      <h2 className="text-center text-2xl">Signup</h2>
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
      <button
        className="mt-6 bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90 w-full"
        onClick={clickHandler}
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
