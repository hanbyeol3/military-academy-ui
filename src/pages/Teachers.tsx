import React from 'react';
import './Teachers.css';

const Teachers: React.FC = () => {
  const teachers = [
    {
      id: 1,
      name: '국어 신한종 강사',
      image: '/assets/teacher/신한종2.jpg',
      description: `서강대학교 국어국문학과
현 대성마이맥 경찰사관 국어 인터넷강의
현 대성마이맥 수능,모의고사 해설 인터넷강의
현 강남대성, 대치두각 국어강사
현 광릉한샘기숙학원 국어강사
전 스카이에듀 수능국어 인터넷강의
전 강남하이퍼, 대치이강, 대치다원교육 국어강사`,
      isReversed: false
    },
    {
      id: 2,
      name: '영어 이상인 강사',
      image: '/assets/teacher/이상인1.jpg',
      description: `연세대학교
현 대성마이맥 경찰사관 영어 인터넷강의
현 대성마이맥 수능,모의고사 해설 인터넷강의
현 강남대성, 대치두각 영어강사
현 광릉한샘기숙학원 영어강사
전 스카이에듀 수능영어 인터넷강의
전 강남하이퍼, 대치이강, 대치다원교육 영어강사`,
      isReversed: true
    },
    {
      id: 3,
      name: '수학 홍창우 강사',
      image: '/assets/teacher/홍창우1.jpg',
      description: `고려대학교 학사, 석사
현 대성마이맥 경찰사관 수학 인터넷강의
현 대성마이맥 수능,모의고사 해설 인터넷강의
현 강남대성, 대치두각 수학강사
현 광릉한샘기숙학원 수학강사
전 스카이에듀 수능수학 인터넷강의
전 강남하이퍼, 대치이강, 대치다원교육 수학강사`,
      isReversed: false
    }
  ];

  return (
    <div className="teachers">
      {/* Hero Section */}
      <section className="teachers-hero">
        <div className="teachers-hero-content fade-in-up">
          <h1 className="teachers-title">
            단언컨대,<br />
            경찰사관 1차시험대비는<br />
            <span className="highlight">대성마이맥 경찰사관 마스터팀 강사진이 No.1입니다.</span>
          </h1>
          <p className="teachers-subtitle">
            최고의 학력과 경력을 자랑하는 전문 강사진이 여러분의 합격을 책임집니다
          </p>
        </div>
      </section>

      {/* Teachers List */}
      <section className="teachers-list">
        <div className="teachers-container">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.id}
              className={`teacher-card fade-in-up ${teacher.isReversed ? 'reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Teacher Image */}
              <div className="teacher-image">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                />
              </div>

              {/* Teacher Info */}
              <div className="teacher-info">
                <h3 className="teacher-name">
                  {teacher.name}
                </h3>
                
                <div className="teacher-description">
                  <pre>{teacher.description}</pre>
                </div>

                <div className="teacher-badges">
                  <span className="teacher-badge">대치동 수강생 수 1위</span>
                  <span className="teacher-badge">전문 강사진</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Decorative Elements */}
          <div className="teacher-decoration"></div>
          <div className="teacher-decoration"></div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="teachers-stats">
        <div className="stats-container">
          <h2 className="stats-title">
            숫자로 보는 우리의 성과
          </h2>
          
          <div className="stats-grid">
            <div className="stat-card fade-in-up">
              <div className="stat-number">7년</div>
              <div className="stat-label">연속 대치동 1위</div>
            </div>
            <div className="stat-card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">3명</div>
              <div className="stat-label">전문 강사진</div>
            </div>
            <div className="stat-card fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="stat-number">100%</div>
              <div className="stat-label">검증된 커리큘럼</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;