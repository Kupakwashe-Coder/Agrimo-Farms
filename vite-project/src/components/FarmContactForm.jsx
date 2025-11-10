import React from 'react';
import './FarmContactForm.css';
import { FaPaperPlane } from 'react-icons/fa'; // Icon for the send button

// Placeholder Image (Replace with your actual imports)
import contactImage from '../images/client1.jpg'; 

const FarmContactForm = () => {
  return (
    <section className="farm-contact-section">
      <div className="farm-contact-container">
        
        {/* --- Left Image Column --- */}
        <div className="farm-contact-image-column">
          <img 
            src={contactImage} 
            alt="Farmer holding a basket of strawberries" 
            className="farm-contact-image" 
          />
        </div>

        {/* --- Right Form Column --- */}
        <div className="farm-contact-form-column">
          <span className="farm-contact-tag">Get To Contact Us</span>
          <h2 className="farm-contact-title">
            Have a any Questions? <br /> Get in Touch!
          </h2>
          
          <form className="farm-contact-form">
            
            {/* Row 1: Name and Phone */}
            <div className="farm-contact-input-row">
              <input type="text" placeholder="Your Name" required className="farm-contact-input" />
              <input type="tel" placeholder="Phone Number" required className="farm-contact-input" />
            </div>

            {/* Row 2: Email and Subject */}
            <div className="farm-contact-input-row">
              <input type="email" placeholder="Email Address" required className="farm-contact-input" />
              <input type="text" placeholder="Subject" required className="farm-contact-input" />
            </div>
            
            {/* Row 3: Message */}
            <textarea 
              placeholder="Your Message" 
              rows="6" 
              required 
              className="farm-contact-input farm-contact-textarea"
            ></textarea>
            
            {/* Submit Button */}
            <button type="submit" className="farm-contact-submit-btn">
              Send Massage <FaPaperPlane className="farm-contact-send-icon" />
            </button>
          </form>
          
          {/* Subtle background house graphic (as seen in the image) */}
          <div className="farm-contact-graphic-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default FarmContactForm;