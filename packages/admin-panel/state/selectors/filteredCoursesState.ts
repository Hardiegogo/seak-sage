import { selector } from 'recoil';
import { coursesState } from '../atoms/coursesState';
import { coursesFiltersState } from '../atoms/coursesFiltersState';
import { ICourse } from '../../types';

const filteredBasedOnRating = (course: ICourse, rating: number) => {
  if (rating && course.rating < rating) {
    return false;
  } else return true;
};

const filterBasedOnPriceRange = (course: ICourse, price: number) => {
  if (price && course.price > price) {
    return false;
  } else return true;
};

const sortBasedOnPrice = (
  courses: ICourse[],
  priceLowToHigh: null | boolean
) => {
  if (priceLowToHigh !== null) {
    return [
      ...courses.sort((a, b) => {
        if (priceLowToHigh) {
          return a.price - b.price;
        } else return b.price - a.price;
      }),
    ];
  } else return courses;
};

const filterBasedonPublishStatus = (
  courses: ICourse,
  published: null | boolean
) => {
  if (published !== null && courses.published !== published) {
    return false;
  } else return true;
};

export const filteredCoursesState = selector({
  key: 'filteredCoursesState',
  get: ({ get }) => {
    const courses = get(coursesState);
    const filtersList = get(coursesFiltersState);
    const filteredCourses = courses.filter((course) => {
      return (
        filterBasedOnPriceRange(course, filtersList.price) &&
        filterBasedonPublishStatus(course, filtersList.published) &&
        filteredBasedOnRating(course, filtersList.rating)
      );
    });
    const sortedCourses = sortBasedOnPrice(
      filteredCourses,
      filtersList.priceLowToHigh
    );
    return sortedCourses;
  },
});
