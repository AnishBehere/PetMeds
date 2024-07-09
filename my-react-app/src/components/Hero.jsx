/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

function Hero({title, imageUrl} ) {
  return (
    <div className='hero container'>
         <div className="banner">
            <h1> {title}</h1>
           
            <p>
            Medbuddy is a leading edge technology to provision extensive healthcare services to the users. It will allow the users to attain personalised care for their wellness according to their needs with the help of several skilled doctors. Medbuddy will prioritise the patient needs and strive towards providing ideal healthcare.
            It is a solution for the traditional and primitive hospital management system it is a mern stack medical medical application that perform multiple functionalities
          </p>  
          
         </div>
         <div className='banner'>
            <img height={"400px"} src ={imageUrl} alt="hero"className='animated-image' />
         </div>
    </div>
  )
}

export default Hero;