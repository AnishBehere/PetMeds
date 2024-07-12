import { User } from "/Users/Anish/Downloads/meddy/models/userModels.js";
import { catchAsyncError } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

export const isAdminAuthenticate = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.adminToken;
  //thiss part which is bellow is used for autherisation if we remove that part fron if statement then
  //it will be only autherisation but including it it is autherisation + authentication

  if (!token) {
    return next(new ErrorHandler("Admin not authenticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id); //ye id ko get kia hai jo usermodel.js me id di hai vaha se aur iske us se we are finding the user;
  if (req.user.role != "Admin") {
    return next(
      new ErrorHandler(`${req.user.role}not authorised for this resources`, 403)
    );
  }
  next();
});

// as admin similarly we autherised and authenticated the patient
export const ispatientAuthenticate = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.adminToken;
  //thiss part which is bellow is used for autherisation if we remove that part fron if statement then
  //it will be only autherisation but including it it is autherisation + authentication

  if (!token) {
    return next(new ErrorHandler("Patient not authenticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id); //ye id ko get kia hai jo usermodel.js me id di hai vaha se aur iske us se we are finding the user;
  if (req.user.role != "Patient") {
    return next(
      new ErrorHandler(`${req.user.role}not authorised for this resources`, 403)
    );
  }
  next();
});
