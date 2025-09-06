import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Users, Award, BookOpen } from 'lucide-react';
import Hero from '../components/common/Hero';
import SectionTitle from '../components/common/SectionTitle';
import GradientCard from '../components/ui/GradientCard';
import Button from '../components/ui/Button';

const Offline: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero className="min-h-[70vh]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-center">
              <span className="text-white">대성마이맥 경찰사관 강사진의</span><br />
              <span className="text-mint">대치두각학원 현장강의 안내</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                대성마이맥 경찰사관 강사진의 현장강의는,<br />
                7년 연속 대치동 수강생 수 1위를 자랑합니다
              </h2>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                직접 만나는 현장 강의의 생생함과 체계적인 학습 관리 시스템
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Hero>

      {/* Team Image Section */}
      <section className="py-20 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <img
              src="/assets/teacher/teamImage.jpg"
              alt="대성마이맥 경찰사관 강사진 팀"
              className="max-w-2xl mx-auto rounded-xl glow shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            align="center" 
            size="lg" 
            className="mb-16"
          >
            대치두각학원 현장강의 수업 안내
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Regular Classes */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GradientCard className="h-full" glow={true}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="w-8 h-8 text-mint" />
                    <h3 className="text-2xl font-bold gradient-text">
                      사관학교 정규수업반
                    </h3>
                  </div>
                  
                  <div className="bg-mint bg-opacity-10 rounded-lg p-6">
                    <p className="text-lg font-semibold text-mint mb-4">
                      수강료: 4주기준 과목별 28만원
                    </p>
                    <div className="space-y-4 text-text-primary">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">매주 일요일 09:00~12:00</p>
                          <p className="text-text-secondary">경찰사관 국어 정규반</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">매주 일요일 13:00~16:00</p>
                          <p className="text-text-secondary">경찰사관 영어 정규반</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">매주 일요일 16:00~19:00</p>
                          <p className="text-text-secondary">경찰사관 수학 정규반</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </motion.div>

            {/* Clinic Classes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GradientCard className="h-full" glow={true}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="w-8 h-8 text-purple" />
                    <h3 className="text-2xl font-bold text-purple">
                      사관학교 클리닉반
                    </h3>
                  </div>
                  
                  <div className="bg-purple bg-opacity-10 rounded-lg p-6">
                    <p className="text-lg font-semibold text-purple mb-4">
                      수강료: 4주기준 과목별 10만원<br />
                      <span className="text-sm text-text-secondary">(요일은 변동가능)</span>
                    </p>
                    <div className="space-y-4 text-text-primary">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-purple mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">매주 화요일 20:00~22:00</p>
                          <p className="text-text-secondary">수학 클리닉: 모의평가+개별지도+개별 과제검사</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-purple mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">매주 수요일 20:00~22:00</p>
                          <p className="text-text-secondary">영어 클리닉: 모의평가+개별지도+개별 과제검사</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-purple mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">매주 목요일 20:00~22:00</p>
                          <p className="text-text-secondary">국어 클리닉: 모의평가+개별지도+개별 과제검사</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-mint" />
                  <span className="text-text-primary">수업장소: 대치두각학원 S관</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-mint" />
                  <span className="text-text-primary">문의: 02-556-2700</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            align="center" 
            size="lg" 
            className="mb-16"
          >
            대치두각학원 현장강의 특장점
          </SectionTitle>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <img
              src="/OfflineLecture/offline_image1.jpg"
              alt="대치두각학원 현장강의 모습"
              className="max-w-4xl mx-auto rounded-xl shadow-2xl shadow-mint/10"
              loading="lazy"
            />
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GradientCard glow={true}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-mint" />
                    <h3 className="text-2xl font-bold gradient-text">
                      대치두각학원 현장강의 특장점
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-primary leading-relaxed">
                    <p>마스터팀의 '경찰사관 결사대' 현장강의는 이렇게 다릅니다.</p>
                    <p>현장강의에 이어 복습인강까지 제공하여 체계적 학습관리 가능</p>
                    <p>평가원과 경찰사관 기출을 아우르는 최고의 전문 컨텐츠</p>
                  </div>
                </div>
              </GradientCard>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GradientCard glow={true}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-purple" />
                    <h3 className="text-2xl font-bold text-purple">
                      특화된 학습관리 시스템
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-primary leading-relaxed">
                    <p>검증된 대성마이맥 경찰, 사관 국영수 입강 강사진 (6년연속 대치동 수강생 수 1위)</p>
                    <p>사관학교 합격자 출신의 전문 조교진</p>
                    <p>대면 Q&A + 철저한 과제 관리</p>
                    <p>전문적인 컨텐츠 (기출문제집, 자체교재, 자체 모의고사, 기타 대성Contents)</p>
                    <p>체계적인 주간 과제점검</p>
                    <p>사관학교 입시에 정통한 강사진의 컨설팅</p>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          </div>

          {/* Additional Images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="rounded-xl overflow-hidden shadow-xl shadow-mint/10">
              <img
                src="/assets/img_1.jpg"
                alt="대치두각학원 강의실"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl shadow-mint/10">
              <img
                src="/assets/img_2.jpg"
                alt="대치두각학원 학습 환경"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              align="center" 
              size="lg" 
              className="mb-16"
            >
              대치두각학원 수업 등록 바로가기
            </SectionTitle>

            <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              7년 연속 대치동 1위의 노하우가 집약된 현장 강의를 지금 바로 신청하세요. 
              전문 강사진과 함께하는 체계적인 학습으로 합격의 꿈을 이루어보세요.
            </p>

            <Button
              href="https://dugak.net/TimeTable?tid=41&mid=256"
              external={true}
              size="xl"
              glow={true}
              pulse={true}
              className="min-w-[300px] mb-8"
            >
              현장 강의 수강 등록하기
            </Button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-xl p-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-4 text-lg">
                <Phone className="w-6 h-6 text-mint" />
                <span className="text-text-primary">수업 문의:</span>
                <span className="text-mint font-bold text-xl">02-556-2700</span>
              </div>
              <p className="text-text-secondary mt-4">
                궁금한 점이 있으시면 언제든지 전화 문의해주세요
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offline;