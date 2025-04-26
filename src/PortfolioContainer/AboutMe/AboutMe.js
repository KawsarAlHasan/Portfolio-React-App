import React from "react";
import img from "../../assets/home/profile_1.png";
import Button from "react-bootstrap/Button";

const AboutMe = (props) => {
  return (
    <div id="aboutMe" className="container pb-4  bg-light">
      <h1 className="text-center mt-3">
        ABOUT <span className="text-danger">ME</span>
      </h1>
      <h6 className="text-center mb-3">My formal Bio Details</h6>
      <div className="row shadow">
        <div className="col-md-6">
          <img className="img-fluid" src={img} alt="no internet" />
        </div>
        <div className="col-md-6">
          <p className="m-3 mt-5">
            Hi, I’m Kawsar, a MERN Stack Developer with 1+ year of experience in
            building full-stack applications. I transform ideas into efficient,
            scalable web solutions using modern technologies. My strengths lie
            in problem-solving, clean code, and team collaboration. I focus on
            creating smooth user experiences from frontend to backend,
            delivering high-performance applications aligned with business
            needs.
          </p>

          <h4 className="ms-3 mt-2">Here are a Few Highlights:</h4>
          <p className="ms-3 mt-2">
            ✨ Full-Stack Developer with 1 year of hands-on experience in
            building dynamic and scalable web applications using the MERN Stack.{" "}
            <br />
            💻 <strong>Frontend:</strong> JavaScript (ES6+), React.js, Next.js,
            HTML5, CSS3, Tailwind CSS, Bootstrap, Ant Design, DaisyUI. <br />
            🛠️ <strong>Backend:</strong> Node.js, Express.js, RESTful APIs,
            GraphQL. <br />
            🗄️ <strong>Database:</strong> MongoDB (Mongoose), MySQL. <br />⚡{" "}
            <strong>Real-Time:</strong> Socket.io integration for live features.{" "}
            <br />
            🚀 Skilled in deployment using Git, GitHub, Vercel, Netlify, Render,
            and configuring VPS servers with Nginx for production-ready
            environments. <br />
            🎯 Focused on writing clean, maintainable code and delivering
            results that meet business goals.
          </p>

          <div className="profile-options mt-2 m-3">
            <a href="#contactMe">
              <Button
                variant="outline-dark"
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
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
