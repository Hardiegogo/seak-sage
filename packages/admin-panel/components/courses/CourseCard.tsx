import React from 'react';
import { ICourse } from '../../types';
import Image from 'next/image';
import ProgressiveLoader from '../ProgressiveLoader';
import Link from 'next/link';
import Stars from '../Stars';

const CourseCard = ({ course }: { course: ICourse }) => {
  return (
    <Link
      href={`/${course._id}`}
      // shadow-lg shadow-[#082032]
      className=" cursor-pointer text-textColor w-80 h-fit overflow-hidden shadow-lg shadow-opacity-50"
    >
      <div className="w-full h-40 relative">
        <ProgressiveLoader imgSrc={course.imgLink} />
      </div>
      <div className="p-4 py-2">
        <h2 className="text-[22px] font-bold text-textColor ">{course.title}</h2>
        <p className="text-sm text-lightText line-clamp-3 ">
          {course.description}
        </p>
        <div className="flex justify-between mt-2 items-center">
          <h3 className="text-base font-semibold">₹{course.price}</h3>
          <Stars rating={course.rating} />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
