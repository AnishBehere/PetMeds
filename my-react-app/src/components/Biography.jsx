/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
         <img src={imageUrl} alt="aboutImg"/>
        </div>
        <div className="banner">
            <p>Biograohy</p>
            <p>
                I am Anish Behere Student of government college of Engineering Nagpur the Creater of this application the main pur

            </p>
        </div>

    </div>
  )
}

export default Biography;