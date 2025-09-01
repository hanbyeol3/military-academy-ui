import React from 'react';
import './Instructors.css';
import instructor1 from '../../assets/teacher/img.png';
import instructor2 from '../../assets/teacher/img_1.png';
import instructor3 from '../../assets/teacher/img_2.png';

const Instructors: React.FC = () => {
  const instructors = [
    {
      id: 1,
      image: instructor1,
      name: '김영수 교수',
      subject: '경찰학과 헌법 전공',
      experience: '15년차 경찰 시험 전문 강사',
      description: '체계적인 이론 설명과 실전 문제 해결 능력을 갖춘 최고의 경찰학 전문가입니다.',
      achievements: [
        '경찰대학교 졸업',
        '서울지방경찰청 근무 10년',
        '합격률 95% 달성',
        '베스트셀러 교재 5권 출간'
      ]
    },
    {
      id: 2,
      image: instructor2,
      name: '박민정 교수',
      subject: '사관학교 수학 및 영어 전공',
      experience: '12년차 사관학교 입시 전문 강사',
      description: '수학과 영어를 통합적으로 접근하여 학습 효율을 극대화시키는 교육 방법론의 전문가입니다.',
      achievements: [
        '육군사관학교 졸업',
        '연세대학교 교육학 박사',
        '사관학교 합격률 90% 이상',
        '교육부 우수강사 선정 3회'
      ]
    },
    {
      id: 3,
      image: instructor3,
      name: '이준호 교수',
      subject: '종합 전략 및 면접 전문',
      experience: '20년차 공무원 시험 전문 강사',
      description: '경찰과 사관학교 모든 과정을 아우르는 종합 전략가이자 면접의 달인입니다.',
      achievements: [
        '공무원 시험 20년 연속 수석',
        '면접 합격률 98% 달성',
        '전국 강의 만족도 1위',
        '공무원 시험 교육혁신상 수상'
      ]
    }
  ];

  return (
    <div className="instructors-page">
      <div className="instructors-hero">
        <div className="hero-background">
          <h1 className="page-title">경찰사관 강사진 소개</h1>
          <p className="page-subtitle">최고의 전문성과 경험을 갖춘 교육 전문가들</p>
        </div>
      </div>

      <div className="instructors-container">
        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.id} 
              className={`instructor-card card-${index + 1}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="instructor-image-container">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="instructor-image"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h3 className="instructor-name">{instructor.name}</h3>
                        <p className="instructor-subject">{instructor.subject}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-info">
                    <p className="instructor-experience">{instructor.experience}</p>
                    <div className="card-flip-indicator">
                      <span>자세히 보기</span>
                      <div className="flip-icon">→</div>
                    </div>
                  </div>
                </div>

                <div className="card-back">
                  <div className="back-content">
                    <h3 className="back-name">{instructor.name}</h3>
                    <p className="back-description">{instructor.description}</p>
                    
                    <div className="achievements">
                      <h4>주요 경력</h4>
                      <ul className="achievements-list">
                        {instructor.achievements.map((achievement, idx) => (
                          <li key={idx} className="achievement-item">
                            <span className="achievement-bullet">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="instructors-bottom">
        <div className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">평균 합격률</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">년 평균 경력</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">배출 합격생</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">만족도</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;