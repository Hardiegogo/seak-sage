import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Course from '../../../models/courseModel';
import { ICourse } from '../../../types';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session: Session | null = await getServerSession(
      req,
      res,
      authOptions
    );
    await dbConnect();
    if (session) {
      if (req.method === 'DELETE') {
        const course = await Course.deleteOne({ _id: req.query.courseId });
        res.json({
          message: 'Successfully deleted',
        });
      } else if (req.method === 'PUT') {
        const course = await Course.findByIdAndUpdate(
          req.query.courseId,
          req.body,
          {
            new: true,
          }
        );
        if (course) {
          res.json({ message: 'Course updated successfully', course: course });
        } else res.status(404).json({ message: 'Course not found' });
      }
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.log(error);
  }
}
