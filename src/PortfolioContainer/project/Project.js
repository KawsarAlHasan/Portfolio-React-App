import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaMobile,
} from "react-icons/fa";
import "./Project.css";
import garirhat from "../../assets/Screenshot 2025-04-27 164817.png";
import twostarfasion from "../../assets/Screenshot 2024-07-05 193237.png";

const Project = () => {
  // Demo project data
  const projects = [
    {
      id: 1,
      title: "GarirHat – Online Car Marketplace",
      description:
        "A modern full-stack platform built for buying and selling vehicles. GarirHat offers a seamless experience for users to post ads, browse listings, and connect with sellers. It includes real-time updates using Socket.io, detailed search filters, and a smooth UI powered by React and Tailwind CSS.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Socket.io",
        "Firebase",
        "Tailwind",
        "Ant Design",
      ],
      image: garirhat,

      live: "https://garirhat.com",
      category: "fullstack",
      features: [
        "User authentication & authorization",
        "Product search & filtering",
        "Payment gateway integration",
        "Admin dashboard",
        "Responsive design",
      ],
    },
    {
      id: 2,
      title: "Two Star Fashion",
      description:
        "Developed a web application with distinct dashboards for Users and Admins. Implemented authentication via email and Gmail. Admins can manage products, orders, and assign roles, while users can purchase products, submit reviews, and track their order status.",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Bootstrap",
      ],
      image: twostarfasion,
      frontend:
        "https://github.com/KawsarAlHasan/two-start-manufacturer-frontend",
      live: "https://two-start-manufacturer-frontend.vercel.app/",
      category: "fullstack",
      backend:
        "https://github.com/KawsarAlHasan/manufacturer-website-server-side",
      features: [
        "Drag-and-drop interface",
        "Real-time collaboration",
        "Task categorization",
        "Progress tracking",
        "Mobile-friendly",
      ],
    },
    {
      id: 3,
      title: "Warehouse Management",
      description:
        "Designed a Warehouse Management System to efficiently track inventory, manage stock levels, process orders, and streamline warehouse operations for improved accuracy and productivity.A scalable backend service for mobile applications with authentication and data processing.",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Bootstrap",
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      frontend: "https://github.com/KawsarAlHasan/Car-Management-client",
      backend: "https://github.com/KawsarAlHasan/Car-Management-server-side",
      live: "https://warehouse-management-react-app.web.app",
      category: "fullstack",
      features: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Bootstrap",
      ],
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "frontend":
        return <FaCode className="category-icon" />;
      case "backend":
        return <FaServer className="category-icon" />;
      case "fullstack":
        return (
          <>
            <FaCode className="category-icon" />
            <FaServer className="category-icon" />
          </>
        );
      default:
        return <FaMobile className="category-icon" />;
    }
  };

  return (
    <section id="projects" className="projects-section bg-light py-5">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>My recent work and contributions</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                  <span>
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div> */}

                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <FaGithub /> Frontend
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <FaGithub /> Backend
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
