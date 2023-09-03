import React, { useState } from 'react';
import Button from '../components/Button';
import ProgressiveImage from '../components/ProgressiveImage';
import Stars from '../components/Stars';
import { AxiosResponse, isAxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import ConfirmationModal from '../components/ConfirmationModal';

interface ICourse {
  title: string;
  rating: number;
  description: string;
  published: boolean;
  price: number;
  imgLink: string;
  _id?: string;
}

const CourseCard: React.FC<{
  course: ICourse;
  buyCourse?: (courseId: string) => Promise<AxiosResponse>;
  isMyCourse?: boolean;
  addSuccess: (message: string) => void;
  addError: (message: string) => void;
}> = ({ course, buyCourse, isMyCourse, addSuccess, addError }) => {
  const [isConfirmModal, setIsConfirmModal] = useState(false);

  const buyHandler: React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      if (buyCourse) {
        const res = await buyCourse(course._id as string);
        if (res.status === 200) {
          addSuccess('Course purchased successfully.');
        } else {
          addError('Error buying course.');
        }
      }
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        if (error.request.status === 401) {
          addError('Please sign in.');
          return signIn();
        } else if(error.request.status===403){
          addError('Course already bought.');
        }
      }
    }
    setIsConfirmModal(false);
  };
  return (
    <div className=" shadow-md w-[300px]">
      <div className="w-[300px] max-h-[160px] overflow-hidden grid place-items-center bg-bgColor">
        <ProgressiveImage imgSrc={course.imgLink} />
      </div>
      <div className="p-4 py-3">
        <h2 className="text-[22px] font-bold text-textColor ">
          {course.title}
        </h2>
        <p className="text-sm text-lightText line-clamp-3 ">
          {course.description}
        </p>
        <div className="flex justify-between mt-2 items-center">
          <h3 className="text-base font-semibold">₹{course.price}</h3>
          <Stars rating={course.rating} />
        </div>
      </div>
      {!isMyCourse ? (
        <div className="p-4 pt-0">
          <Button type="primary" onClick={() => setIsConfirmModal(true)}>
            Buy now
          </Button>
        </div>
      ) : (
        ''
      )}
      <ConfirmationModal
        isModal={isConfirmModal}
        setIsModal={setIsConfirmModal}
        message="Confirm your purchase"
        clickHandler={(e) => buyHandler(e)}
      />
    </div>
  );
};

export default CourseCard;
