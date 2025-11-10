import React from 'react';
import './LocationMap.css'; // Import the CSS file for styling

// Define the Google Maps embed URL for Harare, Zimbabwe.
// The coordinates (latitude/longitude) are for central Harare.
// The 'z=12' sets the zoom level.
const HARARE_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114884.2882895529!2d30.93240210214227!3d-17.83447545934522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e1b854e4f7%3A0x67c9c0d9a6c6c4c6!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1700465243872!5m2!1sen!2sus";

const LocationMap = ({ mapSourceUrl = HARARE_MAP_URL }) => {
  return (
    // Replicating the bg-white and pb-12 classes
    <section className="location-map-section"> 
      {/* Replicating the mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 classes */}
      <div className="location-map-container">
        {/* Replicating the rounded-2xl overflow-hidden shadow-sm classes */}
        <div className="location-map-iframe-wrapper">
          <iframe
            title="Business Location Map (Harare, Zimbabwe)"
            // The mapSourceUrl prop will use the new HARARE_MAP_URL unless a different URL is passed
            src={mapSourceUrl} 
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;