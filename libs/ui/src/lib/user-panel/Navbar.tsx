import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/seekSage-1.png';
import Link from 'next/link';
import Button from '../components/Button';
import { BiUser, BiSolidDownArrow } from 'react-icons/bi';
import dynamic from 'next/dynamic';
import { SetterOrUpdater } from 'recoil';
import { signIn } from 'next-auth/react';
interface IUser {
  username: string;
  id: string;
  isLoggedIn: boolean;
}

interface NavProps {
  user: IUser;
  logoutUser: () => void;
}

const Navbar: React.FC<NavProps> = ({ user, logoutUser }) => {
  const [isUserDropDown, setIsUserDropDown] = useState(false);
  const logoutHandler = () => {
    setIsUserDropDown(false);
    logoutUser();
  };
  return (
    <header className="sticky top-0 z-10 bg-bgColor text-textColor h-[77px]">
      <nav className="flex justify-between p-3 border-b-greyVariant border-b items-center">
        <div className="flex gap-1 items-center">
          <Image src={logo} alt="logo" width={50} height={50} className="m-2" />
          <h1 className="text-[26px] text-primary font-bold">
            <Link href="/">seekSage</Link>
          </h1>
        </div>
        {user.isLoggedIn ? (
          <div className="flex gap-4 items-center relative">
            <Link href="/courses" className="underline text-textColor">
              Courses
            </Link>

            <div
              className="flex items-center gap-0 cursor-pointer"
              onClick={() => setIsUserDropDown(!isUserDropDown)}
            >
              <BiUser size={25} />
              <BiSolidDownArrow size={15} />
            </div>
            <div className="z-10">
              {isUserDropDown ? (
                <div className="absolute right-5 top-8 border border-greyVariant rounded-lg w-full">
                  <Link href="/myCourses">
                    <p
                      className="text-lg px-4 py-2 hover:bg-bgDark rounded-lg cursor-pointer bg-bgColor"
                      onClick={() => setIsUserDropDown(false)}
                    >
                      My courses
                    </p>
                  </Link>
                  <p
                    className="text-lg px-4 py-2 hover:bg-bgDark rounded-lg cursor-pointer bg-bgColor"
                    onClick={logoutHandler}
                  >
                    Logout
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link href="/courses" className="underline text-textColor">
              Courses
            </Link>
            {/* <Link href="/login"> */}
              <Button type="normal" onClick={()=>signIn()}>Sign in</Button>
            {/* </Link> */}
            <Link href="/signup">
              <Button type="primary">Register</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });