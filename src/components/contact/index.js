import React, { useState, useEffect } from 'react';
import { contactMe, contactText } from '../../constants';
import AnimatedLetters from '../animatedLetters';
import Form from './form';
import './index.scss';
import Map from './map';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const contactMeArray = contactMe.split('');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);

  return (
    <>
      <div className="contact-container">
        <div className="form-container content">
          <h1>
            <span className="left ">
              <span className="page-tags">&lt;h1&gt;</span>
              <AnimatedLetters
                strArray={contactMeArray}
                letterClass={letterClass}
                idx={17}
              />
              <span className="page-tags ">&lt;h1/&gt;</span>
            </span>
          </h1>
          <span className="page-tags left-rel">&lt;p&gt;</span>
          <p className="description">
            {contactText}
            <span className="page-tags">&lt;p/&gt;</span>
          </p>
          <Form />
        </div>
        <div className="map-container">
          <div className="text-zone"></div>
          <div className="info-map">
            Armine Aghababyan
            <br />
            Armenia,Yerevan
            <br />
            Khanjyan str.
            <br />
            <span>aaarmine.aghababyan@gmail.com</span>
          </div>
          <div className="map-wrap">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
