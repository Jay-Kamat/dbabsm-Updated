import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  titleMarathi: string;
  subtitle: string;
  subtitleMarathi: string;
}

interface HeroSliderProps {
  language: "en" | "mr";
}

const HeroSlider: React.FC<HeroSliderProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const slides: Slide[] = [
    {
      id: 1,
      image:
        "/assets/images/babasaheb.png?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop",
      title: "Dr. Babasaheb Ambedkar",
      titleMarathi: "डॉ. बाबासाहेब आंबेडकर",
      subtitle:
        "The Father of the Indian Constitution and the Pioneer of Social Justice.",
      subtitleMarathi: "भारतीय संविधानाचे जनक आणि सामाजिक न्यायाचे प्रणेते",
    },
    {
      id: 2,
      image:
        "/assets/images/buddha.png?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Lord Buddha",
      titleMarathi: "तथागत भगवान बुद्ध",
      subtitle: "The Messenger of Peace",
      subtitleMarathi: "शांतीचा संदेश",
    },
    {
      id: 3,
      image:
        "/assets/images/buddha1.png?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Dr.Babasaheb Ambedkar Bouddha Sanskar Mandal, Jaysingpur",
      titleMarathi: "डॉ. बाबासाहेब आंबेडकर बौद्ध संस्कार मंडळ, जयसिंगपुर",
      subtitle: "Shine your light, and follow your own path.",
      subtitleMarathi: "अत् दीप भव",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-all duration-1000 ease-out
              ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <div className="relative w-full h-full overflow-hidden">
              {/* Parallax Background */}
              <img
                src={slide.image}
                alt={language === "mr" ? slide.titleMarathi : slide.title}
                className={`
    w-full h-full object-cover animate-breathe
    transition-all duration-[1600ms] ease-[cubic-bezier(0.22,0.1,0.25,1)]

    ${isActive
                    ? "translate-x-0 blur-0 scale-[1.12]"
                    : direction === "right"
                      ? "-translate-x-8 blur-[4px] scale-[1.06]"
                      : "translate-x-8 blur-[4px] scale-[1.06]"
                  }
  `}
              />


              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

              {/* Text with Parallax */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white px-4 max-w-3xl">

                {/* Title */}
                <h1
                  className={`
      text-3xl md:text-5xl font-bold mb-2 text-glow
      opacity-0 fade-up stagger-1
      ${isActive ? "" : "hidden"}
    `}
                >
                  {language === "mr" ? slide.titleMarathi : slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className={`
      text-base md:text-xl text-glow leading-relaxed opacity-0 fade-up stagger-2
      ${isActive ? "" : "hidden"}
    `}
                >
                  {language === "mr" ? slide.subtitleMarathi : slide.subtitle}
                </p>
              </div>

            </div>
          </div>
        );
      })}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all
              ${index === currentSlide ? "bg-blue-500 scale-125" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
