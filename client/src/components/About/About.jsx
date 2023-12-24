import React from 'react'
import './About.scss'
import profilePic from '../../assets/profile-pic 2.png'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className='wrapper'>
        <div className="about">
            <div className="container">
                <div className="about_box">
                    <div className="about_img">
                        <img src={profilePic} alt="" />
                    </div>

                    <div className="about_content">
                        <h1 className="content_heading">MD Sadman Hossain</h1>
                        <p className="content_paragraph">
                        Hello, I'm Sadman, a seasoned Fullstack Developer and the owner of OceanShaper. With a rich track record of over a year on Upwork, I've had the privilege of satisfying countless clients with my comprehensive skills. At OceanShaper, we bring innovation to life, ensuring excellence in every facet of web development. Let's embark on a journey to elevate your digital presence and turn your visions into reality.
                        </p>
                        <FaFacebook className='social_icons' />
                        <FaSquareXTwitter className='social_icons' />
                        <FaLinkedin className='social_icons' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About