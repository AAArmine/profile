import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { contactMe, contactText } from '../../constants';
import AnimatedLetters from '../animatedLetters';
import L from 'leaflet';
import Form from './form';

import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [position] = useState([40.1872, 44.5152]);
  const contactMeArray = contactMe.split('');
  const greenIcon = new L.Icon({
    iconUrl:
      'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
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
            <MapContainer center={position} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en" />
              <Marker position={position} icon={greenIcon}>
                <Popup>Hi there!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
