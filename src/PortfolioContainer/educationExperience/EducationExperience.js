import React from "react";
import "./EducationExperience.css";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaServer,
  FaDatabase,
  FaUsers,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaNetworkWired,
  FaCodeBranch,
  FaAward,
  FaUserTie,
} from "react-icons/fa";

const UltimateProfile = () => {
  return (
    <section className="ultimate-profile pt-5" id="profile">
      <div className="container">
        <div className="profile-intro">
          <h2 className="section-title">
            <span className="title-gradient">
              <FaUserTie className="title-icon" /> Professional Journey
            </span>
          </h2>
          <p className="section-subtitle">
            Career milestones and qualifications
          </p>
        </div>

        <div className="profile-grid">
          {/* Experience Card */}
          <div className="profile-card experience-card">
            <div className="card-header">
              <div className="header-icon">
                <FaBriefcase />
              </div>
              <h3>Professional Experience</h3>
            </div>
            <div className="card-body">
              <div className="position">
                <h4>
                  <FaLaptopCode className="position-icon" /> Full Stack
                  Developer
                </h4>
                <div className="position-meta">
                  <a
                    href="https://allbusinesssolution.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    All Business Solution
                    <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <span className="">Mugda, Dhaka</span>
                </div>
                <span className="duration">Apr 2024 - Present</span>
                <ul className="responsibilities mt-3">
                  <li>
                    <div className="responsibility-icon">
                      <FaCode />
                    </div>
                    <span>MERN stack application development</span>
                  </li>
                  <li>
                    <div className="responsibility-icon">
                      <FaServer />
                    </div>
                    <span>RESTful API design with Node.js/Express</span>
                  </li>
                  <li>
                    <div className="responsibility-icon">
                      <FaDatabase />
                    </div>
                    <span>MongoDB schema design and optimization</span>
                  </li>
                  <li>
                    <div className="responsibility-icon">
                      <FaUsers />
                    </div>
                    <span>Cross-functional team collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="profile-card education-card">
            <div className="card-header">
              <div className="header-icon">
                <FaGraduationCap />
              </div>
              <h3>Academic Education</h3>
            </div>
            <div className="card-body">
              <div className="degree">
                <h4>
                  <FaNetworkWired className="degree-icon" /> Diploma in
                  Engineering
                </h4>
                <h6>Computer Technology</h6>
                <div className="degree-meta">
                  <span className="institute">
                    Barguna Polytechnic Institute
                  </span>
                </div>
                <span className="duration">2019 - 2023</span>
                <span className="status-badge">
                  <FaAward className="badge-icon" /> Completed
                </span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="profile-card certifications-card">
            <div className="card-header">
              <div className="header-icon">
                <FaAward />
              </div>
              <h3>Professional Certifications</h3>
            </div>
            <div className="card-body">
              <div className="certificate">
                <h4>
                  <FaLaptopCode /> Next Level Web development 2.0
                </h4>

                <div className="position-meta">
                  <a
                    href="http://web.programming-hero.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    Programming Hero
                    <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <span className="year">2024 - 2025</span>
                </div>
              </div>
              <div className="certificate-divider"></div>
              <div className="certificate">
                <h4>
                  <FaLaptopCode /> MERN Stack Development
                </h4>

                <div className="position-meta">
                  <a
                    href="https://universeitinstitute.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    Universe IT Institute
                    <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <span className="year">2023</span>
                </div>
              </div>
              <div className="certificate-divider"></div>
              <div className="certificate">
                <h4>
                  <FaLaptopCode /> Complete Web Development
                </h4>

                <div className="position-meta">
                  <a
                    href="http://web.programming-hero.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    Programming Hero
                    <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <span className="year">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateProfile;
