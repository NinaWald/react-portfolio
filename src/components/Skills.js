import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-headtitle">
        <h2>Skills</h2>
      </div>
      <div className="skills-container">
        <div className="code">
          <p>
            <mark style={{ backgroundColor: 'lightpink' }}>Code</mark>
          </p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Node.js</p>
          <p>MongoDB+Mongoose</p>
          <p>REST API</p>
        </div>

        <div className="toolbox">
          <p>
            <mark style={{ backgroundColor: 'lightblue' }}>Toolbox</mark>
          </p>
          <p>Github+Git</p>
          <p>VsCode</p>
          <p>Netlify</p>
          <p>Figma</p>
          <p>Postman</p>
          <p>Google Cloud</p>
          <p>Eslint</p>
        </div>

        <div className="more">
          <p>
            <mark style={{ backgroundColor: 'yellow' }}>More</mark>
          </p>
          <p>Design interest</p>
          <p>Styled Components</p>
          <p>Npm Packages</p>
          <p>ChatGPT</p>
        </div>

        <div className="upcoming">
          <p>
            <mark style={{ backgroundColor: 'lightgreen' }}>Upcoming</mark>
          </p>
          <p>Sass</p>
          <p>TypeScript</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
