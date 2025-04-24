import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          {/* Social Links */}
          <div className="mb-2">
            <a
              href="https://web.facebook.com/kawsar.alhasan.58/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://github.com/KawsarAlHasan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-kawsar-hasan-1b985420a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            © {currentYear}
            <a
              href="https://web.facebook.com/kawsar.alhasan.58/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ms-1 text-decoration-none"
            >
              Md Kawsar Hasan
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
