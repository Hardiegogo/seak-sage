import type { NextApiRequest, NextApiResponse } from 'next';
import Admin from '../../../models/adminModel';
import { IAdmin } from '../../../types';
import dbConnect from '../../../lib/dbConnect';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const admin: IAdmin = req.body;
    const existingUser = await Admin.findOne({ username: admin.username });
    if (existingUser) {
      res.status(403).send('username already exists');
    } else {
      const newUser = new Admin(admin);
      await newUser.save();
      res
        .status(201)
        .json({ message: 'User created successfully'});
    }
  } catch (error) {
    console.log(error);
  }
}
