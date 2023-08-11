import React from 'react';
import Button from '../components/Button';
import ProgressiveImage from '../components/ProgressiveImage';
import Stars from '../components/Stars';

interface ICourse {
  title: string;
  rating: number;
  description: string;
  published: boolean;
  price: number;
  imgLink: string;
  _id?: string;
}

const CourseCard: React.FC<{course:ICourse}> = ({course}) => {
  return <div className=' shadow-md w-[300px]'>
    <div className='w-[300px] max-h-[160px] overflow-hidden grid place-items-center bg-bgColor'>
        <ProgressiveImage imgSrc={course.imgLink}/>
    </div>
    <div className="p-4 py-3">
        <h2 className="text-[22px] font-bold text-textColor ">{course.title}</h2>
        <p className="text-sm text-lightText line-clamp-3 ">
          {course.description}
        </p>
        <div className="flex justify-between mt-2 items-center">
          <h3 className="text-base font-semibold">₹{course.price}</h3>
          <Stars rating={course.rating} />
        </div>
      </div>
    <div className='p-4 pt-0'>
    <Button type='primary'>Buy now</Button>
    </div>
  </div>;
};

export default CourseCard;
