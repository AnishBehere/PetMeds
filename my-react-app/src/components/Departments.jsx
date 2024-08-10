/* eslint-disable no-unused-vars */

import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Anaesthesia and analgesia",
      imageUrl: "../../Public/Anaesthesia and analgesia.jpeg",
    },
    {
      name: "Animal welfare",
      imageUrl: "../../Public/animal welfare.jpeg",
    },
    {
      name: "Veterinary behaviourist",
      imageUrl: "../../Public/behaviorist.jpeg",
    },
    {
      name: "Horticulturist",
      imageUrl: "../../Public/garden wali.jpeg",
    },
    {
      name: "Emergency and Critical Care",
      imageUrl: "../../Public/emergency and critical.jpeg",
    },
    {
      name: "Internal Medicine",
      imageUrl: "../../Public/internal medicine.jpeg",
    },
    {
      name: "Nutrition",
      imageUrl: "../../Public/nutrition.jpeg",
    },
    {
      name: "Theriogenologiest",
      imageUrl: "../../Public/terigonologist.jpeg",
    },
    {
      name: "Pathology",
      imageUrl: "../../Public/pathology.jpeg",
    },
    {
      name: "Marine Veterinarian",
      imageUrl: "../../Public/marine.jpeg",
    },
    {
      name: "Sports Medicine and Rehabilitation",
      imageUrl: "../../Public/sports.jpeg",
    },
    {
      name: "Surgery",
      imageUrl: "../../Public/surgery.jpeg",
    },
    {
      name: "Poultry",
      imageUrl: "../../Public/murgi.jpeg",
    },
    {
      name: "Dentistry",
      imageUrl: "../../Public/dentist.jpeg",
    },
    {
      name: "Veterinary radiologists",
      imageUrl: "../../Public/radioo.jpeg",
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
