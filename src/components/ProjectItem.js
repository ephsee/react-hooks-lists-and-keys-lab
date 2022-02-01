import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const techs = technologies.map( tech => <span key={tech}>{tech}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techs}
      </div>
    </div>
  );
}

export default ProjectItem;
