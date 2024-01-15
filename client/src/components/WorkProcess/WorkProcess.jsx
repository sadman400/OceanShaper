import React from "react";
import { HiCog6Tooth } from "react-icons/hi2";
import "./WorkProcess.scss";


const Work = ({ title, desc }) => (
  <div className="process_box">
    <HiCog6Tooth className="icon" />
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
)

const WorkProcess = () => {

  const processData = [
    {
      title: "Discover",
      desc: "We carefully listen to our clients requirements and do in-depth analysis at every step."
    },
    {
      title: "Design",
      desc: "We design simplified solutions that are unique, scalable and easy for the end user."
    },
    {
      title: "Develop",
      desc: "Using modern technologies we build solutions which not just scale but also save unnecessary cost."
    },
    {
      title: "Deliver",
      desc: "We are not perfectionists but we never get bored to re-iterate and improving the product we deliver."
    },
  ];

  return (
    <div className="wrapper">
      <div className="workprocess">
        <div className="container">
          <h1 className="process_heading">
            A software development process that you can trust.
          </h1>

          <div className="process_container">
              {processData.map((item, index) => (
                <Work key={index} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
