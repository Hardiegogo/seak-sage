import Image from 'next/image';
import logo from '../assets/seekSage-1.png';
import LoginForm from '../components/authPages/LoginForm';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export function Login() {
  return (
    <>
      <Navbar/>
      <main className="grid place-items-center">
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
