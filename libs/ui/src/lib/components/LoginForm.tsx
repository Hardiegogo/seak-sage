import React, { useState } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { isAxiosError, AxiosInstance, AxiosResponse } from 'axios';
import Button from './Button';
import { getSession, signIn } from 'next-auth/react';
import { z } from 'zod';

const userInputSchema = z.object({
  username: z
    .string()
    .min(3, 'username must have atleast 3 characters')
    .max(40, 'username max length should be 40 characters'),
  password: z
    .string()
    .min(6, 'password must have atleast 6 characters')
    .max(20, 'password max length should be 20 characters'),
});

interface IUser {
  username: string;
  id: string;
  isLoggedIn: boolean;
}

const LoginForm: React.FC<{
  setUser: SetterOrUpdater<IUser>;
  addError: (message: string) => void;
  addSuccess: (message: string) => void;
}> = ({ setUser, addError, addSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [errors, setErrors] =
    useState<z.inferFlattenedErrors<typeof userInputSchema> | null>();
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    setErrors(null);
    try {
      const parsedInput = userInputSchema.safeParse({ username, password });
      if (!parsedInput.success) {
        setErrors(parsedInput.error.flatten());
      } else {
        const res = await signIn('credentials', {
          username,
          password,
          redirect: false,
          callbackUrl: '/',
        });
        if (res?.status === 200) {
          addSuccess('Successfully logged in');
          router.replace('/');
        } else {
          setUsername('');
          setPassword('');
          addError('error signing in');
        }
        const session = await getSession();
        setUser({
          ...session?.user,
          isLoggedIn: true,
        });
      }
    } catch (error) {
      setUsername('');
      setPassword('');
      if (isAxiosError(error)) {
        if (error.response) {
          addError(error.response.data);
        }
      } else {
        addError('An error occurred');
      }
      addError('Error creating user.');
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
        {errors?.fieldErrors?.username ? (
          <p className="text-red-500">{errors.fieldErrors['username']}</p>
        ) : null}
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
        {errors?.fieldErrors?.password ? (
          <p className="text-red-500">{errors.fieldErrors['password']}</p>
        ) : null}
      </div>
      <div className="mt-6">
        <Button onClick={clickHandler} type="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
