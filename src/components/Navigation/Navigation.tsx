import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <div className="logo-text">
            <span className="logo-main">MASTER</span>
            <span className="logo-sub">팀</span>
          </div>
        </Link>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-text">홈</span>
            <span className="nav-indicator"></span>
          </Link>
          
          <Link 
            to="/instructors" 
            className={`nav-link ${isActive('/instructors') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-text">경찰사관 강사진 소개</span>
            <span className="nav-indicator"></span>
          </Link>
          
          <Link 
            to="/online-lecture" 
            className={`nav-link ${isActive('/online-lecture') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-text">대성마이맥 인강 안내</span>
            <span className="nav-indicator"></span>
          </Link>
          
          <Link 
            to="/offline-lecture" 
            className={`nav-link ${isActive('/offline-lecture') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-text">대치동 현장 강의 안내</span>
            <span className="nav-indicator"></span>
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;