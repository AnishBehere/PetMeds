/* eslint-disable no-unused-vars */

import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero title={"What is ?"} imageUrl={"../../Public/iphone.png"} />
      <Biography imageUrl={"../../Public/adoption.jpeg"} />
    </>
  );
};

export default AboutUs;
