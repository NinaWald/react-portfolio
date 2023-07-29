import React from 'react';

import imageGlobe from '../images/globe.png';
import imageGithub from '../images/github.png';

const ProjectItem = ({ project }) => {
  const { imageSrc, title, description, techStack, liveDemoLink, githubLink } = project;

  return (
    <div className="project-item">
      <img className="image-projects-item" src={imageSrc} alt={`${title}`} />
      <div className="project-box">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="blackboxes">
          {techStack.map((tech) => (
            <div key={tech} className="tech-box">
              {tech}
            </div>
          ))}
        </div>
        <div className="button-project">
          <a href={liveDemoLink}>
            <button type="button">
              <img src={imageGlobe} alt="live demo" />
                  Live demo
            </button>
          </a>
          <a href={githubLink}>
            <button type="button">
              <img src={imageGithub} alt="github" />
                  View the code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;