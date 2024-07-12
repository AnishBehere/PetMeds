/* eslint-disable no-unused-vars */

import React from "react";
import Hero from "/Users/Anish/Downloads/meddy/components/Hero";
import Biography from "/Users/Anish/Downloads/meddy/components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"What is Medbuddy?"}
        imageUrl={
          "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/radio.webp"
        }
      />
      <Biography
        imageUrl={
          "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/puramai.jpeg"
        }
      />
    </>
  );
};

export default AboutUs;
