import { UserSignupForm } from '@seek-sage/ui';
import axios from 'axios';

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
  return (
    <>
      <main className="grid place-items-center">
        <UserSignupForm signupUser={signupUser}/>
      </main>
    </>
  );
}

export default Signup;
