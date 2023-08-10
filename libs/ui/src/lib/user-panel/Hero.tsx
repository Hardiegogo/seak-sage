import React from 'react';
import Image from 'next/image';
import HeroSrc from '../assets/H.svg';
import Button from '../components/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="p-4 flex  w-[80%] mx-auto">
      <div className="flex-1 grid place-items-center">
        <div>
          <h1 className="text-textColor text-6xl font-extrabold">
            Learn Without Boundaries
          </h1>
          <div className="flex gap-2 mt-8">
            <Link href="/courses" className='w-full'>
              <Button type="primary" className="py-4 text-lg font-semibold">
                Explore courses
              </Button>
            </Link>

            <Button type="normal" className="py-4 text-lg font-semibold">
              Become a seller
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative flex justify-end h-full">
        <Image
          src={HeroSrc}
          alt="Smart-guy"
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'fit',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
