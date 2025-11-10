import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import '../styles/TeamSection.css';

// Placeholder Images (Replace with your actual imports)
import member1 from '../images/clara2.jpg'; 
import member2 from '../images/hall.jpg';
import member3 from '../images/clara2.jpg';
import member4 from '../images/hall.jpg';
import member5 from '../images/jacob1.jpg';
import member6 from '../images/Paula3.jpg';
import member7 from '../images/jacob1.jpg';
import member8 from '../images/Paula3.jpg';

const TeamSection = () => {
  const teamMembers = [
    { imageSrc: member1, name: 'Jacob Mersin', title: 'CEO OWNER' },
    { imageSrc: member2, name: 'Clara Henry', title: 'SUPERVISOR' },
    { imageSrc: member3, name: 'Paula Den', title: 'MANAGER' },
    { imageSrc: member4, name: 'Carla Hall', title: 'MARKETING' },
    { imageSrc: member5, name: 'Mark Donald', title: 'SALES MANAGER' },
    { imageSrc: member6, name: 'Jamie Oliver', title: 'GARDEN EXPERTS' },
    { imageSrc: member7, name: 'Alice Waters', title: 'SENIOR MANAGER' },
    { imageSrc: member8, name: 'Julia Taylor', title: 'SENIOR WORKER' },
  ];

  return (
    <section className="farm-team-section">
      <div className="farm-team-container">
        {/* You can add a main section title here if needed */}
        {/* <div className="farm-team-header">...</div> */}
        
        <div className="farm-team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;