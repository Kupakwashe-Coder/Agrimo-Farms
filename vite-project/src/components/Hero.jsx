import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/Hero.css";
import heroBg from "../images/hero.jpg";
import logo from "../images/logo.png";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import "../index.css";
import svg from "../images/SVG.png"

const Hero = () => {
  // Renamed state for clarity: controls the PAGES dropdown
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <section className="hero-banner-section">
      
      {/* --- Navbar Section --- */}
      <nav className="main-nav-container">
        <div className="main-nav-bar">
          <div className="main-nav-logo">
            <Link to="/"> 
              <img src={logo} alt="Agrimo logo" className="main-logo-image" />
            </Link>
          </div>

          <ul className="main-nav-links">
            <li
              className="main-nav-item"
            >
              <Link to="/" className="main-nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                HOME
              </Link>
            </li>
            
            {/* PAGES link with Dropdown */}
            <li
              className="main-nav-item main-has-dropdown"
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
            >
              <Link to="/about" className="main-nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                PAGES
              </Link>
              {isPagesDropdownOpen && (
                <ul className="main-dropdown-menu">
                  <li>
                    <Link to="/about" className="main-dropdown-item">About Us</Link>
                  </li>
                  <li>
                    <Link to="/ourhistory" className="main-dropdown-item">Our History</Link>
                  </li>
                  <li>
                    <Link to="/services" className="main-dropdown-item">Our Services</Link>
                  </li>
        
                  <li>
                    <Link to="/team" className="main-dropdown-item">Our Team Members</Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li className="main-nav-item">
              <Link to="/ourhistory" className="main-nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                SERVICES
              </Link>
            </li>
            <li className="main-nav-item">
              <Link to="/portfolio" className="main-nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                PORTFOLIO
              </Link>
            </li>
            <li className="main-nav-item">
              <Link to="/blog" className="main-nav-link">
                <span className="text-white group-hover:text-green-400">•</span>
                BLOG
              </Link>
            </li>
            <li className="main-nav-item">
              <Link to="/contacts" className="main-nav-link">
                <span className="text-white group-hover:text-green-400">•</span>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Call-to-Action and Search/Menu Icons */}
        <div className="main-nav-actions">
          <div className="main-nav-contact-info">
            <FaPhoneAlt className="main-phone-icon" />
            <div>
              <span className="main-contact-text">Call us Now</span>
              <span className="main-contact-number">+1 (212) 255-5111</span>
            </div>
          </div>
          
          <button className="main-nav-search-btn">
            <FaSearch />
          </button>
        </div>
          
        <div className="main-cta-wrapper">
          <Link to="/contacts ">
              <button className="main-nav-cta-btn">Get In Touch</button>
          </Link>
        </div> 

      </nav>
      {/* --- End Navbar Section --- */}

      {/* --- Hero Content Section --- */}
      <div className="hero-banner-overlay">
        <div className="hero-banner-content-box">
          <span className="hero-banner-subtitle">BELIEVE IN QUALITY!</span>
          <h1 className="hero-banner-title">
            Quality Trust: <br /> Direct to the Farm
          </h1>
          <p className="hero-banner-text">
            We all need a little space to grow. Give yourself the space you need
            to find your inner you.
          </p>
          <Link to="/contacts" className="hero-banner-btn">
            Contact Us &#8599;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;