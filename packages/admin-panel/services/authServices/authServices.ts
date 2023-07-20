import axios from 'axios';
import { IAdmin } from '../../types';
import { SetterOrUpdater } from 'recoil';
import { type } from 'os';

export const loginUser = async (adminDetails: {
  username: string;
  password: string;
}) => {
  const { username, password } = adminDetails;
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_DEV_BACKEND}/admin/login`,
    data: {
      username,
      password,
    },
  });
  return response;
};

export const signupUser = async (adminDetails: {
  username: string;
  password: string;
}) => {
  const { username, password } = adminDetails;
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_DEV_BACKEND}/admin/signup`,
    data: {
      username,
      password,
    },
  });
  return response;
};

export const logoutUser = async (setAdmin:SetterOrUpdater<IAdmin>) => {
  localStorage.removeItem('admin');
  localStorage.removeItem('token');
  setAdmin({
    username: '',
    id: '',
    isLoggedIn: false,
  });
};

export const AuthorisedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_BACKEND,
  timeout:1000,
  headers: (typeof window!=='undefined') ? {
    Authorization:'Bearer ' + JSON.parse(localStorage.getItem('token') as string)
  } : {}
});
