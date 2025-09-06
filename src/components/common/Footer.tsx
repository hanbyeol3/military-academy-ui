import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-bg-secondary to-bg-primary border-t border-mint border-opacity-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <img 
              src="/assets/MIMAC_Logo.png"
              alt="MIMAC Logo" 
              className="h-12 w-auto mx-auto md:mx-0 mb-4"
              loading="lazy"
            />
            <p className="text-text-secondary text-sm leading-relaxed">
              경찰사관 인터넷강의 No.1<br />
              대성마이맥 경찰사관 MASTER팀
            </p>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              전문성과 체계성
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              7년 연속 대치동 수강생 수 1위를 자랑하는<br />
              검증된 전문 강사진과 함께합니다
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              문의사항
            </h3>
            <div className="text-text-secondary text-sm space-y-2">
              <p>대치두각학원 현장강의</p>
              <p className="text-mint font-medium">02-556-2700</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-mint via-purple to-transparent opacity-30"></div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-text-secondary text-sm">
            © 2024 대성마이맥 경찰사관 MASTER팀. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a 
              href="https://www.mimacstudy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-mint transition-colors text-sm"
            >
              대성마이맥
            </a>
            <a 
              href="https://dugak.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-mint transition-colors text-sm"
            >
              대치두각학원
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-mint opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;