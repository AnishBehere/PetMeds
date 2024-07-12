/* eslint-disable no-unused-vars */
import React from "react";
import AppointmentForm from "/Users/Anish/Downloads/meddy/components/Appointform";
import Hero from "/Users/Anish/Downloads/meddy/components/Hero";
const Appointment = () => {
  return (
    <>
      <Hero
        title={"Book Your Appointment"}
        imageUrl={
          "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/heart.jpg"
        }
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
