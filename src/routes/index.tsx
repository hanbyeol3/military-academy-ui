import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Teachers from '../pages/Teachers';
import Online from '../pages/Online';
import Offline from '../pages/Offline';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -100,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.5,
};

// Wrapper component for page transitions
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/teachers" 
          element={
            <PageWrapper>
              <Teachers />
            </PageWrapper>
          } 
        />
        <Route 
          path="/online" 
          element={
            <PageWrapper>
              <Online />
            </PageWrapper>
          } 
        />
        <Route 
          path="/offline" 
          element={
            <PageWrapper>
              <Offline />
            </PageWrapper>
          } 
        />
        {/* Fallback route for 404 */}
        <Route 
          path="*" 
          element={
            <PageWrapper>
              <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                  <p className="text-xl text-text-secondary mb-8">페이지를 찾을 수 없습니다</p>
                  <a 
                    href="/" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-mint to-mint-light text-bg-primary font-semibold rounded-lg hover:glow transition-all duration-300"
                  >
                    홈으로 돌아가기
                  </a>
                </div>
              </div>
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;