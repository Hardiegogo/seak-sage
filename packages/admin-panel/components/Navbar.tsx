import Image from 'next/image';
import React from 'react';
import logo from '../assets/seekSage-1.png';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { adminState } from '../state/atoms/adminState';
import { logoutUser } from '../services/authServices/authServices';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

const Navbar: React.FC = () => {
  const [admin, setAdmin] = useRecoilState(adminState);
  const router = useRouter();
  const logoutHandler = () => {
    logoutUser(setAdmin);
    router.replace('/login');
  };
  return (
    <header className="">
      <nav className="flex justify-between p-3 border-b-greyVariant border-b items-center ">
        <div className="flex gap-1 items-center relative">
          <Image src={logo} alt="logo" width={50} height={50} className="m-2" />
          <div className="bg-primary min-w-[4px] min-h-[full] h-16 rounded-sm border-none relative"></div>
          <h1 className="text-3xl text-primary font-medium m-2">seekSage</h1>
        </div>
        <div className="flex gap-3">
          {admin.isLoggedIn ? (
            <div className='flex gap-4 items-center'>
              <Link href="/" className="text-primary text-xl">
                Courses
              </Link>
              <Link href="/new-course"className="bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90">
                New course
              </Link>
              <button
                className="border-[1px] px-3 py-2 rounded-xl hover:bg-bgColor"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                className="border-[1px] px-3 py-2 rounded-xl hover:bg-bgColor"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90"
                href="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

