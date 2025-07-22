import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const About = () => {
  return (
    <div className='main-container'>
      <div className='layout'>
      {[...Array(5)].map((_, i) => (
          <div key={i} className='leaf'>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 5 Q45 20 50 35 Q40 45 35 60 Q30 75 35 85 Q40 90 50 95 Q60 90 65 85 Q70 75 65 60 Q60 45 50 35 Q55 20 50 5"
                fill={i % 2 === 0 ? '#2d5a2d' : '#4a7c4a'}
              />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#1a3d1a" strokeWidth="2" />
              <line x1="50" y1="35" x2="40" y2="45" stroke="#1a3d1a" strokeWidth="1" />
              <line x1="50" y1="35" x2="60" y2="45" stroke="#1a3d1a" strokeWidth="1" />
              <line x1="50" y1="60" x2="42" y2="70" stroke="#1a3d1a" strokeWidth="1" />
              <line x1="50" y1="60" x2="58" y2="70" stroke="#1a3d1a" strokeWidth="1" />
            </svg>
          </div>
        ))}

      </div>
    </div>
  )
}

export default About
