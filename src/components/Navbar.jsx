import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle scrolling to section after navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Navigate to home first
      navigate('/');
      // Then scroll after a short delay
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      // Already on home, just scroll
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white tracking-widest hover:opacity-80 transition-opacity">
        DAAT <span className="text-brand-neon">STUDIOS</span>
      </Link>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
        <a href="#services" onClick={(e) => handleSectionClick(e, '#services')} className="hover:text-brand-neon transition-colors">WHAT WE DO</a>
        <a href="#about" onClick={(e) => handleSectionClick(e, '#about')} className="hover:text-brand-neon transition-colors">WHO WE ARE</a>
        <a href="#reviews" onClick={(e) => handleSectionClick(e, '#reviews')} className="hover:text-brand-neon transition-colors">REVIEWS</a>
        <Link to="/education" className="hover:text-brand-neon transition-colors">EDUCATION</Link>
        <Link to="/careers" className="hover:text-brand-neon transition-colors">CAREERS</Link>
        <a href="#contact" onClick={(e) => handleSectionClick(e, '#contact')} className="px-4 py-2 border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black transition-all rounded-sm">
          START PROJECT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
