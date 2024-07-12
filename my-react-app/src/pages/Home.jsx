/* eslint-disable no-unused-vars */

import React from "react";
import Biography from "../components/Biography.jsx";
import Hero from "../components/Hero.jsx";
import Departments from "../components/Departments.jsx";
import MessageForm from "../components/MessageForm.jsx";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to MedBuddy"}
        imageUrl={"../../Public/roboat.jpeg"}
      />
      <Biography imageUrl={"../../Public/merimainshakal.jpeg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
