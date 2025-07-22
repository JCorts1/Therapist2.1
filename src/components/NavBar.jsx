import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Navbar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre Mí' },
    { path: '/services', label: 'Servicios' },
    { path: '/contact', label: 'Contacto' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">TL</span>
          <svg className="logo-leaf" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 2 Q18 8 20 14 Q16 18 14 24 Q12 30 14 34 Q16 36 20 38 Q24 36 26 34 Q28 30 26 24 Q24 18 20 14 Q22 8 20 2"
              fill="#4a7c4a"
            />
          </svg>
        </Link>

        <div className={`nav-menu ${isOpen ? 'nav-menu-active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="nav-appointment-btn"
            onClick={() => setIsOpen(false)}
          >
            Reservar Cita
          </Link>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'bar-active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'bar-active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'bar-active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
