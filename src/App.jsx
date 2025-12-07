import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CareersPage from './pages/CareersPage';
import ReviewsPage from './pages/ReviewsPage';
import EducationPage from './pages/EducationPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="relative w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
