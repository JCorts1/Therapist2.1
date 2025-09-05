import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css'
import '../App.css';
import logo from '../assets/img/logo.jpg';
import SplashScreen from '../components/SplashScreen';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className='main-container'>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className='layout home-layout'>
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
          <div className='logo-container w-6/12 h-full flex justify-center items-center'>
            <img className='home-logo' src={logo} alt="Logo Tatiana Loaiza" />
          </div>

          <div className='text-content w-6/12 h-full flex flex-col justify-center items-start px-8'>
            <div className='w-full mb-8'>
              <h1 className='header mb-4'>
                Un Espacio Seguro para sanar y evolucionar a tu propio ritmo.
              </h1>
              <p className='home-paragraph text-left'>
                Ser partícipes de la vida integral
                <br></br>
                <br></br>
                con determinación y en acción hacia una consciencia que nos nutre, brinda respuestas e indica el camino pleno de sanación. Estoy aquí para acompañarte y explorar en lo infinito de tu ser...en ese camino, paso a paso con luz, paciencia y amor.
              </p>
            </div>

            <div className='home-links'>
              <Link to="/about" className='btn-primary'>MÁS SOBRE MÍ</Link>
              <Link to="/appointment" className='btn-primary'>RESERVA UNA CITA</Link>
              <Link to="/contact" className='btn-primary'>CONTÁCTAME</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
