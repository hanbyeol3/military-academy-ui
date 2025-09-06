import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      image: '/assets/main/main_image.png',
      alt: '대성마이맥 경찰사관 MASTER팀 메인'
    },
    {
      image: '/assets/main/main_image2.png',
      alt: '대성마이맥 경찰사관 강사진'
    },
    {
      image: '/assets/main/main_image3.png',
      alt: '경찰사관학교 대비 학습'
    }
  ];

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // 프로그레스 바
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  // const goToSlide = (index: number) => {
  //   setCurrentSlide(index);
  //   setProgress(0);
  // };
  //
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   setProgress(0);
  // };
  //
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  //   setProgress(0);
  // };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-team-image"></div>
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            <span className="char">대성마이맥 경찰사관 인강 강사진은,</span>
            <br />
            <span className="char">단언컨대, </span>
            <span className="char highlight">경찰사관 인터넷강의 No.1 입니다</span>
          </h1>
          <p className="hero-subtitle">
            7년 연속 대치동 수강생 수 1위를 자랑하는 검증된 전문 강사진과 함께
              <br />경찰사관학교의 꿈을 실현하세요
          </p>
          <div className="hero-cta">
            <a href="/teachers" className="btn btn-primary btn-lg">
              강사진 소개
            </a>
            <a href="/online" className="btn btn-secondary btn-lg">
              인강 안내
            </a>
            <a href="/offline" className="btn btn-outline btn-lg">
              현장 강의 안내
            </a>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      {/*<section className="slider-section">*/}
      {/*  <div className="slider-container">*/}
      {/*    <h2 className="slider-title">*/}
      {/*      전문성과 체계성을 갖춘<br />*/}
      {/*      검증된 교육 시스템*/}
      {/*    </h2>*/}

      {/*    <div className="image-slider">*/}
      {/*      {slides.map((slide, index) => (*/}
      {/*        <img*/}
      {/*          key={index}*/}
      {/*          src={slide.image}*/}
      {/*          alt={slide.alt}*/}
      {/*          className={`slider-image ${index === currentSlide ? 'active' : ''}`}*/}
      {/*        />*/}
      {/*      ))}*/}

      {/*      <div className="slider-overlay"></div>*/}

      {/*      /!* Controls *!/*/}
      {/*      <button className="slider-controls slider-prev" onClick={prevSlide}>*/}
      {/*        <ChevronLeft size={20} />*/}
      {/*      </button>*/}
      {/*      <button className="slider-controls slider-next" onClick={nextSlide}>*/}
      {/*        <ChevronRight size={20} />*/}
      {/*      </button>*/}

      {/*      /!* Dots *!/*/}
      {/*      <div className="slider-dots">*/}
      {/*        {slides.map((_, index) => (*/}
      {/*          <button*/}
      {/*            key={index}*/}
      {/*            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}*/}
      {/*            onClick={() => goToSlide(index)}*/}
      {/*          />*/}
      {/*        ))}*/}
      {/*      </div>*/}

      {/*      /!* Progress Bar *!/*/}
      {/*      <div*/}
      {/*        className="slider-progress"*/}
      {/*        style={{ width: `${progress}%` }}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default Home;