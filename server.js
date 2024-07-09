
import cloudinary from "cloudinary";

import app from "./appp.js"
import { config } from "dotenv";


import express from "express";
const appp = express();
appp.use(express.json());



const port = 3000;



cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
