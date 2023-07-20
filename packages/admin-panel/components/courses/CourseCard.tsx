import React from 'react';
import { ICourse } from '../../types';
import Image from 'next/image';
import ProgressiveLoader from '../ProgressiveLoader';

const CourseCard = ({ course }: { course: ICourse }) => {
  return (
    <div className="shadow-md cursor-pointer text-textColor w-52 h-fit rounded-xl hover:bg-bgDark overflow-hidden">
      <div className="w-full h-32 relative">
        <ProgressiveLoader imgSrc={course.imgLink} />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-semibold text-textColor ">{course.title}</h2>
        <div className='flex justify-between mt-2 items-center'>
          <h3 className='text-base'>₹{course.price}</h3>
          <p className='text-sm'>Rating: {course.rating} stars</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
