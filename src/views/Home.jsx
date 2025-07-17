import React from 'react'
import '../assets/styles/Home.css'
import '../App.css';
import logo from '../assets/img/logo.jpg';

const Home = () => {
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

        <div className='content flex w-full h-full'>
          {/* Left: Logo */}
          <div className='w-6/12 h-full flex justify-center items-center'>
            <img className='home-logo' src={logo} alt="Logo Tatiana Loaiza" />
          </div>

          {/* Right: Text Content */}
          <div className='w-6/12 h-full flex flex-col justify-center items-center'>
            <div className='text w-full h-2/4 flex flex-col items-center justify-center'>
              <h1 className='header'>
                Un Espacio Seguro para sanar y evolucionar a tu propio ritmo.
              </h1>
              <p className='home-paragraph'>
                A veces la vida nos presenta momentos difíciles. Aprender a navegar esos retos es el primer paso para construir una vida más plena. Estoy aquí para acompañarte en ese camino.
              </p>
            </div>

            <div className='w-full h-2/4'>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
