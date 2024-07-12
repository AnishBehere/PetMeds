/* eslint-disable no-unused-vars */

import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero title={"What is Medbuddy?"} imageUrl={"../../Public/radio.webp"} />
      <Biography imageUrl={"../../Public/puramai.jpeg"} />
    </>
  );
};

export default AboutUs;
