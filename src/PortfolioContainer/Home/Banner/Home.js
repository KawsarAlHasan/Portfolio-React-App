import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

import Button from "react-bootstrap/Button";

const Home = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/md-kawsar-hasan-1b985420a/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/KawsarAlHasan">
                <i className="fa-brands fa-github-square"></i>
              </a>
              <a href="https://web.facebook.com/kawsar.alhasan.58/">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/kawsaralhasan2">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/kawsar.alhasan.58/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Md Kawsar Hasan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  words={[
                    "Full Stack Developer 💻",
                    "React Developer 🌐",
                    "MERN Stack Developer 📱",
                    "Node.js Developer 🔴",
                    "Backend Developer 💻",
                    "Web Developer 😎",
                  ]}
                  loop={0} // 0 means infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>

              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#contactMe">
              <Button
                variant="outline-light"
                className="primary-text rounded-pill"
              >
                {" "}
                HIRE ME{" "}
              </Button>
            </a>
            <a
              href="resume_of_md_kawsar.pdf"
              download="resume_of_md_kawsar.pdf"
            >
              <Button
                variant="warning"
                className="highlighted-btn rounded-pill"
              >
                DOWNLOAD RESUME
              </Button>{" "}
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
