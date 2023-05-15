import { useState } from 'react';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Project = ({ selected, project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        <div id="video-container">
          {project.link ? (
            <>
              <iframe
                width="600"
                height="338"
                src={project.video}
                style={{ border: 'none' }}
                title="My Video"
                autoplay
                loop
              ></iframe>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  display: 'inlineBlock',
                  width: '500px',
                  height: '280px',
                  zIndex: '5',
                }}
              >
                {' '}
              </a>
            </>
          ) : (
            <iframe
              width="600"
              height="338"
              src={project.video}
              style={{ border: 'none' }}
              title="My Video"
              autoplay
              loop
            ></iframe>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Project;
