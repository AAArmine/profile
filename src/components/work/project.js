import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { openSrc } from '../../constants';
import AnimatedLetters from '../custom/animatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Project = ({ selected, project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate');
  const openSrcArr = openSrc.split('');
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);
  return (
    <div className={`project ${selected === project.id ? 'flip' : ''}`}>
      <div className="content">
        <img alt="projectLogo" src={project.logo} />
        <div className="view" onClick={showModal}>
          <span>
            VIEW <br /> PROJECT
          </span>
        </div>
      </div>
      <div className="back">
        <span>TECHNOLOGIES</span>
        {project.technologies}
      </div>
      <Modal
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={null}
        className="custom-modal"
        width={650}
      >
        <a
          className="src-link"
          href={project.src}
          target="_blank"
          rel="noreferrer"
        >
          Open source code
          <span className="arrow-cont">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </a>
        <div id="my-video-container">
          <iframe
            width="600"
            height="338"
            src={project.video}
            frameborder="0"
            title="My Video"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
