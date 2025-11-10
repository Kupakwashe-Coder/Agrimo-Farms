import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import '../styles/AboutOrganicFarms.css';

// Placeholder Image (Replace with your actual imports)
import farmersPortrait from '../images/anhu2.jpg'; 

const AboutOrganicFarms = () => {
  return (
    <section className="about-farm-section">
      <div className="about-farm-container">
        
        {/* --- Left Image Column --- */}
        <div className="about-farm-image-column">
          <img 
            src={farmersPortrait} 
            alt="Happy farmers holding vegetables" 
            className="about-farm-main-image" 
          />
        </div>

        {/* --- Right Content Column --- */}
        <div className="about-farm-content-column">
          <p className="about-farm-subtitle">
            <BsArrowRight className="about-farm-arrow" /> About Us
          </p>
          <h2 className="about-farm-title">
            We're Best Agriculture & Organic Farms
          </h2>
          
          <p className="about-farm-description">
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which don't look even.
          </p>

          <div className="about-farm-checklist">
            <div className="about-farm-list-group">
              <p className="about-farm-list-item">
                <FaCheck className="about-farm-check-icon" /> Garlic Farming
              </p>
              <p className="about-farm-list-item">
                <FaCheck className="about-farm-check-icon" /> Lavender Farming
              </p>
              <p className="about-farm-list-item">
                <FaCheck className="about-farm-check-icon" /> Gourmet Mushrooms
              </p>
            </div>
            <div className="about-farm-list-group">
              <p className="about-farm-list-item">
                <FaCheck className="about-farm-check-icon" /> Fertilizer Distribution
              </p>
              <p className="about-farm-list-item">
                <FaCheck className="about-farm-check-icon" /> Poultry Farming
              </p>
              <p className="about-farm-list-item">
                <FaCheck className="about-farm-check-icon" /> Organic Fertilizer
              </p>
            </div>
          </div>
          
          <Link to="/contact" className="about-farm-cta-link">
            Know More <BsArrowRight className="about-farm-cta-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganicFarms;