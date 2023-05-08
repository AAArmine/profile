import { useState, useEffect } from 'react';
import gifAnimation from '../../assets/images/pic.gif';
import AnimatedLetters from '../custom/animatedLetters';
import { Link } from 'react-router-dom';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ["I'", 'm', ' ', 'A', 'r', 'm', 'i', 'n', 'e'];
  const jobDescArray = ['React JS, Web Developer'];
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'E',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  const hi = ['Hi,'];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);
  return (
    <div className="about-container">
      <div className="content">
        <h1>
          <span className="left">
            <span className="page-tags">&lt;h1&gt;</span>
            <AnimatedLetters letterClass={letterClass} strArray={hi} idx={17} />
          </span>
          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={11}
          />
          <span className="page-tags ">&lt;h1/&gt;</span>
        </h1>
        <p>
          <span className="left-p">
            <span className="page-tags">&lt;p&gt;</span>
            {/* React JS, Web Developer */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobDescArray}
              idx={11}
            />
            <span className="page-tags">&lt;p/&gt;</span>
          </span>
        </p>
        <div className="btn-contact">
          <Link to="/contact">Say Hello!</Link>
        </div>
      </div>
      <Link to="/work">
        <div className="image">
          <div className="img-cont">
            <img src={gifAnimation} alt="animated" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default About;
