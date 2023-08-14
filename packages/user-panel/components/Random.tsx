// import React, { useState } from 'react';

// function Random() {
//   const [user, setUser] = useState({
//     isLoggedIn:
//       typeof window !== 'undefined'
//         ? localStorage.getItem('token')
//           ? JSON.parse(localStorage.getItem('token') as string)
//           : null
//         : null,
//   });
//   if (!user.isLoggedIn) {
//     return null;
//   }
//   return (
//     <div>
//       <h1>My god</h1>
//       <div>GG</div>
//     </div>
//   );
// }

// export default Random;

import React, { useEffect, useState } from 'react';

function Random() {
  const [user, setUser] = useState({ isLoggedIn: false });
  useEffect(() => {
    setUser({
      isLoggedIn:
        typeof window !== 'undefined'
          ? localStorage.getItem('token')
            ? JSON.parse(localStorage.getItem('token') as string)
            : null
          : null,
    });
  }, []);
  if (!user.isLoggedIn) {
    return null;
  }
  return (
    <div>
      <h1>My god</h1>
      <div>GG</div>
    </div>
  );
}

export default Random;
