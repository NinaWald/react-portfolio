import React from 'react';

import { FaGithub } from 'react-icons/fa'
import imageGlobe from '../images/globe.png';
// import imageGithub from '../images/github.png';

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
              <img src={imageGlobe} alt="live demo" className="globe-icon" />
                  Live demo
            </button>
          </a>
          <a href={githubLink}>
            <button type="button">
              <FaGithub size={25} className="github-icon" />
              View the code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;