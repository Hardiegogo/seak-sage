import { Request, Response } from "express";
import User from "../models/userModel";
import Course from "../models/courseModel";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

interface IUser {
  username: string;
  password: string;
  purchasedCourses: string[];
  _id?: string;
}


interface ICourse {
  title: string;
  rating: number;
  description: string;
  published: boolean;
  price: number;
  imgLink: string;
  _id?: string;
  ObjectId?:mongoose.Types.ObjectId
}

declare module 'express'{
  interface Request{
    user?:Partial<IUser>
  }
}

const generatejwtForUser = (user: IUser): string => {
  return jwt.sign({ username: user.username }, process.env.USER_SECRET, {
    expiresIn: "2h",
  });
};

const userSignup = async (req: Request, res: Response) => {
  // logic to sign up user
  const user: IUser = req.body;
  const existingUser = await User.findOne({ username: user.username });
  if (existingUser) {
    res.status(403).send("username already exists");
  } else {
    user.purchasedCourses = [];
    const newUser = new User(user);
    await newUser.save();
    const authToken = generatejwtForUser(user);
    res
      .status(201)
      .json({ message: "User created successfully", token: authToken });
  }
};

const userLogin = async (req: Request, res: Response) => {
  // logic to log in user
  const user = req.body;
  const existingUser = await User.findOne(user);
  if (existingUser) {
    const token = generatejwtForUser(user);
    res.json({ message: "Logged in successfully", token: token });
  } else res.status(404).send("User not found");
};

const getAllCourses = async (req: Request, res: Response) => {
  // logic to list all courses
  const courses = await Course.find({});
  res.json(courses);
};

const purchaseCourse = async (req: Request, res: Response) => {
  // logic to purchase a course
  const courseId = req.params.courseId;
  const course : ICourse = await Course.findById(courseId);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    user.purchasedCourses.push(course.ObjectId);
    await user.save();
    res.json({ message: "Course purchased successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
};

const getPurchasedCourses = async (req: Request, res: Response) => {
  // logic to view purchased courses
  const user = await User.findOne({ username: req.user.username }).populate(
    "purchasedCourses"
  );
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
};

export {
  getAllCourses,
  getPurchasedCourses,
  userLogin,
  userSignup,
  purchaseCourse
}
