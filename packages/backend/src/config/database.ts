import mongoose from 'mongoose';
import { config } from 'dotenv';
import path from 'path';
config({ path: path.resolve(__dirname, '../../.env') });
mongoose.connect(process.env.MONGOOSE_SECRET);
