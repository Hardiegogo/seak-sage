import { userState } from '../../state/atoms/userState';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { AuthorisedApi } from '../userServices/userServices';

const usePurchasedCourses = () => {
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await AuthorisedApi.get('/user/purchasedCourses');
        if (res.status === 200) {
          setUser((user) => ({
            ...user,
            purchasedCourses: res.data.purchasedCourses,
          }));
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    })();
  }, []);

  return {
    coursesLoading: loading,
  };
};

export default usePurchasedCourses;
