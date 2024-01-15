import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.scss"; 

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const backends = [
    { skill: "JavaScript" },
    { skill: "Express" },
    { skill: "Nodejs" },
    { skill: "Php" },
    { skill: "Laravel" },
  ];

  const frontends = [
    { skill: "JavaScript" },
    { skill: "React" },
    { skill: "NextJS" },
    { skill: "VueJS" },
    { skill: "VueJS" },
  ];

  const clouds = [
    { skill: "Vercel" },
    { skill: "DigitalOcean" },
    { skill: "AWS" },
  ];

  const platforms = [
    { skill: "Wordpress" },
    { skill: "Shopify" },
    { skill: "Sanity" },
    { skill: "Contentful" },
  ];

  const categories = ["Back-end", "Front-end", "Cloud Services", "Platforms"];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    adaptiveHeight: true,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <div className="wrapper">
      <div className="skills">
        <div className="container">
          <h2 className="skill_heading">Our Tech Expertise</h2>

          <div className="slider-container">
            <Slider {...sliderSettings}>
              <div className="skill_category">
                <h3>Back-end Development</h3>
                <ul>
                  {backends.map((backend, index) => (
                    <li key={index}>{backend.skill}</li>
                  ))}
                </ul>
              </div>

              <div className="skill_category">
                <h3>Front-end Development</h3>
                <ul>
                  {frontends.map((frontend, index) => (
                    <li key={index}>{frontend.skill}</li>
                  ))}
                </ul>
              </div>

              <div className="skill_category">
                <h3>Cloud Services</h3>
                <ul>
                  {clouds.map((cloud, index) => (
                    <li key={index}>{cloud.skill}</li>
                  ))}
                </ul>
              </div>

              <div className="skill_category">
                <h3>Platforms</h3>
                <ul>
                  {platforms.map((platform, index) => (
                    <li key={index}>{platform.skill}</li>
                  ))}
                </ul>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
