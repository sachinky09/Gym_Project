import React from 'react';
import './Form.css';

const FormSection = () => {
  return (
    <div className='form-section'>
      <div className='form-heading'>
        <h1>Get in Touch</h1>
      </div>
      <div className='content'>
        <div className='contact-form'>
          <form>
            <h2 className='contact-form-heading'>Let's Talk</h2>
            <p className='contact-form-subheading'>
              Send us an email with a few details about your project.
            </p>
            <label>Your name</label>
            <input
              type='text'
              placeholder='Enter your name'
            />
            <label>Write your question here</label>
            <textarea placeholder='Enter your message'></textarea>

            <button type='submit'>Submit now →</button>
          </form>
        </div>
        <div className='contact-info'>
          <div className='info'>
            <h3>
              Send us a message{' '}
              <span
                role='img'
                aria-label='envelope'
              >
                ✉️
              </span>
            </h3>
            <p>
              Feel free to reach out through the contact form or find our
              contact information below. Your feedback, questions, and
              suggestions are important to us as we strive to provide
              exceptional service to our university community.
            </p>
            <div className='contact-details'>
              <p>
                <span
                  role='img'
                  aria-label='email'
                >
                  📧
                </span>{' '}
                Contact@GreatStack.dev
              </p>
              <p>
                <span
                  role='img'
                  aria-label='phone'
                >
                  📞
                </span>{' '}
                +1 123-456-7890
              </p>
              <p>
                <span
                  role='img'
                  aria-label='location'
                >
                  📍
                </span>
                National Institute of Technology Durgapur
                <br />
                Mahatma Gandhi Avenue,
                <br />
                Durgapur,
                <br />
                West Bengal 713209,
                <br />
                India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
