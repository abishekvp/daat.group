import { motion } from 'framer-motion';

const Partner = () => {
  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-2xl border border-brand-neon/20 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-brand-neon/10 blur-[100px] rounded-full pointer-events-none"></div>

          <h3 className="text-brand-purple tracking-[0.2em] font-bold text-sm uppercase mb-4">
            Premium Partner
          </h3>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Official Partner of <span className="text-brand-neon">dosatodollars</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Proud to be a premium partner of <a href="https://dosatodollars.com" className="text-brand-neon hover:underline font-bold">dosatodollars</a>, 
            a leading digital transformation company in the USA, delivering world-class solutions together.
          </p>

          <a 
            href="https://dosatodollars.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded hover:bg-brand-neon transition-colors"
          >
            VISIT PARTNER
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
