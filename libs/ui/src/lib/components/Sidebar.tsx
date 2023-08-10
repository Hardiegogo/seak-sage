import React from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import Stars from './Stars';

const priceRange = [1000, 2000, 3000, 4000];

interface ICourseFilters {
  rating: number;
  price: number;
  published: null | boolean;
  priceLowToHigh: null | boolean;
}

const Sidebar: React.FC<{
  setFilter: SetterOrUpdater<ICourseFilters>;
}> = ({ setFilter }) => {
  return (
    <div className="w-1/4 min-w-[280px]  max-w-[260px] h-[calc(100vh-77px)] border-r border-r-greyVariant text-textColor  sticky top-[77px]">
      <div className="m-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filters</h2>
        <h4
          className="cursor-pointer underline text-textColor font-semibold"
          onClick={() =>
            setFilter({
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
      <ul className="p-6 pt-0 flex flex-col mt-8 gap-12 text-lightText ">
        <div>
          <h3 className="text-xl font-semibold ">Ratings</h3>
          <div className="mt-2 flex items-center gap-1">
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setFilter((filters) => {
                  return { ...filters, rating: 4 };
                })
              }
            />
            <Stars rating={4} filled={true} /> and above
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setFilter((filters) => {
                  return { ...filters, rating: 3 };
                })
              }
            />
            <Stars rating={3} filled={true} /> and above
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setFilter((filters) => {
                  return { ...filters, rating: 2 };
                })
              }
            />
            <Stars rating={2} filled={true} /> and above
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="rating"
              onClick={() =>
                setFilter((filters) => {
                  return { ...filters, rating: 1 };
                })
              }
            />
            <Stars rating={1} filled={true} /> and above
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold ">Price</h3>
          <div>
            <input
              type="range"
              className=" accent-textColor bg-bgDarker w-full h-2 rounded-lg appearance-none cursor-pointer "
              id="points"
              name="points"
              min="0"
              max="4"
              defaultValue={0}
              onChange={(e) => {
                setFilter((filters) => {
                  return {
                    ...filters,
                    price: priceRange[Number(e.target.value)],
                  };
                });
              }}
            />
            <div className="flex items-center gap-1 mt-2">
              <input
                type="radio"
                name="price"
                onClick={() =>
                  setFilter((filters) => {
                    return { ...filters, priceLowToHigh: true };
                  })
                }
              />
              Price low to high
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="price"
                onClick={() =>
                  setFilter((filters) => {
                    return { ...filters, priceLowToHigh: false };
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
            <div className="flex items-center gap-1 mt-2">
              <input
                type="radio"
                name="courses"
                onClick={() =>
                  setFilter((filters) => {
                    return { ...filters, published: true };
                  })
                }
              />
              Show published courses
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="courses"
                onClick={() =>
                  setFilter((filters) => {
                    return { ...filters, published: false };
                  })
                }
              />
              Show unpublished courses
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="courses"
                onClick={() =>
                  setFilter((filters) => {
                    return { ...filters, published: null };
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
