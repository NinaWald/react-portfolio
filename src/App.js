import React from 'react'
import Projects from 'components/Projects'
import Header from 'components/Header';
import Skills from 'components/Skills';
import MyWords from 'components/MyWords';

// Import images
import kidsTodoImage from './images/kids-todo.png';
import harryPotterImage from './images/harry-potter.png';
import finalProjectsImage from './images/final-project.png';
import chatbotImage from './images/chatbot-image.png';
import weatherappImage from './images/weatherapp-image.png';

export const App = () => {
  const projectsData = [
    {
      id: 'final-project',
      imageSrc: finalProjectsImage,
      title: 'Final-project using React+Redux',
      description: `This project is my final project where I did a webshop using Contentful + React + Redux + MongoDB.
      I developed a backend where I keep my member-register data and I fetch that in my frontend. 
      I fetch my products from Contenful and use Redux to manage the states in the webshop (addItem, RemoveItem etc).
      I use React to create components and pages in my webshop.`,
      techStack: ['Contentful', 'Styled-Components', 'JavaScript', 'Redux', 'React', 'MongoDB'],
      liveDemoLink: 'https://ninaw-final-project.netlify.app/',
      githubLink: 'https://github.com/NinaWald/final-project-frontend'
    },
    {
      id: 'todo-project',
      imageSrc: kidsTodoImage,
      title: 'A todo-list for children built with Redux',
      description: `This project is a React/Redux task list web application that allows users to add and remove tasks,
      and mark them as complete or incomplete by checking the checkboxes. 
      The component TasksList is the main component that renders the list of tasks. 
      It uses useSelector and useDispatch hooks provided by the react-redux library to get access to the todos state from the tasks reducer, 
      and dispatch actions to update the state.`,
      techStack: ['HTML5', 'Styled-Components', 'JavaScript', 'Redux', 'React'],
      liveDemoLink: 'https://ninas-kids-todo-app.netlify.app/',
      githubLink: 'https://github.com/NinaWald/project-todos'
    },
    {
      id: 'harrypotter-api',
      imageSrc: harryPotterImage,
      title: 'Backend project using API',
      description: `This is a project where I learned how to make my own backend and connect it to the frontend.
      This project was about learning how to work with MongoDB, Compass, Atlas, Google Cloud.
      I downloaded CVSfiles from Kaggle (Harry Potter info) and converted in into JSON.
      Then I used it in my code in the data file as spells.js and characters.js.
      The code in the project makes use of Mongoose models to model your data and fetch data from the database.
      I define two schemas using mongoose.Schema(): charactersSchema and spellsSchema.
      Then, I create Mongoose models for each schema using mongoose.model(): Characters and Spells.`,
      techStack: ['HTML5', 'API', 'JavaScript', 'Redux', 'React'],
      liveDemoLink: 'https://harry-potter-api-backend.netlify.app/',
      githubLink: 'https://github.com/NinaWald/project-mongo-api'
    },
    {
      id: 'chatbot',
      imageSrc: chatbotImage,
      title: 'Chatbot built in Javascript',
      description: `The chatbot app is a simple web-based application designed to assist users in selecting and ordering wine. 
      The chatbot engages in a conversation with the user to gather information about their preferences and age before suggesting suitable wine options. 
      The app employs HTML, CSS, and JavaScript to create an interactive and dynamic user interface.
      It demonstrates a simple implementation of a conversational interface to assist users with wine selection and ordering. 
      It utilizes HTML, CSS, and JavaScript, 
      with a focus on DOM manipulation, event handling, and conditional logic.`,
      techStack: ['HTML5', 'CSS', 'JavaScript'],
      liveDemoLink: 'https://glowing-creponne-06f61c.netlify.app/',
      githubLink: 'https://github.com/NinaWald/project-chatbot'
    },
    {
      id: 'weatherapp',
      imageSrc: weatherappImage,
      title: 'Weatherapp built in Javascript',
      description: `This project is a simple weather dashboard that tells today's weather 
      and temperature and a 5-day forecast using a weather API. 
      In this project I learned how to fetch data from an API using fetch() in Javascript`,
      techStack: ['HTML5', 'Styled-Components', 'JavaScript', 'Redux', 'React'],
      liveDemoLink: 'https://fantastic-licorice-31c90b.netlify.app/',
      githubLink: 'https://github.com/NinaWald/new-weather-test'
    }

    // Add more projects here...
  ];
  return (
    <div className="portfolio-container">
      <Header />
      <Projects projectsData={projectsData} />
      <Skills />
      <MyWords />
    </div>
  )
}
