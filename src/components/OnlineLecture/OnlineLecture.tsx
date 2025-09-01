import React, { useState } from 'react';
import './OnlineLecture.css';

const OnlineLecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState('police');

  const policePrograms = [
    {
      id: 1,
      title: '경찰공무원 종합반',
      duration: '12개월',
      price: '890,000원',
      originalPrice: '1,200,000원',
      features: [
        '헌법, 경찰학, 형법, 형사소송법 전 과목',
        '실전 모의고사 100회 제공',
        '1:1 개별 질의응답',
        '합격 시 100% 환급'
      ],
      popular: true
    },
    {
      id: 2,
      title: '경찰공무원 단과반',
      duration: '3개월',
      price: '290,000원',
      originalPrice: '350,000원',
      features: [
        '과목별 선택 수강',
        '집중 이론 강의',
        '실전 문제 풀이',
        '무제한 복습'
      ],
      popular: false
    },
    {
      id: 3,
      title: '경찰공무원 면접반',
      duration: '1개월',
      price: '190,000원',
      originalPrice: '250,000원',
      features: [
        '개인별 맞춤 면접 코칭',
        '실전 면접 시뮬레이션',
        '답변 스크립트 제공',
        '합격 노하우 전수'
      ],
      popular: false
    }
  ];

  const officerPrograms = [
    {
      id: 1,
      title: '사관학교 종합반',
      duration: '24개월',
      price: '1,290,000원',
      originalPrice: '1,800,000원',
      features: [
        '국어, 영어, 수학 전 과목',
        '체력검정 대비 프로그램',
        '면접 및 인성검사 대비',
        '합격 보장 시스템'
      ],
      popular: true
    },
    {
      id: 2,
      title: '사관학교 단과반',
      duration: '6개월',
      price: '490,000원',
      originalPrice: '650,000원',
      features: [
        '과목별 집중 학습',
        '실전 문제 해결',
        '개별 학습 관리',
        '진도별 맞춤 커리큘럼'
      ],
      popular: false
    },
    {
      id: 3,
      title: '사관학교 면접반',
      duration: '2개월',
      price: '390,000원',
      originalPrice: '500,000원',
      features: [
        '군인 정신 함양 프로그램',
        '리더십 역량 개발',
        '실전 면접 훈련',
        '인성검사 대비 특강'
      ],
      popular: false
    }
  ];

  const getCurrentPrograms = () => {
    return activeTab === 'police' ? policePrograms : officerPrograms;
  };

  const benefits = [
    {
      icon: '🎥',
      title: '고화질 강의',
      description: '4K 화질의 선명한 강의 영상으로 집중력 극대화'
    },
    {
      icon: '📱',
      title: '모바일 학습',
      description: '언제 어디서나 스마트폰으로 학습 가능'
    },
    {
      icon: '📊',
      title: '학습 분석',
      description: 'AI 기반 학습 패턴 분석 및 맞춤 커리큘럼 제공'
    },
    {
      icon: '💬',
      title: '실시간 Q&A',
      description: '강사와의 실시간 질의응답 및 학습 상담'
    }
  ];

  return (
    <div className="online-lecture-page">
      <div className="lecture-hero">
        <div className="hero-background">
          <h1 className="page-title">대성마이맥 인강 안내</h1>
          <p className="page-subtitle">언제 어디서나 최고의 교육을 경험하세요</p>
        </div>
      </div>

      <div className="lecture-container">
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'police' ? 'active' : ''}`}
            onClick={() => setActiveTab('police')}
          >
            경찰공무원
          </button>
          <button 
            className={`tab-button ${activeTab === 'officer' ? 'active' : ''}`}
            onClick={() => setActiveTab('officer')}
          >
            사관학교
          </button>
        </div>

        <div className="programs-grid">
          {getCurrentPrograms().map((program, index) => (
            <div 
              key={program.id} 
              className={`program-card ${program.popular ? 'popular' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {program.popular && (
                <div className="popular-badge">BEST</div>
              )}
              
              <div className="card-header">
                <h3 className="program-title">{program.title}</h3>
                <div className="program-duration">{program.duration}</div>
              </div>

              <div className="price-section">
                <div className="original-price">{program.originalPrice}</div>
                <div className="current-price">{program.price}</div>
                <div className="discount-badge">
                  {Math.round((1 - parseInt(program.price.replace(/[^0-9]/g, '')) / parseInt(program.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% 할인
                </div>
              </div>

              <div className="features-section">
                <ul className="features-list">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="enroll-button">
                수강 신청하기
                <span className="button-arrow">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h2 className="benefits-title">대성마이맥 인강의 특별함</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">지금 시작하세요!</h2>
            <p className="cta-description">
              체험 강의 무료 제공 · 7일 무조건 환불 보장
            </p>
            <button className="cta-button">
              무료 체험하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLecture;