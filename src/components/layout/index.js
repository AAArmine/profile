import Sidebar from '../sidebar';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pdf from '../../documents/resume.pdf';
import {
  faArrowRight,
  faVolumeUp,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import sound from '../../assets/sound/sound.mp3';
import './index.scss';

const Layout = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [audio] = useState(new Audio(sound));

  useEffect(() => {
    if (isChecked) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isChecked, audio]);

  useEffect(() => {
    function handleEnded() {
      audio.currentTime = 0;
      audio.play();
    }
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audio]);

  return (
    <>
      <div className="animate-cont">
        <div className="animate">Open</div>
      </div>
      <div className="custom-btn btn-layout">
        <FontAwesomeIcon icon={faArrowRight} />
        <a href={Pdf} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
      </div>
      <div className="sound-cont">
        <span>Sound {isChecked ? 'ON' : 'OFF'}</span>
        <FontAwesomeIcon icon={isChecked ? faVolumeUp : faVolumeMute} />
        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="sidebar-cont">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags top-tag-html">&lt;html&gt;</span>
          <br />
          <span className="tags top-tags">&lt;body&gt;</span>
          <div className="content-container">
            <Outlet />
          </div>
          <span className="tags bottom-tags">&lt;/body&gt;</span>
          <br />
          <span className="tags bottom-tag-html">&lt;/html&gt;</span>
        </div>
      </div>
    </>
  );
};
export default Layout;
