import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({ projectsData }) => {
  return (
    <section className="projects">
      <div className="projects-title">
        <h2>Featured Projects</h2>
      </div>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;