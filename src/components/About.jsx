import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Building Digital <br />
            <span className="text-brand-purple">Excellence</span> <br />
            Since 2019
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 mb-6 text-lg"
          >
            At Daat Studios, we don't just write code; we craft digital experiences. 
            Our mission is to empower businesses through innovative technology solutions 
            and quality education.
          </motion.p>
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h4 className="text-xl font-bold text-brand-neon mb-2">Our Mission</h4>
              <p className="text-sm text-gray-300">Empowering businesses and individuals through innovative technology solutions.</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h4 className="text-xl font-bold text-brand-neon mb-2">Our Promise</h4>
              <p className="text-sm text-gray-300">Quality, transparency, and long-term partnerships that drive success.</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] glass rounded-2xl flex items-center justify-center border-brand-neon/20">
             {/* Placeholder for 3D or Image */}
             <div className="text-center p-8">
                <p className="text-6xl font-bold text-white mb-2">70+</p>
                <p className="text-brand-purple uppercase tracking-widest text-sm">Happy Clients</p>
                <div className="w-full h-px bg-white/10 my-8"></div>
                <p className="text-6xl font-bold text-white mb-2">6+</p>
                <p className="text-brand-neon uppercase tracking-widest text-sm">Years Experience</p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default About;
