import React from 'react';
import Image from 'next/image';
import logo from '../assets/seekSage-1.png';
import Link from 'next/link';
import Button from '../components/Button';
import { useRecoilValue } from 'recoil';


const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-bgColor text-textColor h-[77px]">
      <nav className="flex justify-between p-3 border-b-greyVariant border-b items-center">
        <div className="flex gap-1 items-center">
          <Image src={logo} alt="logo" width={50} height={50} className="m-2" />
          <h1 className="text-[26px] text-primary font-bold">seekSage</h1>
        </div>
        <div className='flex gap-4 items-center'>
          <Link href='/' className='underline text-textColor'>Courses</Link>
          <Link href='/'><Button type='normal'>Sign in</Button></Link>
          <Link href='/'><Button type="primary">Register</Button></Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
