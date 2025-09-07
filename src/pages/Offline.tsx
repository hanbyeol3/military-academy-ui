import React from 'react';
import { Clock, MapPin, Phone, Users, Award, BookOpen } from 'lucide-react';
import './Offline.css';

const Offline: React.FC = () => {
  return (
    <div className="offline">
      {/* Hero Section */}
      <section className="offline-hero">
        <div className="offline-hero-content">
          <h1 className="offline-title">
            <span className="mobile-only">
              대성마이맥 경찰사관<br />
              강사진의 현장강의는,<br />
              <br />
              <span className="highlight">7년 연속 대치동 수강생 수<br />
              1위를 자랑합니다</span>
            </span>
            <span className="desktop-only">
              대성마이맥 경찰사관 강사진의 현장강의는,<br />
              <span className="highlight">7년 연속 대치동 수강생 수 1위를 자랑합니다</span>
            </span>
          </h1>

          <h2 className="offline-subtitle">
            <span className="mobile-only">
              직접 만나는 현장 강의의 생생함과<br />
              체계적인 학습 관리 시스템
            </span>
            <span className="desktop-only">
              직접 만나는 현장 강의의 생생함과 체계적인 학습 관리 시스템
            </span>
          </h2>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="schedule-container">
          <h2 className="section-title">
            <span className="highlight">대치두각학원 현장강의 수업 안내</span>
          </h2>

          <div className="class-info">
            {/* Regular Classes */}
            <div className="class-category">
              <h3 className="section-sub-title">사관학교 정규수업반</h3>
              <p className="section-sub-title-info">(수강료 4주기준 과목별 28만원)</p>
              <div className="class-schedule">
                <div className="class-schedule-item">
                  <div className="class-schedule-name">경찰사관 국어 정규반</div>
                  <div className="class-schedule-time">일요일 09:00~12:00</div>
                </div>
                <div className="class-schedule-item">
                  <div className="class-schedule-name">경찰사관 영어 정규반</div>
                  <div className="class-schedule-time">일요일 13:00~16:00</div>
                </div>
                <div className="class-schedule-item">
                  <div className="class-schedule-name">경찰사관 수학 정규반</div>
                  <div className="class-schedule-time">일요일 16:00~19:00</div>
                </div>
              </div>
            </div>

            {/* Clinic Classes */}
            <div className="class-category clinic">
              <h3 className="section-sub-title clinic">사관학교 클리닉반</h3>
              <p className="section-sub-title-info">(요일은 변동가능, 수강료: 4주기준 과목별 10만원)</p>
              <div className="class-schedule">
                <div className="class-schedule-item">
                  <div className="class-schedule-name">수학 클리닉: 모의평가+개별지도+개별 과제검사</div>
                  <div className="class-schedule-time">화요일 20:00~22:00</div>
                </div>
                <div className="class-schedule-item">
                  <div className="class-schedule-name">영어 클리닉: 모의평가+개별지도+개별 과제검사</div>
                  <div className="class-schedule-time">수요일 20:00~22:00</div>
                </div>
                <div className="class-schedule-item">
                  <div className="class-schedule-name">국어 클리닉 : 모의평가+개별지도+개별 과제검사</div>
                  <div className="class-schedule-time">목요일 20:00~22:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-summary">
            <div className="contact-item-simple">
              <MapPin className="contact-icon-simple" />
              <span>수업장소: 대치두각학원 S관</span>
            </div>
            <div className="contact-item-simple">
              <Phone className="contact-icon-simple" />
              <span>수업 관련 문의: 02-556-2700</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="schedule-container">
          <h2 className="section-title">
            <span className="highlight">대치두각학원 현장강의 특장점</span>
          </h2>

          {/* Feature Categories */}
          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-header">
                <Award className="card-icon" />
                <h3 className="feature-title">
                  마스터팀의 '경찰사관 결사대' 현장강의는 이렇게 다릅니다.
                </h3>
              </div>
              <div className="feature-content">
                <div className="feature-list">
                  <div className="feature-item vertical">
                    <div className="feature-image-container">
                      <img
                        src="/assets/offlineLecture/offline1.png"
                        alt="대치두각학원 현장강의 모습"
                        className="feature-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature-description">
                      <h4 className="feature-subtitle">현장강의 + 복습인강</h4>
                      <p className="feature-detail">
                        현장강의에 이어 복습인강까지 제공하여<br />
                        체계적인 학습관리가 가능합니다
                      </p>
                    </div>
                  </div>
                  <div className="feature-item vertical">
                    <div className="feature-image-container">
                      <img
                        src="/assets/offlineLecture/offline2.png"
                        alt="대치두각학원 현장강의 모습"
                        className="feature-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature-description">
                      <h4 className="feature-subtitle">전문 컨텐츠</h4>
                      <p className="feature-detail">
                        평가원과 경찰사관 기출을 아우르는<br />
                        최고의 전문 컨텐츠를 제공합니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-header">
                <Users className="card-icon" />
                <h3 className="feature-title">
                  특화된 학습관리 시스템
                </h3>
              </div>
              <div className="feature-content">
                <div className="feature-list">
                  <div className="feature-item">
                    검증된 대성마이맥 경찰, 사관 국영수 입강 강사진 <br/>(6년연속 대치동 수강생 수 1위)
                  </div>
                  <div className="feature-item">
                      전문적인 컨텐츠 <br/>(기출문제집, 자체교재, 자체 모의고사, 기타 대성Contents)
                      </div>
                  <div className="feature-item">대면 Q&A + 철저한 과제 관리</div>
                  <div className="feature-item">
                      사관학교 합격자 출신의 전문 조교진
                  </div>
                  <div className="feature-item">체계적인 주간 과제점검</div>
                  <div className="feature-item">사관학교 입시에 정통한 강사진의 컨설팅</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <a
            href="https://dugak.net/TimeTable?tid=41&mid=256"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            대치두각학원 수업 등록 바로가기
          </a>

          <p className="cta-description">
            <span className="mobile-only">
              7년 연속 대치동 1위의 노하우가 집약된<br />
              현장 강의를 지금 바로 신청하세요.<br />
              전문 강사진과 함께하는 체계적인 학습으로<br />
              합격의 꿈을 이루어보세요.
            </span>
            <span className="desktop-only">
              7년 연속 대치동 1위의 노하우가 집약된 현장 강의를 지금 바로 신청하세요.<br/>
              전문 강사진과 함께하는 체계적인 학습으로 합격의 꿈을 이루어보세요.
            </span>
          </p>

          <div className="cta-contact">
            <div className="cta-contact-info">
              <Phone className="contact-icon" />
              <span className="contact-text">
                <span className="mobile-only">
                  수업문의<br />
                  02-556-2700
                </span>
                <span className="desktop-only">
                  수업문의: 02-556-2700
                </span>
              </span>
            </div>
            <p className="cta-note">
              궁금한 점이 있으시면 언제든지 전화 문의해주세요
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offline;