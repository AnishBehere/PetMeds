import express, { urlencoded } from "express";
import moragan from "morgan";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";
import userRouter from "./routes/userRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js"
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";



config({path :"./config/config.env"});
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
//date and baki chizo mko recognise
app.use(cookieParser());


app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",  
    })
  );

//CONNECT FRONTEND WITH BACKEND
app.use(
    cors({
      origin: ["http://localhost:5173","http://localhost:5174"], 
      method: "GET,POST,DELETE,PUT",
      credentials: true, 

  
    })
  );
  
  //routes set kie haii
  app.use("/api/v1/message",messageRouter);
  app.use("/api/v1/user",userRouter);
  app.use("/api/v1/appointment",appointmentRouter);
 




app.use(errorMiddleware);

export default app;