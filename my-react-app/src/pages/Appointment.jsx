/* eslint-disable no-unused-vars */
import React from "react";
import AppointmentForm from "../components/Appointform";
import Hero from "../components/Hero";
const Appointment = () => {
  return (
    <>
      <Hero
        title={"Book Your Appointment?"}
        imageUrl={"../../Public/iphone.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
