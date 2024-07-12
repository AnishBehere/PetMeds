import { Message } from "/Users/Anish/Downloads/meddy/models/messageModels.js";
import { catchAsyncError } from "/Users/Anish/Downloads/meddy/middlewares/catchAsyncErrors.js";
import ErrorHandler from "/Users/Anish/Downloads/meddy/middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Fill full form !", 400));
  }

  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message send successfully",
  });
});

export const getAllMessages = catchAsyncError(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
