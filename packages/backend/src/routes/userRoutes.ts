import express from 'express';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import {
  getAllCourses,
  userLogin,
  userSignup,
  purchaseCourse,
  getPurchasedCourses,
} from '../controllers/userControllers';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import path from 'path';
config({ path: path.resolve(__dirname, '../../.env') });

const router = express.Router();

const authenticateJwtForUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(
      token,
      process.env.USER_SECRET,
      (err: Error, verifiedToken: { username: string }) => {
        if (err) {
          res.status(401).send('authentication failed');
        } else {
          req.user = verifiedToken;
          next();
        }
      }
    );
  } else {
    res.sendStatus(401);
  }
};

// User routes
router.post('/signup', userSignup);

router.post('/login', userLogin);

router.get('/courses', authenticateJwtForUser, getAllCourses);

router.post('/courses/:courseId', authenticateJwtForUser, purchaseCourse);

router.get('/purchasedCourses', authenticateJwtForUser, getPurchasedCourses);

export default router;
