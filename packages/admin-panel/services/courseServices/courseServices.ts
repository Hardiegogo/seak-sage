import e from 'express';
import { ICourse } from '../../types';
import { AuthorisedApi } from '../authServices/authServices';

export const fetchCourses = async () => {
  return AuthorisedApi.get('/admin/courses');
};

export const createCourse = async (course: ICourse) => {
  return AuthorisedApi.post('/admin/courses', course);
};

export const deleteCourse = async (courseId : string)=>{
  return AuthorisedApi.delete(`/admin/courses/${courseId}`)
}

export const editCourse=async (course : ICourse)=>{
  return AuthorisedApi.put(`/admin/courses/${course._id}`,{...course})
}