import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Teachers from '../pages/Teachers';
import Online from '../pages/Online';
import Offline from '../pages/Offline';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/online" element={<Online />} />
      <Route path="/offline" element={<Offline />} />
      {/* Fallback route for 404 */}
      <Route 
        path="*" 
        element={
          <div className="error-page">
            <div className="error-content">
              <h1 className="error-title">404</h1>
              <p className="error-description">페이지를 찾을 수 없습니다</p>
              <Link to="/" className="error-button">
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;