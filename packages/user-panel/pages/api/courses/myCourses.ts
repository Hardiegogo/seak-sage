import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Course from '../../../models/courseModel';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import User from '../../../models/userModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();    
    const session : Session | null = await getServerSession(req, res, authOptions);
    if(session){
      const user = await User.findOne({
        username: session?.user?.username,
      }).populate('purchasedCourses');
      if (user) {
        res.json({ purchasedCourses: user.purchasedCourses || [] });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    }

  } catch (error) {
    console.log(error);
  }
}
