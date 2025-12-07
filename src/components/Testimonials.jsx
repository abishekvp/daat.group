import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const reviews = [
  {
    text: "Daat Studios transformed our online presence completely. Their team is professional, creative, and always delivers on time.",
    author: "Client A"
  },
  {
    text: "The mobile app they developed exceeded our expectations. Great communication throughout the project!",
    author: "Client B"
  },
  {
    text: "My son learned so much in the Weekend Coders program. The instructors are knowledgeable and patient.",
    author: "Parent"
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Trusted by 70+ Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="glass p-8 rounded-xl text-left"
                >
                    <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-brand-purple/50 rounded-full flex items-center justify-center font-bold mr-3">
                            {review.author[0]}
                        </div>
                        <p className="font-bold text-white">{review.author}</p>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Link 
            to="/reviews"
            className="inline-block px-8 py-3 border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black transition-all rounded font-bold"
          >
            VIEW MORE REVIEWS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
