import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  'https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
  'https://wallpapers.com/images/hd/random-shanghai-city-skyline-sunset-razywjghzt72bz8i.jpg',
  'https://www.highreshdwallpapers.com/wp-content/uploads/2012/09/Random-Coloured-Shapes.jpg',
  'https://via.placeholder.com/1200x600?text=Image+4',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}

export default Carousel;
