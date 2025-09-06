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
            <span className="mobile-only">대성마이맥 경찰사관<br />현장강의 강사진은,<br /><span className="highlight">단언컨대, 현장강의<br />No.1입니다</span></span>
            <span className="desktop-only">대성마이맥 경찰사관 현장강의 강사진은,<br /><span className="highlight">단언컨대, 현장강의 No.1입니다</span></span>
          </h1>

          <h2 className="offline-subtitle">
            대성마이맥 경찰사관 강사진의 현장강의는,<br />
            7년 연속 대치동 수강생 수 1위를 자랑합니다
          </h2>
          <p className="offline-description">
            직접 만나는 현장 강의의 생생함과 체계적인 학습 관리 시스템
          </p>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="team-image-section">
        <div className="team-image-container">
          <img
            src="/assets/teacher/team_image.jpg"
            alt="대성마이맥 경찰사관 강사진 팀"
            className="team-image"
            loading="lazy"
          />
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="schedule-container">
          <h2 className="section-title">
            대치두각학원 현장강의 수업 안내
          </h2>
          <p className="schedule-subtitle">
            체계적인 학습 관리와 전문 강사진의 현장 지도로 합격의 꿈을 실현하세요
          </p>

          <div className="schedule-grid">
            {/* Regular Classes */}
            <div className="schedule-card">
              <div className="card-header">
                <Users className="card-icon" />
                <h3 className="card-title">
                  사관학교 정규수업반
                </h3>
              </div>
              
              <div className="price-info">
                <p className="price-text">
                  수강료: 4주기준 과목별 28만원
                </p>
                <div>
                  <div className="schedule-item">
                    <Clock className="schedule-icon" />
                    <div>
                      <p className="schedule-time">매주 일요일 09:00~12:00</p>
                      <p className="schedule-desc">경찰사관 국어 정규반</p>
                    </div>
                  </div>
                  <div className="schedule-item">
                    <Clock className="schedule-icon" />
                    <div>
                      <p className="schedule-time">매주 일요일 13:00~16:00</p>
                      <p className="schedule-desc">경찰사관 영어 정규반</p>
                    </div>
                  </div>
                  <div className="schedule-item">
                    <Clock className="schedule-icon" />
                    <div>
                      <p className="schedule-time">매주 일요일 16:00~19:00</p>
                      <p className="schedule-desc">경찰사관 수학 정규반</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Classes */}
            <div className="schedule-card clinic">
              <div className="card-header">
                <BookOpen className="card-icon purple" />
                <h3 className="card-title purple">
                  사관학교 클리닉반
                </h3>
              </div>
              
              <div className="price-info clinic">
                <p className="price-text clinic">
                  수강료: 4주기준 과목별 10만원<br />
                  <span className="schedule-desc">(요일은 변동가능)</span>
                </p>
                <div>
                  <div className="schedule-item">
                    <Clock className="schedule-icon purple" />
                    <div>
                      <p className="schedule-time">매주 화요일 20:00~22:00</p>
                      <p className="schedule-desc">수학 클리닉: 모의평가+개별지도+개별 과제검사</p>
                    </div>
                  </div>
                  <div className="schedule-item">
                    <Clock className="schedule-icon purple" />
                    <div>
                      <p className="schedule-time">매주 수요일 20:00~22:00</p>
                      <p className="schedule-desc">영어 클리닉: 모의평가+개별지도+개별 과제검사</p>
                    </div>
                  </div>
                  <div className="schedule-item">
                    <Clock className="schedule-icon purple" />
                    <div>
                      <p className="schedule-time">매주 목요일 20:00~22:00</p>
                      <p className="schedule-desc">국어 클리닉: 모의평가+개별지도+개별 과제검사</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span className="contact-text">수업장소: 대치두각학원 S관</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span className="contact-text">문의: 02-556-2700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="schedule-container">
          <h2 className="section-title">
            대치두각학원 현장강의 특장점
          </h2>

          {/* Feature Cards */}
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
                <img
                  src="/assets/offlineLecture/offline_image.jpg"
                  alt="대치두각학원 현장강의 모습"
                  className="feature-image"
                  loading="lazy"
                />
                <img
                  src="/assets/offlineLecture/online.png"
                  alt="대치두각학원 현장강의 모습"
                  className="feature-image"
                  loading="lazy"
                />
                <p>현장강의에 이어 복습인강까지 제공하여 체계적 학습관리 가능</p>
                <img
                  src="/assets/offlineLecture/book.png"
                  alt="대치두각학원 현장강의 모습"
                  className="feature-image"
                  loading="lazy"
                />
                <p>평가원과 경찰사관 기출을 아우르는 최고의 전문 컨텐츠</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-header">
                <Users className="card-icon purple" />
                <h3 className="feature-title purple">
                  특화된 학습관리 시스템
                </h3>
              </div>
              <div className="feature-content">
                <p>검증된 대성마이맥 경찰, 사관 국영수 입강 강사진 (6년연속 대치동 수강생 수 1위)</p>
                <p>사관학교 합격자 출신의 전문 조교진</p>
                <p>대면 Q&A + 철저한 과제 관리</p>
                <p>전문적인 컨텐츠 (기출문제집, 자체교재, 자체 모의고사, 기타 대성Contents)</p>
                <p>체계적인 주간 과제점검</p>
                <p>사관학교 입시에 정통한 강사진의 컨설팅</p>
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
            7년 연속 대치동 1위의 노하우가 집약된 현장 강의를 지금 바로 신청하세요. 
            전문 강사진과 함께하는 체계적인 학습으로 합격의 꿈을 이루어보세요.
          </p>

          <div className="cta-contact">
            <div className="cta-contact-info">
              <Phone className="contact-icon" />
              <span className="contact-text">수업 문의:</span>
              <span className="cta-phone">02-556-2700</span>
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