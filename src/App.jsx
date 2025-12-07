import React from 'react';
import CanvasContainer from './components/CanvasContainer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <main className="relative w-full">
      <CanvasContainer />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <footer className="text-center py-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Daat Studios. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
