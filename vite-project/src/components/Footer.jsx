import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import logo from '../images/logo.svg.png'; 
import grainBgLeft from '../images/footer1.png';
import grainBgRight from '../images/footer1.png';

const Footer = () => {
  return (
    <footer className="ftr-app-outer">
      
      <div className="ftr-app-header-bar">
        <div className="container ftr-app-header-content">
          <div className="ftr-header-links">
            <a href="#farmers"><span className="text-white group-hover:text-green-400">•</span> FARMERS</a>
            <a href="#organic"><span className="text-white group-hover:text-green-400">•</span> ORGANIC</a>
            <a href="#foods"><span className="text-white group-hover:text-green-400">•</span> FOODS</a>
            <a href="#product"><span className="text-white group-hover:text-green-400">•</span> PRODUCT</a>
          </div>
          <div className="ftr-header-contact">
            <div className="ftr-contact-detail">
              <FaPhoneAlt className="ftr-contact-icon" />
              <span>+1 (212) 255-5111</span>
            </div>
            <div className="ftr-contact-detail">
              <FaEnvelope className="ftr-contact-icon" />
              <span>changed@technologies.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ftr-app-body-section">
        {/* <img src={grainBgLeft} alt="Decorative Grain Stalk" className="ftr-decorative-asset ftr-asset-left" /> */}
        
        <div className="container">
          <div className="row">

            <div className="col-lg-8 col-md-8 mb-4">
              <div className="ftr-brand-identity">
                <img src={logo} alt="Agrimo logo" className="ftr-brand-logo" />
              </div>
              <p className="ftr-brand-description">
                Mauris sed molestiae sent. Sed vel vestibulum elit, non accusamus reus. In vitae sapien viverra est. Duo et illum nare senserit.
              </p>
              <div className="ftr-social-icons">
                <a href="#facebook" className="ftr-social-button"><FaFacebookF /></a>
                <a href="#twitter" className="ftr-social-button"><FaTwitter /></a>
                <a href="#linkedin" className="ftr-social-button"><FaLinkedinIn /></a>
                <a href="#instagram" className="ftr-social-button"><FaInstagram /></a>
              </div>
            </div>
          </div>
            <div className="col-lg-7 col-md-7">
                <div className="row">
                       <p className="ftr-brand-slogan">
                         Professional & modern, a theme designed to help your business stand out from the rest.
                      </p>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h5 className="ftr-column-heading">Useful Link</h5>
                      <ul className="ftr-link-list">
                        <li><a href="#company">Company</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                      </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <h5 className="ftr-column-heading">Working Time</h5>
                      <p>Mon - Fri: 9:00am - 5:00pm</p>
                      <p>Saturday: 10:00am - 8:00pm</p>
                      <p>Sunday Closed</p>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <h5 className="ftr-column-heading">Our Address</h5>
                      <p>Old Peabody 25B, New York, 11001, United States</p>
                    </div>
                    <div className="container ftr-app-copyright-content">
                      <div className="ftr-policy-links">
                        <a href="#terms" className='tt'>Terms & Conditions</a>
                        <a href="#privacy">Privacy Policy</a>
                      </div>
                      <p className="ftr-copyright-note">Copyright © 2024 Agrimo. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <img src={grainBgRight} alt="Decorative Wheat" className="ftr-decorative-asset ftr-asset-right" />
      </div>

      {/* <div className="ftr-app-copyright-bar">

      </div> */}

    </footer>
  );
};

export default Footer;