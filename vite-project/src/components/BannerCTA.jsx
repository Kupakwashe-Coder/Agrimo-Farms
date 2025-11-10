import React from 'react';
import '../styles/BannerCTA.css'; // Import the CSS file for styling
import { FaArrowRight } from 'react-icons/fa'; // Icon for the button
import { GiFist } from 'react-icons/gi'; // Using GiFist as a placeholder for the hand-with-sprout icon

// Placeholder Background Image - This image will be set via CSS
import bannerBgImage from '../images/banner.png'; 

const BannerCTA = () => {
  return (
    <section className="agr-banner-section">
      <div className="container">
        <div className="agr-banner-box">
          
          {/* Background Image Placeholder (Handled by CSS) */}
          <div 
            className="agr-banner-background" 
            style={{backgroundImage: `url(${bannerBgImage})`}}
            role="img" 
            aria-label="We are popular leader in agriculture market globally background image"
          ></div>
          
          <div className="agr-banner-content">
            {/* Left side: Icon and Main Text */}
            <div className="agr-banner-text-group">
              <div className="agr-banner-icon-circle">
                <GiFist className="agr-banner-icon" />
              </div>
              <h2 className="agr-banner-title">
                We're popular leader in agriculture market globally
              </h2>
            </div>
            
            {/* Right side: Button */}
            <div className="agr-banner-button-group">
              <a href="#discover" className="agr-banner-btn">
                Discover More 
                <FaArrowRight className="agr-btn-arrow" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BannerCTA;