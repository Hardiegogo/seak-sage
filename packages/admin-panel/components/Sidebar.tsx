import React from 'react';
import { useSetRecoilState } from 'recoil';
import { coursesFiltersState } from '../state/atoms/coursesFiltersState';

const priceRange=[1000,2000,3000,4000]

const Sidebar: React.FC = () => {
  const setCoursesFilter = useSetRecoilState(coursesFiltersState);
  return (
    <div className="w-1/4 min-w-[240px]  max-w-[260px] h-[calc(100vh-89px)] border-r border-r-greyVariant text-textColor bg-bgDark sticky top-[89px]">
      <div className="m-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filters</h2>
        <h4
          className="cursor-pointer underline"
          onClick={() =>
            setCoursesFilter({
              rating: 0,
              price: 20000,
              published: null,
              priceLowToHigh: null,
            })
          }
        >
          clear
        </h4>
      </div>
      <ul className="p-6 pt-0 flex flex-col gap-3 ">
        <div>
          <h3 className="text-xl font-semibold ">Ratings</h3>
          <div className="mt-2 flex items-center gap-1">
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters, rating: 4 };
                })
              }
            />
            4 Stars and above
          </div>
          <div className='flex items-center gap-1'>
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters, rating: 3 };
                })
              }
            />
            3 Stars and above
          </div>
          <div className='flex items-center gap-1'>
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters, rating: 2 };
                })
              }
            />
            2 Stars and above
          </div>
          <div className='flex items-center gap-1'>
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters, rating: 1 };
                })
              }
            />
            1 Star and above
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold ">Price</h3>
          <div>
          <input type="range" className=" accent-primary bg-white w-full h-2 rounded-lg appearance-none cursor-pointer " id="points" name="points" min="0" max="4"defaultValue={0} onChange={(e)=>{
            setCoursesFilter(filters=>{
              return {...filters,price:priceRange[Number(e.target.value)]}
            })
          }}/>
          <div className='flex items-center gap-1 mt-2'>
            <input
              type="radio"
              name="price"
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters,priceLowToHigh:true };
                })
              }
            />
            Price low to high
          </div>
          <div className='flex items-center gap-1'>
            <input
              type="radio"
              name="price" 
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters,priceLowToHigh:false };
                })
              }
            />
            Price high to low
          </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold ">Courses</h3>
          <div>
          <div className='flex items-center gap-1 mt-2'>
            <input
              type="radio"
              name="courses"
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters,published:true};
                })
              }
            />
            Show published courses
          </div>
          <div className='flex items-center gap-1'>
            <input
              type="radio"
              name="courses" 
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters,published:false};
                })
              }
            />
            Show unpublished courses
          </div>
          <div className='flex items-center gap-1'>
            <input
              type="radio"
              name="courses" 
              onClick={() =>
                setCoursesFilter((filters) => {
                  return { ...filters,published:null};
                })
              }
            />
            Show all courses
          </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;