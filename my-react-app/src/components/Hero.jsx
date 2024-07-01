/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

function Hero({title, imageUrl} ) {
  return (
    <div className='hero container'>
         <div className="banner">
            <h1> {title}</h1>
           
            <p>
            
          medbuddyyyy qwertyuiopasdfghjkl;Zxcvbnm,ertyuiopxcvbnm,erthjklxcvbnm.
          dxisavhiclavyciaeyviacyiavicybivytcuwatfuwgdgfnCVgatvuygcabdQUBCL GLI  Y.
          TISXUDSTCYWICBYAROVNEVUEINWDGUVILULNFNLHNDFN
          </p>  
          
         </div>
         <div className='banner'>
            <img src ={imageUrl} alt="hero"className='animated-image' />
         </div>
    </div>
  )
}

export default Hero;