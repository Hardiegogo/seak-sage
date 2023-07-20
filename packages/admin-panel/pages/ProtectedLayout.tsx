import React from 'react';
import RequireAuth from '../components/RequireAuth';
import Navbar from '../components/Navbar';
const ProtectedLayout = ({
  children,
}: {
  children: React.JSX.Element | string;
}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
