/* eslint-disable no-unused-vars */

import React from "react";
import Biography from "/Users/Anish/Downloads/meddy/components/Biography.jsx";
import Hero from "/Users/Anish/Downloads/meddy/components/Hero.jsx";
import Departments from "/Users/Anish/Downloads/meddy/components/Departments.jsx";
import MessageForm from "/Users/Anish/Downloads/meddy/components/MessageForm.jsx";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to MedBuddy"}
        imageUrl={
          "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/roboat.jpeg"
        }
      />
      <Biography
        imageUrl={
          "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/merimainshakal.jpeg"
        }
      />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
