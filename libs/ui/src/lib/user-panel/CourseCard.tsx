import React from 'react';

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
  return <div>CourseCard</div>;
};

export default CourseCard;
