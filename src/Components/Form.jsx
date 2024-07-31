import React from 'react';
import './Form.css';

const FormSection = () => {
  return (
    <div className="form-section">
      <div className="form-heading">
        <h2>Contact Us</h2>
        <h1>Get in Touch</h1>
      </div>
      <div className="content">
        <div className="contact-info">
          <div className="info">
            <h3>Send us a message <span role="img" aria-label="envelope">✉️</span></h3>
            <p>
              Feel free to reach out through the contact form or find our contact information below.
              Your feedback, questions, and suggestions are important to us as we strive to provide
              exceptional service to our university community.
            </p>
            <div className="contact-details">
              <p><span role="img" aria-label="email">📧</span> Contact@GreatStack.dev</p>
              <p><span role="img" aria-label="phone">📞</span> +1 123-456-7890</p>
              <p><span role="img" aria-label="location">📍</span> 77 Massachusetts Ave, Cambridge, MA 02139, United States</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <label>Your name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your mobile number" />
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email id" />
            <label>Write your messages here</label>
            <textarea placeholder="Enter your message"></textarea>
           
            <button type="submit">Submit now →</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
