import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CanvasContainer from '../components/CanvasContainer';
import { Link } from 'react-router-dom';

const allReviews = [
  {
    text: "Daat Studios transformed our online presence completely. Their team is professional, creative, and always delivers on time.",
    author: "Rajesh Kumar",
    company: "TechStart India",
    rating: 5
  },
  {
    text: "The mobile app they developed exceeded our expectations. Great communication throughout the project!",
    author: "Sarah Johnson",
    company: "HealthCare Plus",
    rating: 5
  },
  {
    text: "My son learned so much in the Weekend Coders program. The instructors are knowledgeable and patient.",
    author: "Priya Sharma",
    company: "Parent",
    rating: 5
  },
  {
    text: "Outstanding work on our e-commerce platform. Sales increased by 40% after the redesign!",
    author: "Michael Chen",
    company: "Fashion Hub",
    rating: 5
  },
  {
    text: "Best development team we've worked with. They understood our vision perfectly.",
    author: "Amit Patel",
    company: "StartupXYZ",
    rating: 5
  },
  {
    text: "The progressive web app they built is fast, reliable, and our users love it.",
    author: "Jennifer Lee",
    company: "FoodDelivery Co",
    rating: 5
  },
  {
    text: "Excellent UI/UX design work. Our app now has a 4.8 star rating on the App Store!",
    author: "David Williams",
    company: "Fitness Pro",
    rating: 5
  },
  {
    text: "Professional, responsive, and delivered ahead of schedule. Highly recommend!",
    author: "Neha Gupta",
    company: "EduTech Solutions",
    rating: 5
  },
  {
    text: "Their Weekend Coders program gave my daughter the confidence to pursue computer science.",
    author: "Robert Martinez",
    company: "Parent",
    rating: 5
  }
];

function ReviewsPage() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(5);

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
              Client <span className="text-brand-neon">Reviews</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              See what our 70+ clients have to say about working with Daat Studios
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/" 
                className="inline-block px-6 py-2 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all rounded text-sm font-bold"
              >
                ← BACK TO HOME
              </Link>
              <button 
                onClick={() => setShowReviewForm(true)}
                className="px-6 py-2 bg-brand-neon text-black hover:bg-white transition-all rounded text-sm font-bold"
              >
                WRITE A REVIEW
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-brand-neon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-purple/50 rounded-full flex items-center justify-center font-bold mr-3 text-sm">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{review.author}</p>
                    <p className="text-xs text-gray-500">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {showReviewForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReviewForm(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass border border-brand-neon/30 rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-brand-neon/20 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="text-3xl font-bold mb-6 text-white pr-8">
                  Write a Review
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Side - Basic Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Company / Role</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                        placeholder="Your Company or Role" 
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
                  </div>

                  {/* Right Side - Rating, Review & Submit */}
                  <div className="space-y-4 flex flex-col">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-3">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="transition-transform hover:scale-110"
                          >
                            <svg 
                              className={`w-8 h-8 ${star <= rating ? 'text-brand-neon' : 'text-gray-600'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Review</label>
                      <textarea 
                        rows="8" 
                        className="w-full h-[calc(100%-2rem)] bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors resize-none" 
                        placeholder="Tell us about your experience working with Daat Studios..."
                      ></textarea>
                    </div>

                    <button 
                      type="button"
                      className="w-full px-6 py-3 bg-brand-neon text-black font-bold rounded hover:bg-white transition-colors"
                    >
                      SUBMIT REVIEW
                    </button>
                  </div>
                </div>
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

export default ReviewsPage;
