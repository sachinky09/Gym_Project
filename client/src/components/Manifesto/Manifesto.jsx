import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import './Manifesto.css';

const manifestoItems = [
  {
    title: 'Empower our community through education.',
    description:
      'We aim to enhance educational resources and opportunities for all community members, fostering personal and professional growth.',
  },
  {
    title: 'Promote sustainability and eco-friendly practices.',
    description:
      'Our focus is on encouraging sustainable practices and reducing environmental impact through various initiatives.',
  },
  {
    title: 'Foster innovation and technology development.',
    description:
      'We support the advancement of technology and innovation to drive progress and create new opportunities.',
  },
  {
    title: 'Enhance public health and safety measures.',
    description:
      'Our goal is to improve public health and safety through better policies and resources.',
  },
  {
    title: 'Support local businesses and economic growth.',
    description:
      'We strive to boost the local economy by supporting small businesses and fostering economic development.',
  },
  {
    title: 'Encourage cultural diversity and inclusivity.',
    description:
      'We promote a culture of inclusivity and celebrate diversity within our community.',
  },
  {
    title: 'Improve infrastructure and urban planning.',
    description:
      'Our focus is on enhancing infrastructure and urban planning to improve living conditions and accessibility.',
  },
  {
    title: 'Increase transparency and accountability in governance.',
    description:
      'We advocate for greater transparency and accountability in government operations to build public trust.',
  },
  {
    title: 'Strengthen community engagement and participation.',
    description:
      'We aim to increase community involvement and participation in decision-making processes.',
  },
];

const Manifesto = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='manifesto-container'>
      <motion.div
        initial={{ opacity: 0,
          x: -30,
         }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.1,
          },
        }}
      >
        <h1 className='manifesto-heading'>Our Manifesto</h1>
      </motion.div>
      <div className='manifesto-subheading'>
        <Element name='manifesto'>
          We believe in a future where technology and innovation drive positive
          change. Our mission is to empower individuals and communities through
          cutting-edge solutions and sustainable practices
        </Element>
      </div>
      <div className='manifesto-grid'>
        {manifestoItems.map((item, index) => (
          <motion.div
              key={index}
              className={`manifesto-card ${
                expandedIndex === index ? 'expanded' : ''
              }`}
              onClick={() => handleCardClick(index)}
initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            >
              <div className='manifesto-card-header'>
                <h3 className='manifesto-title'>{item.title}</h3>
              </div>

              <div
                className={`manifesto-card-placeholder ${
                  expandedIndex === index ? 'hidden' : ''
                }`}
              ></div>
              <div className='manifesto-card-details'>
                <p className='manifesto-description'>{item.description}</p>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Manifesto;
