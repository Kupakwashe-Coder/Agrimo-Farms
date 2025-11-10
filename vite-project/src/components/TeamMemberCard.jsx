import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const TeamMemberCard = ({ imageSrc, name, title }) => {
  return (
    <div className="farm-team-card">
      <div className="farm-team-image-container">
        <img src={imageSrc} alt={name} className="farm-team-image" />
        <div className="farm-team-share-icon">
          <FaShareAlt />
        </div>
      </div>
      <div className="farm-team-details">
        <p className="farm-team-title">{title}</p>
        <p className="farm-team-name">{name}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;