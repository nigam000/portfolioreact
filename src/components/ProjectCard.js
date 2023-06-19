import React from 'react';

const ProjectCard = ({ name, description, githubLink }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Link
      </a>
    </div>
  );
};

export default ProjectCard;
