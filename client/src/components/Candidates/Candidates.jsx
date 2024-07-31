import React from 'react';
import './Candidates.css';

const CardComponent = () => {
  const candidates = [
    { name: 'Candidate 1', designation: 'Designation 1', imgSrc: 'https://picsum.photos/250/400?random=1' },
    { name: 'Candidate 2', designation: 'Designation 2', imgSrc: 'https://picsum.photos/250/400?random=2' },
    { name: 'Candidate 3', designation: 'Designation 3', imgSrc: 'https://picsum.photos/250/400?random=3' },
    { name: 'Candidate 4', designation: 'Designation 4', imgSrc: 'https://picsum.photos/250/400?random=4' },
    { name: 'Candidate 5', designation: 'Designation 5', imgSrc: 'https://picsum.photos/250/400?random=5' },
  ];

  return (
    <div className="card-section">
      <h2 className="section-heading">Our Candidates</h2>
      <div className="card-container">
        {candidates.map((candidate, index) => (
          <div key={index} className="card">
            <img src={candidate.imgSrc} alt={candidate.name} />
            <div className="card-info">
              <h3>{candidate.name}</h3>
              <p>{candidate.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;


