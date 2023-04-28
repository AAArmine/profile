import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faHome} color="#ccd6f6" />
        </NavLink>
        <NavLink exact to="/about" className="about-link">
          <FontAwesomeIcon
            icon={faUser}
            color="#ccd6f6"
          />
        </NavLink>
        <NavLink exact to="/contact" className="contact-link">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#ccd6f6"
          />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
