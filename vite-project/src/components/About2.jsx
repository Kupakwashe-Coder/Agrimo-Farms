import React from 'react';
import '../styles/About2.css'; // Import the CSS file for styling
import { FaAngleDoubleRight } from 'react-icons/fa';

import serviceImg1 from '../images/about1.jpg'; 
import serviceImg2 from '../images/about2.jpg';
import serviceImg3 from '../images/about3.jpg';
import serviceImg4 from '../images/about4.jpg';

const servicesData = [
  {
    id: 1,
    image: serviceImg1,
    category: 'FERTILIZER',
    title: 'Harvest Concepts',
  },
  {
    id: 2,
    image: serviceImg2,
    category: 'FRUITS',
    title: 'Farming Products',
  },
  {
    id: 3,
    image: serviceImg3,
    category: 'FERTILIZER',
    title: 'Soil fertilization',
  },
  {
    id: 4,
    image: serviceImg4,
    category: 'FRUITS',
    title: 'Fresh vegetables',
  },
];

const About2 = () => {
  return (
    <section className="agr-service-section">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="agr-service-header-group">
          <p className="agr-service-subtitle">Who We Are</p>
          <h2 className="agr-service-main-title">Best Agriculture Services</h2>
        </div>

        {/* Service Cards Grid */}
        <div className="row agr-service-card-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6 mb-4">
              <div className="agr-service-card">
                
                {/* ICON MOVED HERE - outside the image container */}
                <div className="agr-service-icon-yellow">
                    <FaAngleDoubleRight />
                </div>
                
                <div className="agr-service-image-container">
                  <img src={service.image} alt={service.title} className="agr-service-img" />
                </div>

                <div className="agr-service-content">
                  <span className={`agr-service-category agr-category-${service.category.toLowerCase().replace(/\s/g, '-')}`}>
                    {service.category}
                  </span>
                  <h3 className="agr-service-title">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Optional, but included for completeness) */}
        <div className="agr-service-dots">
            <span className="agr-service-dot agr-dot-active"></span>
            <span className="agr-service-dot"></span>
            <span className="agr-service-dot"></span>
            <span className="agr-service-dot"></span>
            <span className="agr-service-dot"></span>

            
        </div>
      </div>
    </section>
  );
};

export default About2;