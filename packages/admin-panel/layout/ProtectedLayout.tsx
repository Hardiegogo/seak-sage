import React from 'react';
import RequireAuth from '../components/RequireAuth';
import Navbar from '../components/Navbar';
const ProtectedLayout = ({
  children,
}: {
  children: React.JSX.Element | string;
}) => {
  return (
    <main className='min-h-screen bg-bgColor'>
      <Navbar />
      {children}
    </main>
  );
};

export default ProtectedLayout;
