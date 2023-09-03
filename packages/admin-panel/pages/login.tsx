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
import { useToasts } from '../state/context/ToastContext';

const Login = () => {
  const [admin, setAdmin] = useRecoilState(adminState);
  const {addSuccess,addError}=useToasts()

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
        addError={addError}
        addSuccess={addSuccess}
      />
    </main>
  );
};

export default Login;
