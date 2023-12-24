import React from "react";
import "./Consultation.scss";

const Consultation = () => {
  return (
    <div className="wrapper">
      <div className="consultation">
        <div className="container">
          <div className="consul_content">
            <h2 className="subheading">Got A Project in Mind?</h2>
            <h1 className="submianheading">Let’s build something together we can be proud of.</h1>
            <div className="cons_buttons">
                <button className="subbutton">Get Free Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
