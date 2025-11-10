import React from 'react';
import '../styles/About3.css';
import { FaCommentDots } from 'react-icons/fa';

import farmersMeeting from '../images/murimi.jpg'; 
import cornPattern from '../images/cardbg.png'; 

const About3 = () => {
  return (
    <section className="agri-future-section">
      <div 
        className="agri-future-background-pattern" 
        style={{ backgroundImage: `url(${cornPattern})` }}
      ></div>
      
      <div className="container agri-future-container">
        <div className="agri-future-header-content">
          <div className="agri-future-left-header">
            <span className="agri-future-subtitle">Get To Know Us</span>
            <h2 className="agri-future-title">
              Agriculture matters to the future of development
            </h2>
          </div>
          <div className="agri-future-right-header">
            <p className="agri-future-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>
          </div>
        </div>

        <div className="agri-future-main-content">
          <div className="agri-future-image-column">
            <img src={farmersMeeting} alt="Two farmers discussing in a field" className="agri-future-main-image" />
            <div className="agri-future-floating-icon">
              <FaCommentDots />
            </div>
          </div>

          <div className="agri-future-steps-column">
            <div className="agri-future-step agri-future-step-active">
              <span className="agri-future-step-number">01</span>
              <div className="agri-future-step-text">
                <p className="agri-future-step-heading2">Schedule Your Experience</p>
                
              </div>
              <p className="agri-future-step-subtext2">Quisqy Tell Us Risus Adpis Viera Bibe Um Urna</p>
            </div>
            <div className="agri-future-step1">
              <span className="agri-future-step-number">02</span>
              <div className="agri-future-step-text">
                <p className="agri-future-step-heading">Get Professional Advice</p>
                
              </div>
              <p className="agri-future-step-subtext">Quisqy Tell Us Risus Adpis Viera Bibe Um Urna</p>
            </div>
            <div className="agri-future-step1">
              <span className="agri-future-step-number">03</span>
              <div className="agri-future-step-text">
                <p className="agri-future-step-heading">Meet Our Expert Farmer</p>
              </div>
              <p className="agri-future-step-subtext">Quisqy Tell Us Risus Adpis Viera Bibe Um Urna</p>
            </div>
            <div className="agri-future-step1">
              <span className="agri-future-step-number">04</span>
              <div className="agri-future-step-text">
                <p className="agri-future-step-heading">Now Get A Best Products</p>
                
              </div>
              <p className="agri-future-step-subtext">Quisqy Tell Us Risus Adpis Viera Bibe Um Urna</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;