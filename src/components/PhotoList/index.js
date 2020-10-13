import React, { useState } from 'react';
import Project from "../Project";
import Footer from '../Footer';

function Portfolio() {


  const [projects] = useState([
    {
      name: 'Gplogo',
      category: 'project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: "https://lafry5.github.io/react_portfolio/.",
      repo: "https://github.com/lafry5/react_portfolio"

    },
    {
      name: 'Screenshot1',
      category: 'project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Samplescreenshot1',
      category: 'project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Techblog',
      category: 'project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Runbuddy',
      category: 'project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
      <Footer></Footer> 
    </div>
  );
};

export default Portfolio;

