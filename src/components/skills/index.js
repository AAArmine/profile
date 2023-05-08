import { useState, useEffect } from 'react';
import {
  skillsTitleFirstLine,
  skillsTitleSecondLine,
  skillsParagraph,
} from '../../constants';
import AnimatedLetters from '../custom/animatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faJsSquare,
  faReact,
  faGitAlt,
  faHtml5,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const titleFirstLine = skillsTitleFirstLine.split('');
  const titleSecondLine = skillsTitleSecondLine.split('');

  const textContent = skillsParagraph.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);
  return (
    <div className="skills-container">
      <div className="content">
        <h1>
          <span className="left ">
            <span className="page-tags">&lt;h1&gt;</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleFirstLine}
              idx={17}
            />
          </span>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleSecondLine}
            idx={15}
          />
          <span className="page-tags ">&lt;h1/&gt;</span>
        </h1>
        <span className="page-tags left-rel">&lt;p&gt;</span>
        <p className="description">
          {skillsParagraph}
          <span className="page-tags">&lt;p/&gt;</span>
        </p>
      </div>
      <div className="skills-animation">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="rgb(235, 15, 52)" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faJsSquare} color="rgb(235, 15, 52)" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="rgb(235, 15, 52)" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faNodeJs} color="rgb(235, 15, 52)" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="rgb(235, 15, 52)" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faHtml5} color="rgb(235, 15, 52)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
