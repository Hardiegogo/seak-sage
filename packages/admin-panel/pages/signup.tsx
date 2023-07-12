import Image from 'next/image';
import logo from '../assets/seekSage-1.png';
import SignupForm from '../components/authPages/SignupForm';
import Link from 'next/link';
import Navbar from '../components/Navbar';
export function Signup() {
  return (
    <>
    <Navbar/>
      <main className="grid place-items-center">
        <SignupForm />
      </main>
    </>
  );
}

export default Signup;
