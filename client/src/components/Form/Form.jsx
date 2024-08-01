import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { toast } from 'react-toastify';

const FormSection = () => {
  const [name, setName] = useState('Anon.');
  const [question, setQuestion] = useState('');

  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/ask', {
        name,
        question,
      });
      console.log(response.data);
      setName('Anon.');
      setQuestion('');

      toast.success('Reponse recorded', toastConfig);
    } catch (error) {
      console.error('there was an error submitting your question.', error);
      toast.error('Error occured', toastConfig);
    }
  };

  return (
    <div className='form-section'>
      <div className='form-heading'>
        <h1>Get in Touch</h1>
      </div>
      <div className='content'>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <h2 className='contact-form-heading'>Let's Talk</h2>
            <p className='contact-form-subheading'>
              Send us an email with a few details about your project.
            </p>
            <label>Your name</label>
            <input
              type='text'
              placeholder='Enter your name'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
            <label>Write your question here</label>
            <textarea
              placeholder='Enter your message'
              value={question}
              name='question'
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>

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
