import React from 'react';
import MyPhoto from '../../assets/images/_animatedA.jpg';

import './index.scss';
const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h1>
          Hi, <br />
          I'm Armine
          <br />
          Front-End Developer
        </h1>

        <p>React JS, Web Developer</p>
      </div>
      <div className="image">
        <div className="img-cont">
          <img src={MyPhoto} alt="my animated picture" />
        </div>
      </div>
    </div>
  );
};

export default About;
