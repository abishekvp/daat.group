import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CanvasContainer from '../components/CanvasContainer';
import { Link } from 'react-router-dom';

function EducationPage() {
  const [showCallbackForm, setShowCallbackForm] = useState(false);

  return (
    <>
      <CanvasContainer />
      <section className="min-h-screen py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Weekend <span className="text-brand-neon">Coders</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Nurturing the next generation of developers through hands-on weekend coding classes
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/" 
                className="inline-block px-6 py-2 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all rounded text-sm font-bold"
              >
                ← BACK TO HOME
              </Link>
              <button 
                onClick={() => setShowCallbackForm(true)}
                className="px-6 py-2 bg-brand-neon text-black hover:bg-white transition-all rounded text-sm font-bold"
              >
                REQUEST CALLBACK
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-4">About the Program</h2>
              <p className="text-gray-300 mb-4">
                Weekend Coders is our initiative to nurture the next generation of developers. Learn practical coding skills from industry professionals in a supportive, hands-on environment.
              </p>
              <p className="text-gray-300">
                Our program is designed for students who want to learn real-world programming skills while balancing their regular studies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-brand-neon rounded-full mr-3 mt-2"></span>
                  <span>Industry experts as instructors</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-brand-neon rounded-full mr-3 mt-2"></span>
                  <span>Hands-on project-based learning</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-brand-neon rounded-full mr-3 mt-2"></span>
                  <span>Small batch sizes for personalized attention</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-brand-neon rounded-full mr-3 mt-2"></span>
                  <span>Flexible weekend schedule</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              What You'll <span className="text-brand-neon">Learn</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Full Stack Development",
                  description: "Master both frontend and backend development with modern frameworks and best practices."
                },
                {
                  title: "Mobile App Development",
                  description: "Build real mobile applications for iOS and Android using industry-standard tools."
                },
                {
                  title: "Python Programming",
                  description: "Learn Python from basics to advanced topics including data science and automation."
                },
                {
                  title: "Industry Mentorship",
                  description: "Get guidance from experienced developers working on real-world projects."
                }
              ].map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="glass p-6 rounded-xl hover:border-brand-neon/50 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-sm text-gray-400">{course.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Callback Form Modal */}
      <AnimatePresence>
        {showCallbackForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallbackForm(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass border border-brand-neon/30 rounded-2xl p-8 max-w-md w-full relative"
              >
                <button
                  onClick={() => setShowCallbackForm(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-brand-neon/20 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="text-2xl font-bold mb-2 text-white pr-8">Request Callback</h2>
                <p className="text-sm text-gray-400 mb-6">
                  Interested in Weekend Coders? Fill out this form and we'll call you back!
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Parent/Guardian Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Student Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="Student's name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time to Call</label>
                    <select className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors">
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  <button 
                    type="button"
                    className="w-full px-6 py-3 bg-brand-neon text-black font-bold rounded hover:bg-white transition-colors"
                  >
                    REQUEST CALLBACK
                  </button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <footer className="text-center py-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Daat Studios. All rights reserved.
      </footer>
    </>
  );
}

export default EducationPage;
