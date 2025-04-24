import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaMobile,
} from "react-icons/fa";
import "./Project.css";

const Project = () => {
  // Demo project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product listings, cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      frontend: "https://github.com/yourusername/ecommerce-platform",
      backend: "https://github.com/yourusername/ecommerce-platform",
      live: "https://yourecommerceapp.com",
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
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team functionality.",
      technologies: ["React", "Firebase", "Material UI", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      frontend: "https://github.com/yourusername/task-manager",
      live: "https://yourtaskapp.com",
      category: "frontend",
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
      title: "RESTful API Service",
      description:
        "A scalable backend service for mobile applications with authentication and data processing.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backend: "https://github.com/yourusername/api-service",
      live: "https://api.yourservice.com/docs",
      category: "backend",
      features: [
        "JWT authentication",
        "Rate limiting",
        "Caching layer",
        "Documentation with Swagger",
        "Error tracking",
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
