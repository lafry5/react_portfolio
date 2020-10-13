import React from 'react';
// import Footer from '../Footer';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://www.linkedin.com/in/lauraafry">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>REST</li>
        </ul>
        <h3>Tool Proficiencies</h3>
        <ul className="skills"></ul>
        <ul>
        <li>Git, GitHub</li>
        <li>Heroku</li>
        </ul>
      </div>
      {/* <Footer></Footer>  */}
    </section>
  );
}

export default Resume;

