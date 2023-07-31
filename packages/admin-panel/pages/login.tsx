import LoginForm from '../components/authPages/LoginForm';
import Navbar from '../components/Navbar';

export function Login() {
  return (
    <>
      <main className="grid place-items-center pt-20">
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
