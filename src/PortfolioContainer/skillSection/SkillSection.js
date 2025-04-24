import React from "react";

const SkillsSection = () => {
  // Skill data with icons (using devicon CDN)
  const skills = {
    frontend: [
      {
        name: "JavaScript (ES6)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      },
      {
        name: "DaisyUI",
        icon: "https://daisyui.com/images/daisyui-logo/daisyui-logomark.svg",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "RESTful APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apiary/apiary-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    other: [
      {
        name: "Socket.io",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Responsive Design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/responsive/responsive-original.svg",
      },
      {
        name: "UI/UX",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  };

  return (
    <section id="skills" className="pt-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <h1 className="text-center">
          My<span className="text-danger"> Tech Stack</span>
        </h1>
        <h6 className="text-center mb-3">Technologies & tools I work with</h6>

        {/* All Skills Grid */}
        <div className="row g-4">
          {/* Frontend Skills */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                    <i className="fas fa-laptop-code text-primary fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0">Frontend</h3>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="bg-white p-2 rounded shadow-sm hover-effect ">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width="30"
                          height="30"
                        />
                        <span className="d-block mt-2 small">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                    <i className="fas fa-server text-success fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0">Backend</h3>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="bg-white p-2 rounded shadow-sm hover-effect">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width="30"
                          height="30"
                        />
                        <span className="d-block mt-2 small">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                    <i className="fas fa-database text-info fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0">Database</h3>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {skills.database.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="bg-white p-2 rounded shadow-sm hover-effect">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width="30"
                          height="30"
                        />
                        <span className="d-block mt-2 small">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div className="bg-warning bg-opacity-10 p-2 rounded me-3">
                    <i className="fas fa-cogs text-warning fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0">Other</h3>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {skills.other.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="bg-white p-2 rounded shadow-sm hover-effect">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width="30"
                          height="30"
                        />
                        <span className="d-block mt-2 small">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-effect {
          transition: all 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
        .skill-item {
          flex: 0 0 calc(50% - 12px);
          max-width: calc(50% - 12px);
        }
        @media (min-width: 768px) {
          .skill-item {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
