import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Course from '../../../models/courseModel';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { z } from 'zod';

const courseInputSchema=z.object({
  title:z.string().min(3).max(150),
  rating:z.number().positive().gte(0).lte(5,"Max rating should be 5!"),
  description:z.string().min(50).max(700),
  published:z.boolean(),
  price:z.number().min(0).max(4999),
  imgLink:z.string()
})

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
        const parsedInput=courseInputSchema.safeParse(req.body)
        if(!parsedInput.success){
          return res.status(411).json({message:"Incorrect course input"})
        }
        const course = await Course.findByIdAndUpdate(
          req.query.courseId,
          parsedInput.data,
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
