import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Course from '../../../models/courseModel';
import { ICourse } from '../../../types';
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
      if (req.method === 'GET') {
        const courses = await Course.find({});
        res.json(courses);
      } else if (req.method === 'POST') {
        const parsedInput=courseInputSchema.safeParse(req.body)
        if(!parsedInput.success){
          return res.status(411).json({message:"Please enter correct input details."})
        }
        const course = new Course(req.body);
        await course
          .save()
          .then((course: ICourse) => {
            res.status(201).json({
              message: 'Course created successfully',
              courseId: course._id?.toString(),
            });
          })
          .catch((err: unknown) => {
            console.log(err);
          });
      }
    }else {
      res.status(401).json({message:"Unauthorized"})
    }
    
  } catch (error) {
    console.log(error)
  }
}
