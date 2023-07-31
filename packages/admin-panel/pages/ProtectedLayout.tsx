import React from 'react';
import RequireAuth from '../components/RequireAuth';
import Navbar from '../components/Navbar';
const ProtectedLayout = ({
  children,
}: {
  children: React.JSX.Element | string;
}) => {
  return (
    <div className='bg-bgColor min-h-screen'>
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
