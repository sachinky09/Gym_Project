import React, { useState } from 'react';
import './QandA.css';

const testimonials = [
  {
    name: "Akash",
    feedback: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  },
  {
    name: "Anvit",
    feedback: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  },
  {
    name: "Piyush",
    feedback: "The faculty and staff at Edusity are incredibly supportive and dedicated to student success. The facilities are top-notch, and I've gained invaluable skills and knowledge."
  },
  {
    name: "Ayush",
    feedback: "My experience at Edusity has been nothing short of amazing. The academic environment is stimulating, and the resources available to students are exceptional."
  },
  {
    name: "Aditi",
    feedback: "Edusity has provided me with opportunities and experiences that have significantly contributed to my personal and professional growth. I highly recommend it to anyone seeking higher education."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <h2>More Answered Questions</h2>
      <div className="testimonial-card">
        <button onClick={prevTestimonial} className="nav-button">&larr;</button>
        <div className="testimonial-content">
          <h3>{testimonials[current].name}</h3>
          <p>{testimonials[current].feedback}</p>
        </div>
        <button onClick={nextTestimonial} className="nav-button">&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonials;
