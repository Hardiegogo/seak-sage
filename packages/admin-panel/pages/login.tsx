import LoginForm from '../components/authPages/LoginForm';
import Navbar from '../components/Navbar';

export function Login() {
  return (
    <>
      <main className="grid place-items-center">
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
