import React, { useState, useEffect } from 'react';
import '../assets/styles/SplashScreen.css';
import introGif from '../assets/img/intro.gif';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <img 
          src={introGif} 
          alt="Introducción" 
          className="splash-gif"
        />
      </div>
    </div>
  );
};

export default SplashScreen;