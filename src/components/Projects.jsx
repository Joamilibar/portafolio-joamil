import React from "react";
import { projects } from "../data/data.js";
import "./styles/projects.css";
import github from "../assets/img/github.svg";

function Projects() {
  const renderProject = (project, index) => {
    const {
      id,
      title,
      subtitle,
      description,
      tecnologies,
      image,
      www,
      repositorie,
    } = project;

    const techArray = tecnologies.split(",").map(tech => tech.trim());

    return (
      <article
        key={id}
        className="project-card"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" />
          <div className="project-overlay">
            <div className="project-links">
              {www && www.trim() !== "" && (
                <a
                  href={www}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="Ver Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Demo</span>
                </a>
              )}
              <a
                href={repositorie}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                title="Ver Código"
              >
                <img src={github} alt="GitHub" className="github-icon" />
                <span>Código</span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-content">
          <span className="project-category">{subtitle}</span>
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>

          <div className="project-tech-stack">
            {techArray.slice(0, 5).map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
            {techArray.length > 5 && (
              <span className="tech-tag tech-more">+{techArray.length - 5}</span>
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="projects-grid">
      {projects.map(renderProject)}
    </div>
  );
}

export default Projects;
