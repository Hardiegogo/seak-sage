import axios from 'axios';
import useCourses from '../../services/courseServices/useCourses';
import { coursesState } from '../../state/atoms/coursesState';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserCourseCard } from '@seek-sage/ui';
import { filteredCoursesState } from '../../state/selectors/filteredCoursesState';

const CoursesGrid = () => {
  const filteredCourses = useRecoilValue(filteredCoursesState);
  const { coursesLoading } = useCourses();
  return (
    <main className="p-8 px-12 ">
      {coursesLoading ? (
        <div className="w-full h-full grid place-items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 bg-primary"
            viewBox="0 0 24 24"
          ></svg>
        </div>
      ) : (
        <div className='text-textColor flex flex-wrap gap-16 h-fit w-fit'>
          {filteredCourses.map((course) => (
            <UserCourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </main>
  );
};

export default CoursesGrid;
