import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes';

// Styles
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-bg-wrapper">
          <div className="app-bg-element app-bg-element-1"></div>
          <div className="app-bg-element app-bg-element-2"></div>
          <div className="app-bg-element app-bg-element-3"></div>
        </div>

        <div className="app-content">
          <ScrollToTop />
          <Header />
          
          <main className="main-content">
            <AppRoutes />
          </main>

          <Footer />
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-to-top"
          aria-label="맨 위로 스크롤"
        >
          <svg 
            className="scroll-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </Router>
  );
};

export default App;