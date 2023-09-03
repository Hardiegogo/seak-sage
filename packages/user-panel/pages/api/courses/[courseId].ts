import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Course from '../../../models/courseModel';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import User from '../../../models/userModel';
import { ICourse } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    if (req.method === 'POST') {
      const session: Session | null = await getServerSession(
        req,
        res,
        authOptions
      );
      if (session) {
        const courseId = req.query.courseId;
        const course: ICourse | null = await Course.findById(courseId);
        if (course) {
          const user = await User.findOne({
            username: session?.user?.username,
          });
          if (user.purchasedCourses.includes(course._id)) {
            res.status(403).send({ message: 'Course already purchased' });
          } else {
            user.purchasedCourses.push(course._id);
            await user.save();
            res.json({ message: 'Course purchased successfully' });
          }
        } else {
          res.status(404).json({ message: 'Course not found' });
        }
      } else {
        res.status(401).json({message:"Unauthorized"})
      }
    }
  } catch (error) {
    console.log(error);
  }
}
