import React from 'react';
import CanvasContainer from '../components/CanvasContainer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Partner from '../components/Partner';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <CanvasContainer />
      <Hero />
      <Services />
      <About />
      <Partner />
      <Testimonials />
      <Contact />
      <footer className="text-center py-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Daat Studios. All rights reserved.
      </footer>
    </>
  );
}

export default Home;
