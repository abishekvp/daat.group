import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white tracking-widest">
        DAAT <span className="text-brand-neon">STUDIOS</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
        <a href="#services" className="hover:text-brand-neon transition-colors">WHAT WE DO</a>
        <a href="#about" className="hover:text-brand-neon transition-colors">WHO WE ARE</a>
        <a href="#reviews" className="hover:text-brand-neon transition-colors">REVIEWS</a>
        <a href="#contact" className="px-4 py-2 border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black transition-all rounded-sm">
          START PROJECT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
