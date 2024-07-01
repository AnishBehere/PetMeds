
import cloudinary from "cloudinary";

import app from "./appp.js"

import express from "express";
const appp = express();
appp.use(express.json());



const port = 3000;



cloudinary.v2.config({
  cloud_name:"dewhdmgar",
  // process.env.CLOUDINARY_CLOUD_NAME
  //process.env.CLOUDINARY_API_KEY
  api_key:"569765986461649" ,
  //process.env.CLOUDINARY_API_SECRET
  api_secret: "xUsLzBuQ5DIgSbvQ6CyqNBS4zJ8",
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
