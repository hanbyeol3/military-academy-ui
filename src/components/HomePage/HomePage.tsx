import React, { useState, useEffect } from 'react';
import './HomePage.css';
import img1 from '../../assets/img.png';
import img2 from '../../assets/img_1.png';
import img3 from '../../assets/img_2.png';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="slider-container">
          <div className="slider">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line-1">경찰/사관</span>
              <span className="title-line-2">1타 강사진</span>
            </h1>
            <p className="hero-subtitle">최고의 교육 품질로 당신의 꿈을 실현합니다</p>
          </div>

          <button className="slider-nav prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="slider-nav next" onClick={nextSlide}>
            &#8250;
          </button>

          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">MASTER팀과 함께하는 성공</h2>
            <p className="section-description">
              체계적인 교육 시스템과 최고 수준의 강사진으로<br />
              경찰·사관 시험 합격의 꿈을 현실로 만들어드립니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;