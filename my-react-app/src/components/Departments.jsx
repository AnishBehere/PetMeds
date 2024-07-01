/* eslint-disable no-unused-vars */

import React from 'react'
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";



      
    const Departments = () => {
        const departmentsArray = [
          {
            name: "Pediatrics",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Orthopedics",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Cardiology",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Neurology",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Oncology",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Radiology",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Physical Therapy",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "Dermatology",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
          {
            name: "ENT",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDlp1QMFvaP5RcG-iY4FpZ7l6AH-6MJCQHg&s",
          },
        ];

    const responsive = {
          extraLarge: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
          },
          large: {
            breakpoint: { max: 1324, min: 1005 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
          },
          medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
          },
          small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
          },
      };
    
  return (
    <div>
    <div className='container department'>
        <h2>Department </h2>

        <Carousel responsive={responsive}  removeArrowOnDeviceType={["medium", "small"]}>
        {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
</Carousel>
</div>
    </div>
  )
}


export default Departments;