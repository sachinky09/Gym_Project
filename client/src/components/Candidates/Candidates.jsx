import React from 'react';
import './Candidates.css';

const candidates = [
  { name: 'Prasant Sahu', designation: 'President', photo: 'https://via.placeholder.com/150', details: 'Prasant is a senior software engineer with 10 years of experience in full stack development.' },
  { name: 'Pragyan Karmakkar', designation: 'Vice President', photo: 'https://via.placeholder.com/150', details: 'Pragyan is a product manager with a knack for innovative product designs and customer satisfaction.' },
  { name: 'Ankan Dutta', designation: 'Gen Secretary', photo: 'https://via.placeholder.com/150', details: 'Ankan is a UX designer who excels at creating intuitive user interfaces and experiences.' },
  { name: 'Akash Gupta', designation: 'Ass. Gen Secretary (Sports)', photo: 'https://via.placeholder.com/150', details: 'Akash is a data scientist with expertise in machine learning and big data analytics.' },
  { name: 'Arkarup Mitra', designation: 'Ass. Gen Secretary (Cultural)', photo: 'https://via.placeholder.com/150', details: 'Arkarup is a marketing specialist with experience in digital marketing and brand management.' },
];

const Candidates = () => {
  return (
    <div className="candidates-container">
      <h2>Our Candidates</h2>
      <div className="candidates-grid">
        {candidates.map((candidate, index) => (
          <div className="candidate-card" key={index}>
            <div className="candidate-photo" style={{ backgroundImage: `url(${candidate.photo})` }}></div>
            <h3>{candidate.designation}</h3>
            <div className="candidate-details">
              <p>{candidate.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Candidates;
