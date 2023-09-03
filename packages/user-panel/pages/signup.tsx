import { UserSignupForm } from '@seek-sage/ui';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../state/atoms/userState';
import { signupUser } from '../services/userServices/userServices';
import { useToasts } from '../state/context/ToastContext';

const Signup = () => {
  const setUser = useSetRecoilState(userState);
  const { addError, addSuccess } = useToasts();
  return (
    <main className="grid place-items-center pt-4">
      <UserSignupForm
        signupUser={signupUser}
        addError={addError}
        addSuccess={addSuccess}
      />
    </main>
  );
};

export default Signup;
