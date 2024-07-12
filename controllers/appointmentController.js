import { catchAsyncError } from "/Users/Anish/Downloads/meddy/middlewares/catchAsyncErrors.js";
import { Appointment } from "/Users/Anish/Downloads/meddy/models/appointmentSchema.js";
import ErrorHandler from "/Users/Anish/Downloads/meddy/middlewares/errorMiddleware.js";
import { User } from "/Users/Anish/Downloads/meddy/models/userModels.js";

export const postAppointment = catchAsyncError(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;

  //agar insme se kuch bhi missing raha to ye error aaega
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !address
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  // same name ke doctor ka con flict na ho isliyee
  const isConflict = await User.find({
    firstName: doctor_firstName,
    lastName: doctor_lastName,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (isConflict.length === 0) {
    return next(new ErrorHandler("Doctor not found!", 404));
  }
  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Doctors conflict Please contact Through Email or Phone",
        404
      )
    );
  }
  const doctorId = isConflict[0]._id;
  const patient = await User.find({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: "Patient",
  });
  const patientId = patient[0]._id;
  console.log(patientId);
  console.log(doctorId);
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstName: doctor_firstName,
      lastName: doctor_lastName,
    },
    hasVisited,
    address,
    doctorId,
    patientId,
  });
  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment Send successfully",
  });
});

export const getAllAppointments = catchAsyncError(async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(200).json({
    success: true,
    appointments,
  });
});

export const updateAppointmentStatus = catchAsyncError(
  async (req, res, next) => {
    let { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found!", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Appointment status Updated!",
      appointment,
    });
  }
);
export const deleteAppointment = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment Not Found!", 404));
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment Deleted!",
  });
});
