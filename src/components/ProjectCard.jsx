import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, demoLink, githubLink } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-placeholder">
            <span>Project Image</span>
          </div>
        )}
        <div className="project-overlay">
          <div className="project-links">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${title} demo`}
              >
                <FaExternalLinkAlt /> Demo
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${title} on GitHub`}
              >
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="project-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

