import React from "react";
import { FaBriefcase, FaCode } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <p>My industry journey and contributions</p>
        </div>

        <div className="experience-timeline">
          {/* Current Position */}
          <div className="experience-item">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <h3>Full Stack Developer</h3>
              <p className="company">All Business Solution, Mugda Dhaka</p>
              <p className="duration">April 2024 – Present</p>
              <div className="experience-details">
                <h4>Key Responsibilities:</h4>
                <ul>
                  <li>
                    Developing and maintaining web applications using MERN stack
                  </li>
                  <li>Implementing responsive UI components with React.js</li>
                  <li>Building RESTful APIs with Node.js and Express</li>
                  <li>Database design and optimization with MongoDB</li>
                  <li>Collaborating with cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Add more positions as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
