/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
         <img height={"400px"} src={imageUrl} alt="aboutImg"/>
        </div>
        <div className="banner">
            <h2>Biograohy</h2>
            <p>
            Hi there! I am Anish behere currently pursuing 
            my B.Tech from government college of engineering, 
            Nagpur in electronics and telecommunication. 
             I have a passion for Web development and I am a dedicated
              MERN stack developer with a deep -rooted passion to create 
              innovative and user-centric web applications. I have created 
              MEdbuddy to transform the Primitive Hospital management system.
              and replace it with a smart Application Medbuddy.

            </p>
        </div>

    </div>
  )
}

export default Biography;