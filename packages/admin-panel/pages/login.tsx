// import { UserLoginForm } from '@seek-sage/ui';
// import LoginForm from '../components/authPages/LoginForm';
// import Navbar from '../components/Navbar';

// export function Login() {
//   return (
//     <>
//       <main className="grid place-items-center pt-20">
//         <UserLoginForm setUser={} />
//       </main>
//     </>
//   );
// }

// export default Login;

import { UserLoginForm } from '@seek-sage/ui';
import React,{useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { adminState } from '../state/atoms/adminState';

const Login = () => {
  const [admin, setAdmin] = useRecoilState(adminState);

  useEffect(() => {
    if (admin.isLoggedIn) {
      setAdmin({
        username: '',
        id: '',
        isLoggedIn: false,
      });
    }
  }, []);
  
  return (
    <main className="grid place-items-center pt-24">
      <UserLoginForm
        setUser={setAdmin}
      />
    </main>
  );
};

export default Login;
