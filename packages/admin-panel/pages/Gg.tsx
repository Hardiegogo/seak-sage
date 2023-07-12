import React from 'react';
import ProtectedLayout from './ProtectedLayout';
import Link from 'next/link';

function Gg() {
  return (
    <ProtectedLayout>
        <main className='bg-cyan-300 h-[100vh]'>
          panda <br>
          </br>
          <Link href="/">man</Link>
        </main>
    </ProtectedLayout>
  );
}

export default Gg;
