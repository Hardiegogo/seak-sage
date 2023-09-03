import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'packages/user-panel/lib/dbConnect';
import User from 'packages/user-panel/models/userModel';
import { IUser } from 'packages/user-panel/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const user: IUser = req.body;
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
