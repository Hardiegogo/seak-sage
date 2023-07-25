import { ICourse } from '../../types';
import { AuthorisedApi } from '../authServices/authServices';

export const fetchCourses = async () => {
  return AuthorisedApi.get('/admin/courses');
};

export const createCourse = async (course: ICourse) => {
  return AuthorisedApi.post('/admin/courses', course);
};
