import React from 'react';
import my_pic from '../images/my_pic.jpg';
import './Portfolio.css';
import ProjectCard from './ProjectCard';
import EmailLink from './EmailLink';
import Skills from './Skills';
import i1 from '../images/html.png'
import i2 from '../images/css.png'
import i3 from '../images/java.png'
import i4 from '../images/dart.png'
import i5 from '../images/flutter.png'
import i6 from '../images/github.png'
import i7 from '../images/python1.png'

function Portfolio() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  const projects = [
    {
      name: 'Instagram-clone',
      description: 'A instagram clone app which works similar to instagram. User can make there own profile, follow other  users, gain followers, like posts, search users, get notifications, etc.',
      
      githubLink: 'https://github.com/nigam000/Instagram-clone',
    },
    {
      name: 'Quiz App',
      description: 'An App which needs users authentication, deploy quiz questions, on submitting the quiz the user gets to see its result and the score is saved in FireBase Storage.',
      githubLink: 'https://github.com/nigam000/QuizApp',
    },
    {
      name: 'Environment-API',
      description: 'provide awareness, dos and don`ts, your surrounding/specific latitude and longitude air quality, and a graph showing the change in global warming.',
      githubLink: 'https://github.com/nigam000/Environment-API',
    },
    {
      name: 'Tree Simulation',
      description: 'Simulation and visulaization of different tree and graph traversal algorithm.',
      githubLink: 'https://github.com/nigam000/TreeSimulation',
    },
  ];
  const skillsData = [
    {
      title: 'HTML',
      logo: i1,
    },
    {
      title: 'CSS',
      logo: i2,
    },
    {
        title: 'Java',
        logo: i3,
      },
      {
        title: 'dart',
        logo: i4,
      },
      {
        title: 'flutter',
        logo: i5,
      },
      {
        title: 'github',
        logo: i6,
      },
      {
        title: 'python',
        logo: i7,
      },
    // Add more skills as needed
  ];

  return (
    <div className="Portfolio">
      <header>
        <h1>My Portfolio : Flutter/Mobile App Developer</h1>
      </header>
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('academics')}>Academics and skills</button>
          </li>
        </ul>
      </nav>
      <main>
        <section id="about" className='section'>
        <div style={{width: '50%', border: '1px', solid: '#A020F0',
      padding: '20px'}}>
          <h2>About Me</h2>
          <p>My name is Nigam Mulchandani, I'm 21 years old, and I live in Indore. I am currently studying at Vellore Institute of Technology, Bhopal. I've also been studying a lot on my own to learn new technologies and skills.<br></br><br></br>I started my journey as Flutter/Mobile App developer in 2022. I have been dedicating about 3hrs a day to coding and Apptitute Since last 6 months including DSA.<br></br><br></br>Languages: English, Hindi, Sindhi<br></br>Certifications: AWS Cloud Practitioner,Bits and Bytes of Computer Networking(Coursera)
</p>
<EmailLink></EmailLink>
<hr></hr>
<a href='https://drive.google.com/file/d/1mX-8lDfCQ-3ueaMbja_xEQhVc4dxpd13/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div style={{alignContent:'end'}}>
            <img src={my_pic} style={{ float:'right',width:'470px', height: '400px' }} className="circular-image"></img>
          </div>
        </section>
        <hr style={{color:'white'}}></hr>
        <section id="projects">
          <h2>Projects</h2>
          </section>
          <div className="container">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <ProjectCard
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
          />
        </div>
      ))}
    </div>
    <hr style={{color:'white'}}></hr>
        <section id="academics" className='section'>
            <div className='section-left'>
          <h2>Academics</h2>
          <p>BTech CSE(present)<br></br>Educational Institute: Vellore Institute of Technology, Bhopal\t CGPA: 8.40/10<br></br><br></br>class XII(July,2020)<br></br>Educational Institute: New Digamber Public School\t percentage:83.2%<br></br><br></br>class X(July,2018)<br></br>Educational Institute: New Digamber Public School\t percentage:78</p>
          </div>
          <div className='section-right'>
            <div className="skills-section">
            <Skills skills={skillsData}></Skills>
    </div>
            
          </div>
        </section>
      </main>
      <footer>
      {/* Your footer content */}
      
      <div>
        <a href="https://www.linkedin.com/in/nigam-mulchandani/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <br></br>
        <EmailLink></EmailLink>
        <br></br>
        <a href="https://github.com/nigam000" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      {/* Your footer content */}
    </footer>
    </div>
  );
}

export default Portfolio;
