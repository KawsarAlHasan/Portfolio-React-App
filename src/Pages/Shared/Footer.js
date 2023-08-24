import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="bg-dark text-center text-white">
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold text-decoration-none"
          href="https://web.facebook.com/kawsar.alhasan.58/"
        >
          {" "}
          Kawsar Al Hasan
        </a>
      </div>
    </div>
  );
};

export default Footer;
