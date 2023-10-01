import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

function RequireAuth({ children }: { children: React.JSX.Element | string }) {
  const {status}=useSession()
  if(status==="unauthenticated"){
    signIn()
  }
  if(status==="loading"){
    return null
  }
  if(status==="authenticated"){
    return <>{children}</>
  }
}

export default RequireAuth;
