import React, { useState } from 'react';
import './OfflineLecture.css';

const OfflineLecture: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const classSchedules = [
    {
      id: 1,
      type: '경찰공무원',
      className: '집중반',
      schedule: '월~금 09:00-18:00',
      duration: '3개월',
      capacity: '20명',
      instructor: '김영수 교수',
      price: '1,500,000원',
      location: '대치동 본원 A관',
      features: [
        '소수정예 시스템',
        '개별 맞춤 관리',
        '실전 모의고사',
        '합격 보장'
      ],
      popular: true
    },
    {
      id: 2,
      type: '경찰공무원',
      className: '주말반',
      schedule: '토, 일 09:00-18:00',
      duration: '6개월',
      capacity: '30명',
      instructor: '김영수 교수',
      price: '980,000원',
      location: '대치동 본원 B관',
      features: [
        '직장인 맞춤 수업',
        '주말 집중 수업',
        '온라인 보강',
        '자율학습실 제공'
      ],
      popular: false
    },
    {
      id: 3,
      type: '사관학교',
      className: '전문반',
      schedule: '월~금 08:00-20:00',
      duration: '12개월',
      capacity: '15명',
      instructor: '박민정 교수',
      price: '2,800,000원',
      location: '대치동 본원 특별관',
      features: [
        '최고급 시설',
        '1:1 멘토링',
        '체력훈련 포함',
        '면접 특별 관리'
      ],
      popular: true
    },
    {
      id: 4,
      type: '사관학교',
      className: '기초반',
      schedule: '월, 수, 금 18:00-22:00',
      duration: '9개월',
      capacity: '25명',
      instructor: '박민정 교수',
      price: '1,200,000원',
      location: '대치동 본원 C관',
      features: [
        '기초부터 체계적',
        '저녁 시간 수업',
        '보충수업 제공',
        '학습 플래너'
      ],
      popular: false
    }
  ];

  const facilities = [
    {
      name: '최첨단 강의실',
      description: '최신 AV 시설과 쾌적한 환경',
      icon: '🏫'
    },
    {
      name: '개인 자율학습실',
      description: '24시간 개방되는 집중 학습공간',
      icon: '📚'
    },
    {
      name: '휴게 공간',
      description: '편안한 휴식과 재충전 공간',
      icon: '☕'
    },
    {
      name: '상담실',
      description: '개인별 맞춤 학습 상담',
      icon: '👥'
    }
  ];

  const openModal = (classInfo) => {
    setSelectedClass(classInfo);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

  return (
    <div className="offline-lecture-page">
      <div className="lecture-hero">
        <div className="hero-background">
          <h1 className="page-title">대치동 현장 강의 안내</h1>
          <p className="page-subtitle">최고의 교육 환경에서 직접 만나는 전문 강의</p>
        </div>
      </div>

      <div className="lecture-container">
        <div className="location-info">
          <div className="location-card">
            <div className="location-header">
              <h2 className="location-title">MASTER팀 대치동 본원</h2>
              <div className="location-badge">프리미엄 캠퍼스</div>
            </div>
            <div className="location-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span className="detail-text">서울시 강남구 대치동 123-45</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🚇</span>
                <span className="detail-text">2호선 대치역 3번 출구 도보 3분</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <span className="detail-text">02-1234-5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="classes-section">
          <h2 className="section-title">개설 강좌 안내</h2>
          <div className="classes-grid">
            {classSchedules.map((classInfo, index) => (
              <div 
                key={classInfo.id} 
                className={`class-card ${classInfo.popular ? 'popular' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {classInfo.popular && (
                  <div className="popular-badge">인기</div>
                )}
                
                <div className="class-header">
                  <div className="class-type">{classInfo.type}</div>
                  <h3 className="class-name">{classInfo.className}</h3>
                </div>

                <div className="class-info">
                  <div className="info-row">
                    <span className="info-label">수업 시간</span>
                    <span className="info-value">{classInfo.schedule}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">수강 기간</span>
                    <span className="info-value">{classInfo.duration}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">정원</span>
                    <span className="info-value">{classInfo.capacity}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">담당 강사</span>
                    <span className="info-value instructor">{classInfo.instructor}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">강의실</span>
                    <span className="info-value">{classInfo.location}</span>
                  </div>
                </div>

                <div className="price-info">
                  <span className="price">{classInfo.price}</span>
                </div>

                <div className="features">
                  {classInfo.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <button 
                  className="detail-button"
                  onClick={() => openModal(classInfo)}
                >
                  자세히 보기
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="facilities-section">
          <h2 className="section-title">캠퍼스 시설 안내</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="facility-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="facility-icon">{facility.icon}</div>
                <h3 className="facility-name">{facility.name}</h3>
                <p className="facility-description">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-section">
          <div className="benefits-container">
            <h2 className="benefits-title">현장 강의만의 특별함</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">👨‍🏫</div>
                <div className="benefit-content">
                  <h3>직접 소통</h3>
                  <p>강사와의 실시간 질의응답과 즉석 피드백</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-content">
                  <h3>동료 학습</h3>
                  <p>함께 공부하는 동기들과의 상호작용과 동기부여</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📅</div>
                <div className="benefit-content">
                  <h3>체계적 관리</h3>
                  <p>출석 관리와 학습 진도 체크로 완벽한 관리</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🏆</div>
                <div className="benefit-content">
                  <h3>집중 환경</h3>
                  <p>학습에만 집중할 수 있는 최적의 교육 환경</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-card">
            <h2 className="contact-title">상담 및 등록 문의</h2>
            <p className="contact-description">
              전문 상담사가 개인별 맞춤 상담을 해드립니다
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-info">
                  <span className="method-title">전화 상담</span>
                  <span className="method-detail">02-1234-5678</span>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-info">
                  <span className="method-title">카카오톡 상담</span>
                  <span className="method-detail">@master_academy</span>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">🕐</div>
                <div className="method-info">
                  <span className="method-title">상담 시간</span>
                  <span className="method-detail">평일 09:00-18:00</span>
                </div>
              </div>
            </div>
            <button className="consultation-button">
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </div>

      {selectedClass && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2 className="modal-title">{selectedClass.type} {selectedClass.className}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-info-grid">
                <div className="modal-info-item">
                  <span className="modal-label">수업 일정</span>
                  <span className="modal-value">{selectedClass.schedule}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-label">수강 기간</span>
                  <span className="modal-value">{selectedClass.duration}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-label">수강료</span>
                  <span className="modal-value price">{selectedClass.price}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-label">담당 강사</span>
                  <span className="modal-value">{selectedClass.instructor}</span>
                </div>
              </div>
              <div className="modal-features">
                <h4>수업 특징</h4>
                <ul>
                  {selectedClass.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-register-button">
                수강 신청하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfflineLecture;