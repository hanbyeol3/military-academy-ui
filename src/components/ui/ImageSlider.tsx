import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  image: string;
  alt: string;
}

interface ImageSliderProps {
  slides: SlideProps[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showDots = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, slides.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className={`relative w-full h-96 lg:h-[500px] overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-50" />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full glass hover:glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mint"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full glass hover:glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mint"
            aria-label="다음 이미지"
          >
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mint ${
                index === currentIndex
                  ? 'bg-mint glow'
                  : 'bg-text-secondary bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && !isHovered && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-text-secondary bg-opacity-20">
          <motion.div
            className="h-full bg-gradient-to-r from-mint to-purple"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;