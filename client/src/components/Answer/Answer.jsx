import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import axios from 'axios';
import './Answer.css';

// Function to get the avatar URL
function getAvatarURL() {
  return `https://api.dicebear.com/9.x/identicon/svg?seed=Simba`;
}

function Answer() {
  const avatarURL = getAvatarURL();
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/questions');
        const answerFiltered = response.data
          .filter((query) => query['answer'] != null)
          .reverse();
        setAnswers(answerFiltered);
        console.log(answerFiltered);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (answers.length === 0) return;

    const answerLength = answers[currentIndex]?.answer.length;
    const delay = answerLength * 50 + 2000; // 50ms per char + 2s

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % answers.length);
    }, delay);

    console.log(currentIndex);

    return () => clearTimeout(timer);
  }, [answers, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? answers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % answers.length);
  };

  return (
    <div className='answer-container'>
      <div className='content'>
        <div className='profile'>
          <img
            src={avatarURL}
            alt='Avatar'
            className='avatar'
          />
          <div className='profile-text'>
            <p className='name'>
              <Element name='answer'>{answers[currentIndex]?.name}</Element>
            </p>
          </div>
        </div>
        <p className='question'>{answers[currentIndex]?.question}</p>
        <p className='answer'>{answers[currentIndex]?.answer}</p>
        <div className='nav-arrows'>
          <div className='left' onClick={handlePrev}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='30px'
              viewBox='0 -960 960 960'
              width='30px'
              fill='#e8eaed'
            >
              <path d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' />
            </svg>
          </div>

          <div className='right' onClick={handleNext}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='30px'
              viewBox='0 -960 960 960'
              width='30px'
              fill='#e8eaed'
            >
              <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
