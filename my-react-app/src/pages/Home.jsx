/* eslint-disable no-unused-vars */

import React from 'react'
import Biography from '../components/Biography.jsx';
import  Hero from"../components/Hero.jsx";
import Departments from '../components/Departments.jsx';
import MessageForm from '../components/MessageForm.jsx';

const Home = () => {
  return (
   <>
   <Hero title={"Welcome to MedBuddy"} imageUrl={"https://static.vecteezy.com/system/resources/thumbnails/034/637/934/small_2x/a-futuristic-robotic-doctor-in-a-doctor-s-coat-with-a-stethoscope-on-a-blue-background-concept-of-advanced-medical-technology-ai-generative-photo.jpg"}/>
   <Biography imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s"}/>
      <Departments />
      <MessageForm />
    </>
   
  );
}
                                                                                                                 
export default Home;