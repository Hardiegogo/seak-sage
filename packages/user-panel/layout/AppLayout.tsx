import { Footer, Navbar } from '@seek-sage/ui';
import React from 'react';

const AppLayout = ({ children }: { children: React.JSX.Element | string }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
