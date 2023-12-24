import React from "react";
import { HiCog6Tooth } from "react-icons/hi2";
import "./Services.scss";

const Box = ({ title, description }) => (
  <div className="box1">
    <HiCog6Tooth className="icons" />
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const boxesData = [
    {
      title: "This is heading",
      description:
        "In the 21st century, cities around the world are experiencing rapid urbanization, with millions of people flocking to urban centers in search of better opportunities and improved living standards.",
    },
    {
      title: "This is heading",
      description:
        "In the 21st century, cities around the world are experiencing rapid urbanization, with millions of people flocking to urban centers in search of better opportunities and improved living standards.",
    },
    {
      title: "This is heading",
      description:
        "In the 21st century, cities around the world are experiencing rapid urbanization, with millions of people flocking to urban centers in search of better opportunities and improved living standards.",
    },
    {
      title: "This is heading",
      description:
        "In the 21st century, cities around the world are experiencing rapid urbanization, with millions of people flocking to urban centers in search of better opportunities and improved living standards.",
    },
    // Add more data for each box as needed
  ];

  return (
    <div className="wrapper">
      <div className="services">
        <div className="container">
          <div className="boxes">
            {boxesData.map((box, index) => (
              <Box key={index} {...box} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
