import axios from 'axios';
import { coursesState } from '../../state/atoms/coursesState';
import React, { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

function useCourses() {
  const setCourses = useSetRecoilState(coursesState);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          'api/courses'
        );
        if (res.status === 200) {
          setLoading(false)
          setCourses(res.data);
        }
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    })();
  }, []);

  return {
    coursesLoading:loading
  };
}

export default useCourses;
