import { IAdmin } from '../../types';
import { SetterOrUpdater } from 'recoil';

export const logoutUser = async (setAdmin:SetterOrUpdater<IAdmin>) => {
  setAdmin({
    username: '',
    id: '',
    isLoggedIn: false,
  });
};
