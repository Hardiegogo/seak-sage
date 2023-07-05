//entry point
import express from "express";
const app = express();
import cors from "cors"
import bodyParser from "body-parser";
import adminRouter from './routes/adminRoutes';
import userRouter from './routes/userRoutes';
import { errorLogger, customErrorHandler } from "./middlewares/errorMiddleware";
require('./config/database')

app.use(cors());
app.use(bodyParser.json());
app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use(errorLogger);
app.use(customErrorHandler);


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
