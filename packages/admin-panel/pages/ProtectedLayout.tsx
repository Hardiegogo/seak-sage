import React from 'react';
import RequireAuth from '../components/RequireAuth';
import Navbar from '../components/Navbar';
const ProtectedLayout = ({
  children,
}: {
  children: React.JSX.Element | string;
}) => {
  return (
    <RequireAuth>
      <>
        <Navbar/>
        {children}
      </>
    </RequireAuth>
  );
};

export default ProtectedLayout;
