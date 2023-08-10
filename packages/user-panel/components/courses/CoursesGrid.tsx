import axios from 'axios';
import useCourses from '../../services/courseServices/useCourses';
import { coursesState } from '../../state/atoms/coursesState';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserCourseCard } from '@seek-sage/ui';

const CoursesGrid = () => {
  const courses = useRecoilValue(coursesState);
  const { coursesLoading } = useCourses();
  return (
    <main className='w-full'>
      {coursesLoading ? (
        <div className="w-full h-full grid place-items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 bg-primary"
            viewBox="0 0 24 24"
          ></svg>
        </div>
      ) : (
        courses.map((course) => (
          <UserCourseCard key={course._id} course={course} />
        ))
      )}
    </main>
  );
};

export default CoursesGrid;
