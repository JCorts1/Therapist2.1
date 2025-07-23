import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/styles/About.css';
import NavBar from '../components/NavBar';
import Autoplay from "embla-carousel-autoplay"
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
    "https://placehold.co/600x400/D6E4D8/333333?text=Terapia+con+Niños",
    "https://placehold.co/600x400/E4E4D6/333333?text=Crecimiento+Personal",
    "https://placehold.co/600x400/D6D6E4/333333?text=Talleres+Grupales",
    "https://placehold.co/600x400/D6E0E4/333333?text=Bienestar+Integral"
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
            <h1 className="header">About Our Journey</h1>
            <p className="text about-text">
              Discover the beauty of nature through our curated collection
              of seasonal experiences. Each moment captured tells a story
              of growth, change, and the eternal cycle of life.
            </p>
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
