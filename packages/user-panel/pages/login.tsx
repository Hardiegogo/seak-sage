import { UserLoginForm } from '@seek-sage/ui';
import React,{useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/userState';
import {
  loginUser,
} from '../services/userServices/userServices';
import { useToasts } from '../state/context/ToastContext';

const Login = () => {
  const [user, setUser] = useRecoilState(userState);
  const {addError,addSuccess}=useToasts()
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
        addError={addError}
        addSuccess={addSuccess}
      />
    </main>
  );
};

export default Login;
