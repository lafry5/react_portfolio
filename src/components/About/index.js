import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
// import Footer from '../Footer';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%", height: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
        I have been a technical project manager for 15 years. I received my Bachelors in Mathematics from the University of Pittsburgh, my Masters in Electrical Engineering from USC and my MBA from the University of Phoenix. In the Spring of 2020 I decided to go back to school and began attending the University of Arizona Software Development coding bootcamp. Since then I have become proficient in both front and back end web development. This is the portfolio of my work. Enjoy!
         </p>
        </div> 
        {/* <Footer></Footer>    */}
      </section>
  );
}

export default About;



