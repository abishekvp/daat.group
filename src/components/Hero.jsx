import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <section className="relative w-full h-screen flex items-center justify-center px-6">
      <div className="text-center z-10 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Transform Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">
            Digital Vision
          </span> <br />
          Into Reality
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Premium web & app development services with 6+ years of excellence. 
          Serving 70+ clients across India & USA.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="#contact" onClick={(e) => handleSectionClick(e, '#contact')} className="px-8 py-3 bg-brand-neon text-black font-bold rounded hover:bg-white transition-colors">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
