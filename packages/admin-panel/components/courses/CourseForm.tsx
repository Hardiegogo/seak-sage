import { useRouter } from 'next/router';
import { createCourse } from '../../services/courseServices/courseServices';
import { ICourse } from '../../types';
import React, { Reducer, useReducer } from 'react';

type ACTIONTYPE = {
  type: 'title' | 'rating' | 'imgLink' | 'description' | 'price' | 'published';
  payload: string | number | boolean;
};

const newCourseReducer: Reducer<ICourse, ACTIONTYPE> = (
  state: ICourse,
  action
) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.payload as string };
    case 'rating':
      return { ...state, rating: action.payload as number };
    case 'imgLink':
      return { ...state, imgLink: action.payload as string };
    case 'description':
      return { ...state, description: action.payload as string };
    case 'price':
      return { ...state, price: action.payload as number };
    case 'published':
      return { ...state, published: action.payload as boolean };
    default:
      return state;
  }
};

const defaultCourse: ICourse = {
  title: '',
  rating: 0,
  description: '',
  published: false,
  price: 0,
  imgLink: '',
};

const CourseForm: React.FC = () => {
  const [newCourse, dispatchNewCourse] = useReducer(
    newCourseReducer,
    defaultCourse
  );
  const router = useRouter();
  const createCourseHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async (e) => {
    e.preventDefault();
    try {
      const res = await createCourse(newCourse);
      if (res.status === 201) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-full">
      <div className="flex gap-4">
        <div className="mt-4">
          <label htmlFor="">
            Course title : <br />
            <input
              type="text"
              className="px-4 py-2 rounded-xl border-primary border-2 outline-none w-full"
              value={newCourse.title}
              onChange={(e) => {
                dispatchNewCourse({
                  type: 'title',
                  payload: e.target.value,
                });
              }}
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="">
            Price : <br />
            <input
              type="number"
              className="px-4 py-2 rounded-xl border-primary border-2 outline-none w-full"
              value={newCourse.price}
              onChange={(e) => {
                dispatchNewCourse({
                  type: 'price',
                  payload: e.target.value,
                });
              }}
            />
          </label>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="">
          Course Description : <br />
          <textarea
            className="px-4 py-2 rounded-xl border-primary border-2 outline-none w-full h-32 resize-none"
            value={newCourse.description}
            onChange={(e) => {
              dispatchNewCourse({
                type: 'description',
                payload: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <div className="mt-4 flex justify-between">
        <label htmlFor="">
          Rating : <br />
          <input
            type="number"
            max="5"
            className="px-4 py-2 rounded-xl border-primary border-2 outline-none w-full"
            value={newCourse.rating}
            onChange={(e) => {
              dispatchNewCourse({
                type: 'rating',
                payload: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="">
          Image link : <br />
          <input
            type="text"
            className="px-4 py-2 rounded-xl border-primary border-2 outline-none w-full"
            value={newCourse.imgLink}
            onChange={(e) => {
              dispatchNewCourse({ type: 'imgLink', payload: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="mt-4">
        Published :
        <div className="flex gap-4 mt-0">
          <label htmlFor="">
            <input
              type="radio"
              name="published"
              id="published"
              defaultChecked={newCourse.published}
              onClick={(e) => {
                dispatchNewCourse({ type: 'published', payload: true });
              }}
            />{' '}
            True
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="published"
              id="published"
              defaultChecked={!newCourse.published}
              onClick={(e) => {
                dispatchNewCourse({ type: 'published', payload: false });
              }}
            />{' '}
            False
          </label>
        </div>
      </div>
      <button
        onClick={createCourseHandler}
        type="submit"
        className="bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90 w-full mt-4"
      >
        Create
      </button>
    </form>
  );
};

export default CourseForm;
