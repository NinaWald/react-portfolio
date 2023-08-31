import React from 'react';

const TechComponent = () => {
  const coloredSpanStyle = {
    marginRight: '15px',
    display: 'inline-block'
  };

  return (
    <div className="tech">
      <h2>Tech</h2>
      <p style={{ fontSize: '18px', wordSpacing: '10px' }}>
        HTML5 CSS3 Styled-Components
        Flexbox CMS-Contentful Grid&nbsp;
        <span style={{ ...coloredSpanStyle, backgroundColor: 'lightblue' }}>Javascript/ES6</span>
        <span style={{ ...coloredSpanStyle, backgroundColor: 'yellow' }}>React</span>
        <span style={{ ...coloredSpanStyle, backgroundColor: 'orange' }}>Redux</span>
        <span style={{ ...coloredSpanStyle, backgroundColor: 'lightgreen' }}>Responsive Design</span>
        <span style={{ ...coloredSpanStyle, backgroundColor: 'pink' }}>Mobile-first</span>
        Github Vscode+Git REST API
        Node.js Express MongoDB Mongoose
      </p>
    </div>
  );
};

export default TechComponent;