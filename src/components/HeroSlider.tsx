import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  titleMarathi: string;
  subtitle: string;
  subtitleMarathi: string;
}

interface HeroSliderProps {
  language: 'en' | 'mr';
}

const HeroSlider: React.FC<HeroSliderProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/6976901/pexels-photo-6976901.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Dr. Babasaheb Ambedkar',
      titleMarathi: 'डॉ. बाबासाहेब आंबेडकर',
      subtitle: 'Father of Indian Constitution & Champion of Social Justice',
      subtitleMarathi: 'भारतीय संविधानाचे जनक आणि सामाजिक न्यायाचे समर्थक'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/7978764/pexels-photo-7978764.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Lord Buddha',
      titleMarathi: 'भगवान बुद्ध',
      subtitle: 'The Enlightened One - Path to Liberation',
      subtitleMarathi: 'बुद्ध - मोक्षाचा मार्ग'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/6976900/pexels-photo-6976900.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Buddhist Community',
      titleMarathi: 'बौद्ध समुदाय',
      subtitle: 'Unity in Dharma - Strength in Community',
      subtitleMarathi: 'धर्मात एकता - समुदायात शक्ती'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={language === 'mr' ? slide.titleMarathi : slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
                  {language === 'mr' ? slide.titleMarathi : slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 slide-up opacity-90">
                  {language === 'mr' ? slide.subtitleMarathi : slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
                  <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift">
                    Learn More
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition-colors hover-lift">
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all hover-lift"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all hover-lift"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;