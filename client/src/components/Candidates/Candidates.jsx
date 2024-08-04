import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import './Candidates.css';

const CardComponent = () => {
  const candidates = [
    {
      name: 'Prasant Sahu',
      designation: 'President',
      imgSrc: process.env.PUBLIC_URL + '/presi.jpg',
    },
    {
      name: 'Shivanshu Kumar',
      designation: 'Vice President',
      imgSrc: process.env.PUBLIC_URL + '/vice_presi.jpg',
    },
    {
      name: 'Ankan Dutta',
      designation: 'General Secretary',
      imgSrc: process.env.PUBLIC_URL + '/gen_sec.jpg',
    },
    {
      name: 'Sujal Kumar',
      designation: 'General Secretary(Sports)',
      imgSrc: process.env.PUBLIC_URL + '/ags_sports.jpg',
    },
    {
      name: 'Arkorup Mitra',
      designation: 'General Secretary(Cultural)',
      imgSrc: process.env.PUBLIC_URL + '/ags_cultural.jpg',
    },
  ];

  return (
    <div className='card-section'>
      <h2 className='section-heading'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.1,
            },
          }}
        >
          <Element name='candidates'>Our Candidates</Element>
        </motion.div>
      </h2>
      <p className='manifesto-subheading'>
        Introducing our gymkhana election candidates! Each of these students is
        dedicated to enhancing our college experience with their innovative
        ideas and leadership skills. Get to know them better and learn about
        their plans to make our campus a more vibrant and engaging place.
      </p>
      <div className='card-container'>
        {candidates.map((candidate, index) => (
          <motion.div
            key={index}
            className='card'
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
          >
            <img
              src={candidate.imgSrc}
              alt={candidate.name}
            />
            <div className='card-info'>
              <h3>{candidate.name}</h3>
              <p>{candidate.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
