/* eslint-disable no-unused-vars */

import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/heart.jpg",
    },
    {
      name: "Neurology",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/radio.jpeg",
    },
    {
      name: "Physical Therapy",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl:
        "/Users/Anish/Downloads/meddy//Users/Anish/Downloads/meddy/Public/ent.jpg",
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
      <div className="container department">
        <h2>Department </h2>

        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["medium", "small"]}
        >
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
  );
};

export default Departments;
