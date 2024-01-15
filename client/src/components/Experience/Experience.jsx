import React, { useEffect, useState } from 'react';
import { FaClock, FaBriefcase, FaCode, FaUsers } from 'react-icons/fa';
import './Experience.scss';

const Experience = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [techPartners, setTechPartners] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  useEffect(() => {
    const intervals = [];

    const startCounting = (stateUpdater, maxCount, intervalTime) => {
      const interval = setInterval(() => {
        stateUpdater((prevValue) => {
          if (prevValue >= maxCount) {
            clearInterval(interval);
            return maxCount;
          }
          return prevValue + 1;
        });
      }, intervalTime);

      intervals.push(interval);
    };

    startCounting(setYears, 5, 50);
    startCounting(setProjects, 40, 50);
    startCounting(setTechPartners, 10, 50);
    startCounting(setTeamMembers, 15, 50);

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []); 

  return (
    <div className='wrapper'>
      <div className='experience'>
        <div className='container'>
          <div className='experience_counter'>
            <div className='counter_one'>
              <FaClock className='counter_icon' />
              <h3>Years of Experience</h3>
              <p>{years}+</p>
            </div>

            <div className='counter_one'>
              <FaBriefcase className='counter_icon' />
              <h3>Projects Completed</h3>
              <p>{projects}+</p>
            </div>

            <div className='counter_one'>
              <FaCode className='counter_icon' />
              <h3>Tech Partners</h3>
              <p>{techPartners}+</p>
            </div>

            <div className='counter_one'>
              <FaUsers className='counter_icon' />
              <h3>Team Members</h3>
              <p>{teamMembers}+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
