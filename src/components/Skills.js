import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;