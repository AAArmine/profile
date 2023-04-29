import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faCode,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faUser} color="#ccd6f6" />
        </NavLink>
        <NavLink exact to="/skills" className="skills-link">
          <FontAwesomeIcon icon={faCode} color="#ccd6f6" />
        </NavLink>
        <NavLink exact to="/work" className="work-link">
          <FontAwesomeIcon icon={faBriefcase} color="#ccd6f6" />
        </NavLink>
        <NavLink exact to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#ccd6f6" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/armine-aghababyan-217737b2/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/AAArmine/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="skype:live:.cid.c4a5460bb4ab6e97"
          >
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </li>
        <li>
          <div className="line" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
