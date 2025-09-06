import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Logo Section */}
                    <div className="footer-logo-section">
                        <img
                            src="/assets/main/main_logo.png"
                            alt="MIMAC Logo"
                            className="footer-logo"
                            loading="lazy"
                        />
                        <p className="footer-logo-text">
                            경찰사관 인터넷강의 No.1<br />
                            대성마이맥 경찰사관 MASTER팀
                        </p>
                    </div>

                    {/* Description Section */}
                    <div className="footer-description">
                        <h3 className="footer-section-title">
                            전문성과 체계성
                        </h3>
                        <p className="footer-section-text">
                            7년 연속 대치동 수강생 수 1위를 자랑하는<br />
                            검증된 전문 강사진과 함께합니다
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-contact">
                        <h3 className="footer-section-title">
                            문의사항
                        </h3>
                        <div className="footer-contact-details">
                            <p>대치두각학원 현장강의</p>
                            <p className="footer-phone">02-556-2700</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Copyright Section */}
                <div className="footer-copyright">
                    <p className="footer-copyright-text">
                        © 대성마이맥 경찰사관 MASTER팀. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="footer-decoration footer-decoration-1"></div>
            <div className="footer-decoration footer-decoration-2"></div>
        </footer>
    );
};

export default Footer;