import React from "react";
import "./Candidates.css";

const CardComponent = () => {
  const candidates = [
    {
      name: "Prasant Sahu",
      designation: "President",
      imgSrc: "https://picsum.photos/250/400?random=1",
    },
    {
      name: "Pragyan Karmakar",
      designation: "Vice President",
      imgSrc: "https://picsum.photos/250/400?random=2",
    },
    {
      name: "Ankan Dutta",
      designation: "General Secretary",
      imgSrc: "https://picsum.photos/250/400?random=3",
    },
    {
      name: "Akash Gupta",
      designation: " Ass. General Secretary(Sports)",
      imgSrc: "https://picsum.photos/250/400?random=4",
    },
    {
      name: "Arkorup Mitra",
      designation: " Ass. General Secretary(Cultural)",
      imgSrc: "https://picsum.photos/250/400?random=5",
    },
  ];

  return (
    <div className="card-section">
      <h2 className="section-heading">Our Candidates</h2>
      <p className="intro-paragraph">
        Introducing our gymkhana election candidates! Each of these students is
        dedicated to enhancing our college experience with their innovative
        ideas and leadership skills. Get to know them better and learn about
        their plans to make our campus a more vibrant and engaging place.  
      </p>
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
