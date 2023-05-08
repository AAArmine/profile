import { useState, useEffect } from 'react';
import AnimatedLetters from '../custom/animatedLetters';
import { workTitleTop, workTitleBottom } from '../../constants';
import { projectList } from '../../constants/projectList';
import Project from './project';
import './index.scss';


const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const workTitleTopArr = workTitleTop.split('');
  const workTitleBottomArr = workTitleBottom.split('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 8 + 1);
      setSelected(randomIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [selected]);
  return (
    <div className="work-cont">
      <div className="project-cont">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={workTitleTopArr}
            idx={15}
          ></AnimatedLetters>
        </h1>
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={workTitleBottomArr}
            idx={15}
          ></AnimatedLetters>
        </h2>
        {projectList.map((project) => (
          <Project
            // key={project.id}
            // id={project.id}
            // logo={project.logo}
            // technologies={project.technologies}
            project={project}
            selected={selected}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
