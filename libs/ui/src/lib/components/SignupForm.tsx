import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { isAxiosError, AxiosResponse } from 'axios';
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

const SignupForm = ({
  signupUser,
  addSuccess,
  addError,
}: {
  signupUser: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<AxiosResponse<any, any>>;
  addError: (message: string) => void;
  addSuccess: (message: string) => void;
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<
    z.inferFlattenedErrors<typeof userInputSchema>
  >();

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const parsedInput = userInputSchema.safeParse({ username, password });
      if (!parsedInput.success) {
        setErrors(parsedInput.error.flatten());
      } else {
        const res = await signupUser({ username:parsedInput.data.username, password:parsedInput.data.password });
        if (res.status === 201) {
          addSuccess('User created successfully.');
        } else {
          addError('Error creating user.');
        }
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
      addError("Error creating user.")
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
      </div>
      {errors?.fieldErrors?.password ? (
        <p className="text-red-500">{errors.fieldErrors['password']}</p>
      ) : null}
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
