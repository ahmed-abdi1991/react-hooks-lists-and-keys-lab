import React from "react";

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{about}</p>
        {technologies.map((technology, index) => (
          <span key={`${technology}-${index}`}>{technology}</span>
        )}
    </div>
  );
};

export default ProjectItem;
