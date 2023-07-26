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
        </div>

        <div className="toolbox">
          <p>
            <mark style={{ backgroundColor: 'lightblue' }}>Toolbox</mark>
          </p>
          <p>Github</p>
          <p>VsCode</p>
          <p>Netlify</p>
          <p>Figma</p>
        </div>

        <div className="more">
          <p>
            <mark style={{ backgroundColor: 'yellow' }}>More</mark>
          </p>
          <p>Design</p>
        </div>

        <div className="upcoming">
          <p>
            <mark style={{ backgroundColor: 'lightgreen' }}>Upcoming</mark>
          </p>
          <p>Redux</p>
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
