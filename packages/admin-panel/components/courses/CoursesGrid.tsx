import { fetchCourses } from '../../services/courseServices/courseServices';
import { coursesState } from '../../state/atoms/coursesState';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CourseCard from './CourseCard';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import { filteredCoursesState } from '../../state/selectors/filteredCoursesState';

const CoursesGrid: React.FC = () => {
  const [courses, setCourses] = useRecoilState(coursesState);
  const filteredCourses = useRecoilValue(filteredCoursesState);
  const router = useRouter();
  console.log(courses);
  console.log(filteredCourses);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCourses();
        setCourses(res.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error?.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            router.push('/login');
          }
        }
      }
    })();
  }, []);

  return (
    <main className="p-8 text-textColor flex flex-wrap gap-12 h-fit w-fit">
      {filteredCourses?.length
        ? filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        : 'No courses available'}
    </main>
  );
};

export default CoursesGrid;
