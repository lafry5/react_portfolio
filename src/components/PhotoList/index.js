import React, { useState } from 'react';
import Project from "../Project";
// import Footer from '../Footer';

function Portfolio() {


  const [projects] = useState([
    {
      name: 'Gplogo',
      category: 'project',
      description: 'Xpensifi (gplogo) is a budget tracker to manage monthly income and expenses',
      link: "https://lafry5.github.io/first-group-project/",
      repo: "https://github.com/lafry5/first-group-project"
    },
    {
      name: 'Screenshot1',
      category: 'project',
      description: 'Weather Dashboard (screenshot1) projects the upcoming weather for any city for 5 days',
      link: "https://lafry5.github.io/Weather-dashboard/",
      repo: "https://github.com/lafry5/Weather-dashboard"
    },
    {
      name: 'homepagebackground',
      category: 'project',
      description: 'The Employee Management System (homepagebackground) monitors employees pto, sick and holiday time',
      link: "https://fast-everglades-76261.herokuapp.com/",
      repo: "https://github.com/cullinans1/employee-management-system/tree/master"
    },
    {
      name: 'Techblog',
      category: 'project',
      description: 'Tech Blog allows users to add and comment on blogs on a blog site',
      link: "https://protected-dusk-01068.herokuapp.com/",
      repo: "https://github.com/lafry5/tech_blog"
    },
    {
      name: 'Runbuddy',
      category: 'project',
      description: 'Run buddy is a site that provides an overview of athletic trainers and their services',
      link: "https://lafry5.github.io/run-buddy/",
      repo: "https://github.com/lafry5/run-buddy"
    },
  ]);

  return (
    <div>
      <div className="flex-center">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
      {/* <Footer></Footer>  */}
    </div>
  );
};

export default Portfolio;

