import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import Admin from '../models/adminModel';
import Course from '../models/courseModel';
import jwt from 'jsonwebtoken';

interface IAdmin {
  username: string;
  password: string;
  _id?: string;
}

const generatejwtForAdmin = (admin: IAdmin): string => {
  return jwt.sign({ username: admin.username }, process.env.ADMIN_SECRET);
};

const adminSignup = async (req: Request, res: Response) => {
  const admin: IAdmin = req.body;
  const existingAdmin = await Admin.findOne({ username: admin.username });
  if (existingAdmin) {
    res.status(403).send('username already exists');
  } else {
    const newAdmin = new Admin(admin);
    await newAdmin.save();
    const authToken = generatejwtForAdmin(admin);
    res
      .status(201)
      .json({ message: 'Admin created successfully', token: authToken });
  }
};

const adminLogin = async (req: Request, res: Response) => {
  // logic to log in admin
  const admin = req.body;
  if (admin?.username?.length && admin?.password?.length) {
    const existingAdmin = await Admin.findOne(admin);
    if (existingAdmin) {
      const token = generatejwtForAdmin(admin);
      res.json({ message: 'Logged in successfully', token: token,admin:{username:existingAdmin.username,id:existingAdmin._id} });
    } else res.status(403).send('User not found');
  } else {
    res.status(403).send('Please enter details correctly');
  }
};

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // logic to create a course
  const course = new Course(req.body);
  await course
    .save()
    .then((course) => {
      res.status(201).json({
        message: 'Course created successfully',
        courseId: course._id.toString(),
      });
    })
    .catch((err: unknown) => {
      next(err);
    });
};

const updateCourse = async (req: Request, res: Response) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {
    new: true,
  });
  if (course) {
    console.log(course);
    res.json({ message: 'Course updated successfully', course: course });
  } else res.status(404).json({ message: 'Course not found' });
};

const getCourses = async (req: Request, res: Response) => {
  // logic to get all courses
  const courses = await Course.find({});
  res.json(courses);
};

export { getCourses, updateCourse, createCourse, adminSignup, adminLogin };
