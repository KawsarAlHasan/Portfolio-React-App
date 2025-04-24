import React from "react";
import { FaGraduationCap, FaAward, FaLaptopCode } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2>Education & Certifications</h2>
          <p>My academic journey and professional training</p>
        </div>

        <div className="education-grid">
          {/* Academic Education */}
          <div className="education-card">
            <div className="card-header">
              <div className="header-icon">
                <FaGraduationCap />
              </div>
              <h3>Academic Education</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h4>Diploma in Engineering</h4>
                  <p className="field">Computer Technology</p>
                  <p className="institute">Barguna Polytechnic Institute</p>
                  <div className="timeline-footer">
                    <span className="duration">2019 - 2023</span>
                    <span className="status">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="education-card">
            <div className="card-header">
              <div className="header-icon">
                <FaAward />
              </div>
              <h3>Certifications</h3>
            </div>

            <div className="timeline">
              {/* Programming Hero Certification */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaLaptopCode />
                </div>
                <div className="timeline-content">
                  <h4>Complete Web Development Course</h4>
                  <p className="field">Professional Programming Training</p>
                  <p className="institute">
                    Programming Hero with Jhankar Mahbub
                  </p>
                  <div className="timeline-footer">
                    <span className="duration">2022</span>
                    <span className="status">Certificate</span>
                  </div>
                </div>
              </div>

              {/* Universe IT Certification */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaLaptopCode />
                </div>
                <div className="timeline-content">
                  <h4>MERN Stack Development</h4>
                  <p className="field">Professional Training Program</p>
                  <p className="institute">Universe IT Institute</p>
                  <div className="timeline-footer">
                    <span className="duration">2023</span>
                    <span className="status">Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
