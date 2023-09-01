import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Course from '../../../models/courseModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    if (req.method === 'GET') {
      const courses = await Course.find({ published: true });
      res.json(courses)
    }
  } catch (error) {
    console.log(error);
  }
}
