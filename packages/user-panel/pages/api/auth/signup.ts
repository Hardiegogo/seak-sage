import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/userModel';
import { IUser } from '../../../types';
import {z} from 'zod'

const userInputSchema=z.object({
  username:z.string().min(3).max(40),
  password:z.string().min(6).max(20)
})


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const parsedInput=userInputSchema.safeParse(req.body)
    if(!parsedInput.success){
      return res.status(400).json({messsage:"Incorrect input"})
    }
    const user: Partial<IUser> = parsedInput.data;
    const existingUser = await User.findOne({ username: user.username });
    if (existingUser) {
      res.status(403).send('username already exists');
    } else {
      user.purchasedCourses = [];
      const newUser = new User(user);
      await newUser.save();
      res
        .status(201)
        .json({ message: 'User created successfully'});
    }
  } catch (error) {
    console.log(error);
  }
}
