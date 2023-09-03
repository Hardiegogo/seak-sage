import { UserSignupForm } from '@seek-sage/ui';
import axios from 'axios';
import { useToasts } from '../state/context/ToastContext';

const signupUser = async (userDetails: {
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
export function Signup() {
  const {addSuccess,addError}=useToasts()

  return (
    <>
      <main className="grid place-items-center">
        <UserSignupForm signupUser={signupUser} addError={addError} addSuccess={addSuccess}/>
      </main>
    </>
  );
}

export default Signup;
