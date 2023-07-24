import React from 'react'
import Projects from 'components/Projects'
import Header from 'components/Header';

export const App = () => {
  const projectsData = [
    {
      id: 1, // Add a unique identifier like 'id' to each project
      imageSrc: '/images/kids-todo.png',
      title: 'A todo-list for children built with Redux',
      description: 'This project is a React/Redux task list web application that allows users to add and remove tasks...',
      techStack: ['HTML5', 'Styled-Components', 'JavaScript', 'Redux', 'React'],
      liveDemoLink: 'https://ninas-kids-todo-app.netlify.app/',
      githubLink: 'https://github.com/NinaWald/project-todos'
    }
    // Add more projects here...
  ];
  return (
    <div className="portfolio-container">
      <Header />
      <Projects projectsData={projectsData} />
    </div>
  )
}
