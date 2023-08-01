import React from 'react'
import Projects from 'components/Projects'
import Header from 'components/Header';
import Skills from 'components/Skills';
import MyWords from 'components/MyWords';
import TechComponent from 'components/Tech';
import ProjectDataContainer, { projectsData } from 'components/ProjectDataContainer';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <TechComponent />
      <ProjectDataContainer>
        <Projects projectsData={projectsData} />
      </ProjectDataContainer>
      <Skills />
      <MyWords />
      <Footer />
    </div>
  )
}
