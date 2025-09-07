import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Online.css';

const Online: React.FC = () => {
  const teachers = [
    {
      id: 1,
      name: '국어 신한종',
      image: '/assets/teacher/신한종2.jpg',
      link: 'https://www.mimacstudy.com/tcher/eachTcherMain.ds?tcd=1031'
    },
    {
      id: 2,
      name: '영어 이상인',
      image: '/assets/teacher/이상인1.jpg',
      link: 'https://www.mimacstudy.com/tcher/eachTcherMain.ds?tcd=1032'
    },
    {
      id: 3,
      name: '수학 홍창우',
      image: '/assets/teacher/홍창우1.jpg',
      link: 'https://www.mimacstudy.com/tcher/eachTcherMain.ds?tcd=1033'
    }
  ];

  const features = [
    {
      icon: '📱',
      title: '언제 어디서든',
      description: '모바일, 태블릿, PC에서 자유롭게 수강 가능'
    },
    {
      icon: '🔄',
      title: '무제한 반복',
      description: '이해할 때까지 몇 번이든 반복 수강'
    },
    {
      icon: '📊',
      title: '체계적 관리',
      description: '학습 진도와 성취도를 체계적으로 관리'
    },
    {
      icon: '💬',
      title: '실시간 Q&A',
      description: '강사진과의 실시간 질의응답 시스템'
    },
    {
      icon: '📚',
      title: '풍부한 자료',
      description: '기출문제, 모의고사, 학습자료 제공'
    },
    {
      icon: '🎯',
      title: '맞춤 학습',
      description: '개인별 수준에 맞는 맞춤형 커리큘럼'
    }
  ];

  const handleTeacherClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="online">
      {/* Hero Section */}
      <section className="online-hero">
        <div className="online-hero-content fade-in-up">
          <h1 className="online-title">
            <span className="mobile-only">
              대성마이맥 경찰사관<br />
              인강 강사진은,<br />
              <br />
              <span className="highlight">단언컨대, 경찰사관<br />
              인터넷강의 No.1입니다</span>
            </span>
            <span className="desktop-only">
              대성마이맥 경찰사관 인강 강사진은,<br />
              <span className="highlight">단언컨대, 경찰사관 인터넷강의 No.1입니다</span>
            </span>
          </h1>
          <p className="online-subtitle">
            <span className="mobile-only">
              각 강사의 전문성과 노하우가<br />
              집약된 체계적인 온라인 강의로<br />
              경찰사관학교 합격의 꿈을<br />
              이루어보세요
            </span>
            <span className="desktop-only">
              각 강사의 전문성과 노하우가 집약된 체계적인 온라인 강의로<br/>
              경찰사관학교 합격의 꿈을 이루어보세요
            </span>
          </p>
          <p className="online-notice">
            <span className="mobile-only">
              ( 각 강사를 클릭하면<br />
              강사 인강 페이지로 이동합니다 )
            </span>
            <span className="desktop-only">
              ( 각 강사를 클릭하면 강사 인강 페이지로 이동합니다 )
            </span>
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="online-teachers">
        <div className="online-container">
          <div className="teachers-grid">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="teacher-online-card fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleTeacherClick(teacher.link)}
              >
                <div className="teacher-badge">
                  {teacher.name}
                </div>

                <div className="teacher-card-image">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                  />

                  <div className="teacher-overlay">
                    <div className="teacher-overlay-content">
                      <div className="overlay-icon">
                        <ExternalLink size={32} />
                      </div>
                      <div className="overlay-text">
                        강의 페이지로 이동
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="online-features">
        <div className="features-container">
          <h2 className="features-title">
            온라인 인강의 특장점
          </h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-title">{feature.title}</div>
                <div className="feature-description">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="online-cta">
        <div className="cta-container">
          <h2 className="cta-title fade-in-up">
            <span className="mobile-only">
              지금<br />
              바로 시작하세요
            </span>
            <span className="desktop-only">
              지금 바로 시작하세요
            </span>
          </h2>
          <p className="cta-description fade-in-up">
            <span className="mobile-only">
              경찰사관학교 합격의 첫걸음을<br />
              대성마이맥 전문 강사진과 함께 내딛어보세요.<br />
              체계적인 온라인 학습 시스템으로<br />
              효율적인 학습이 가능합니다.
            </span>
            <span className="desktop-only">
              경찰사관학교 합격의 첫걸음을 대성마이맥 전문 강사진과 함께 내딛어보세요.<br/>
              체계적인 온라인 학습 시스템으로 효율적인 학습이 가능합니다.
            </span>
          </p>

          <div className="cta-card fade-in-up">
            <p className="cta-card-title">
              📞 문의 및 상담
            </p>
            <p className="cta-card-text">
              <span className="mobile-only">
                인강 수강에 대한 자세한 문의는<br />
                대성마이맥 홈페이지를 방문하시거나<br />
                각 강사 페이지에서 확인하실 수 있습니다.
              </span>
              <span className="desktop-only">
                인강 수강에 대한 자세한 문의는 대성마이맥 홈페이지를 방문하시거나 <br/>
                각 강사 페이지에서 확인하실 수 있습니다.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Online;