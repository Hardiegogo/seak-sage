import axios from 'axios';
import { IAdmin } from 'packages/admin-panel/types';
import { SetterOrUpdater } from 'recoil';

export const loginUser = async (adminDetails: {
  username: string;
  password: string;
}) => {
  const { username, password } = adminDetails;
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_DEV_BACKEND}admin/login`,
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
    url: `${process.env.NEXT_PUBLIC_DEV_BACKEND}admin/signup`,
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
