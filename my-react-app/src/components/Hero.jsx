/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

function Hero({title, imageUrl} ) {
  return (
    
    <div className='hero container' style={{height: "90vh"}
         }>
    

     
         <div className="banner">
            <h1> {title}🦴</h1>
          <h3>Meet new 
            and 
            interesting Docs nearby.</h3>
         
         </div>
         <div className='banner'>
            <img height={"400px"} src ={imageUrl} alt="hero"className='animated-image' />
         </div>
        
    </div>
  
  )
}

export default Hero;