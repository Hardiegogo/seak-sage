import { UserSignupForm } from '@seek-sage/ui';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../state/atoms/userState';
import { signupUser } from '../services/userServices/userServices';

const Signup = () => {
  const setUser = useSetRecoilState(userState);
  return (
    <main className="grid place-items-center pt-4">
      <UserSignupForm signupUser={signupUser} />
    </main>
  );
};

export default Signup;
