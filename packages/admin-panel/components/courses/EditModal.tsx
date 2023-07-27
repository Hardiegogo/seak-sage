import React, { useReducer, Reducer } from 'react';
import { ICourse } from '../../types';
import { useRouter } from 'next/router';
import { editCourse } from '../../services/courseServices/courseServices';
import { RxCross2 } from 'react-icons/rx';

type ACTIONTYPE = {
  type: 'title' | 'rating' | 'imgLink' | 'description' | 'price' | 'published';
  payload: string | number | boolean;
};

const selectedCourseReducer: Reducer<ICourse, ACTIONTYPE> = (
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

const EditModal: React.FC<{
  course: ICourse;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ course, setIsEdit }) => {
  const [selectedCourse, dispatchNewCourse] = useReducer(
    selectedCourseReducer,
    course
  );
  const router = useRouter();
  const saveCourseHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const res = await editCourse(selectedCourse);
      if (res.status === 200) {
        router.replace('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute top-0 left-0 h-screen w-screen grid place-items-center z-10 modal bg-opacity-50 bg-black">
      <form className="w-[460px] mx-auto bg-bgColor p-10 rounded-lg ">
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => setIsEdit(false)}
        >
          <RxCross2 size={25} />
        </div>
        <div className="flex gap-4">
          <div className="mt-4">
            <label htmlFor="">
              Course title : <br />
              <input
                type="text"
                className="px-4 py-2 rounded-xl border-primary border-2 outline-none w-full"
                value={selectedCourse.title}
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
                value={selectedCourse.price}
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
              value={selectedCourse.description}
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
              value={selectedCourse.rating}
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
              value={selectedCourse.imgLink}
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
                defaultChecked={selectedCourse.published}
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
                defaultChecked={!selectedCourse.published}
                onClick={(e) => {
                  dispatchNewCourse({ type: 'published', payload: false });
                }}
              />{' '}
              False
            </label>
          </div>
        </div>
        <button
          onClick={saveCourseHandler}
          type="submit"
          className="bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90 w-full mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditModal;
