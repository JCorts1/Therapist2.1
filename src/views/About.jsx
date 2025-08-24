import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/styles/About.css';
import NavBar from '../components/NavBar';
import Autoplay from "embla-carousel-autoplay"
import KidsTherapy from '@/assets/img/kids-therapy.jpg'
import ProfilePic from '@/assets/img/crecimiento-personal.jpg'
import GroupTherapy from '@/assets/img/group-therapy.jpg'
import SoldierTherapy from '@/assets/img/soldier-img.jpg'
import PersonalDev from '@/assets/img/soldier-therapy.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const About = () => {
  // Sample images - replace with your actual images
  const images = [
    "https://placehold.co/600x400/E4D6D6/333333?text=Espacio+Seguro",
    ProfilePic,
    "https://placehold.co/600x400/D6E4D8/333333?text=Terapia+con+Niños",
    KidsTherapy,
    "https://placehold.co/600x400/E4E4D6/333333?text=Crecimiento+Personal",
    PersonalDev,
    "https://placehold.co/600x400/D6D6E4/333333?text=Talleres+Grupales",
    GroupTherapy,
    "https://placehold.co/600x400/D6E0E4/333333?text=Bienestar+Integral",
    SoldierTherapy,
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <div className='main-container'>
      <NavBar/>
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

        <div className="content about-content">
          {/* Left side - Text content */}
          <div className="text-section">
            <div className='text-content-scrollable'>
              <h1 className='about-title'>Hola, soy Tatiana Loaiza.</h1>
              <p>
                Creo firmemente que todos poseemos una capacidad innata para sanar, crecer y reconectar con nuestra verdadera esencia. A veces, el ritmo de la vida y los desafíos que encontramos pueden desconectarnos de nosotros mismos, dejándonos con una sensación de vacío o confusión.
              </p>
              <p>
                Mi propósito como terapeuta es ofrecerte un espacio seguro, profesional y lleno de empatía, donde puedas explorar tus pensamientos y emociones sin juicios. Juntos, podemos navegar por esas dificultades, no solo para superarlas, sino para transformarlas en una oportunidad de desarrollo personal y bienestar integral.
              </p>
              <h2>Mi Enfoque Terapéutico</h2>
              <p>
                Mi trabajo se basa en la convicción de que tú eres el experto en tu propia vida. Yo estoy aquí para acompañarte con herramientas y una guía profesional. En nuestras sesiones, integro diversas corrientes para adaptarme a tus necesidades únicas:
              </p>
              <ul>
                <li><strong>Profundidad y Raíz (Psicoanálisis):</strong> Exploramos juntos el origen de tus emociones y patrones de comportamiento para lograr una comprensión profunda que libere y sane desde la raíz.</li>
                <li><strong>Mente y Cerebro (Neuroplasticidad y PNL):</strong> Utilizo técnicas basadas en la ciencia de la neuroplasticidad y la Programación Neurolingüística (PNL) para ayudarte a entender y reconfigurar tus patrones de pensamiento, creando nuevas rutas neuronales hacia la calma y la claridad mental.</li>
                <li><strong>Presencia y Calma (Meditación y Mindfulness):</strong> Diseño e imparto ejercicios de meditación y atención plena para desarrollar una mayor consciencia sobre ti mismo y todas las herramientas infinitas que tienes a disposición según tus objetivos.</li>
              </ul>
              <h2>Áreas de Experiencia</h2>
              <ul>
                <li>Terapia Clínica Individual para Adultos</li>
                <li>Talleres Grupales de Crecimiento Personal</li>
                <li>Desarrollo de Inteligencia Emocional y Habilidades Blandas</li>
                <li>Orientación Vocacional y Profesional para Adolescentes</li>
                <li>Promoción de la Salud Mental y el Bienestar Laboral</li>
              </ul>
              <h2>Formación y Credenciales</h2>
              <ul>
                <li><strong>Psicóloga,</strong> Corporación Universitaria Minuto de Dios</li>
                <li><strong>Tarjeta Profesional de Psicología N° 220176</strong></li>
                <li>Diplomado en <strong>Programación Neurolingüística (PNL)</strong></li>
                <li>Diplomado en <strong>Pedagogía Infantil</strong></li>
              </ul>
            </div>
            <div className="scroll-indicator">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.5L5.5 11L6.91 9.59L12 14.67L17.09 9.59L18.5 11L12 17.5Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Right side - Vertical Carousel */}
          <div className="carousel-section">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              plugins={[plugin.current]}
              className="about-carousel"
            >
              <CarouselContent className="carousel-content-wrapper">
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="carousel-item-padding">
                      <div className="carousel-image-container">
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="carousel-image"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="carousel-prev" />
              <CarouselNext className="carousel-next" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
