import axios from 'axios';
import { IUser } from '../../types';
import { SetterOrUpdater } from 'recoil';

export const signupUser = async (userDetails: {
  username: string;
  password: string;
}) => {
  const { username, password } = userDetails;
  const response = await axios({
    method: 'POST',
    url: `/api/auth/signup`,
    data: {
      username,
      password,
    },
  });
  return response;
};

export const loginUser = async (userDetails: {
  username: string;
  password: string;
}) => {
  const { username, password } = userDetails;
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_DEV_BACKEND}/user/login`,
    data: {
      username,
      password,
    },
  });
  return response;
};

export const AuthorisedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_BACKEND,
  timeout:1000,
  headers: (typeof window!=='undefined') ? {
    Authorization:'Bearer ' + JSON.parse(localStorage.getItem('token') as string)
  } : {}
});

export const logoutUser = async (setUser:SetterOrUpdater<IUser>) => {
  setUser({
    username: '',
    id: '',
    isLoggedIn: false,
  });
};
