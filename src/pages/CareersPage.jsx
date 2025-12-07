import React from 'react';
import CanvasContainer from '../components/CanvasContainer';
import Careers from '../components/Careers';
import { Link } from 'react-router-dom';

function CareersPage() {
  return (
    <>
      <CanvasContainer />
      <div className="pt-24 px-6 text-center">
        <Link 
          to="/" 
          className="inline-block px-6 py-2 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all rounded text-sm font-bold"
        >
          ← BACK TO HOME
        </Link>
      </div>
      <Careers />
      <footer className="text-center py-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Daat Studios. All rights reserved.
      </footer>
    </>
  );
}

export default CareersPage;
