import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

const services = [
  {
    title: "Website Development",
    description: "Custom, responsive websites that drive results. From landing pages to complex web applications.",
    details: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "Progressive Web Apps"],
    id: "web",
    fullDescription: "Our website development services combine cutting-edge technology with stunning design to create digital experiences that convert visitors into customers.",
    features: [
      {
        name: "Custom Web Applications",
        desc: "Tailored solutions built from the ground up to match your unique business requirements and workflows."
      },
      {
        name: "E-commerce Solutions",
        desc: "Powerful online stores with secure payment integration, inventory management, and seamless checkout experiences."
      },
      {
        name: "CMS Development",
        desc: "User-friendly content management systems that give you complete control over your website content."
      },
      {
        name: "Progressive Web Apps",
        desc: "Fast, reliable, and engaging web applications that work offline and feel like native mobile apps."
      }
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress", "Shopify"]
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    details: ["iOS & Android Apps", "Cross-Platform Solutions", "App Maintenance", "UI/UX Design"],
    id: "app",
    fullDescription: "We build mobile applications that users love, combining intuitive design with powerful functionality to create apps that stand out in the App Store and Google Play.",
    features: [
      {
        name: "iOS & Android Apps",
        desc: "Native applications optimized for each platform, delivering the best performance and user experience."
      },
      {
        name: "Cross-Platform Solutions",
        desc: "Build once, deploy everywhere with React Native and Flutter for faster time-to-market."
      },
      {
        name: "App Maintenance",
        desc: "Ongoing support, updates, and optimization to keep your app running smoothly and securely."
      },
      {
        name: "UI/UX Design",
        desc: "Beautiful, intuitive interfaces designed with your users in mind, backed by research and testing."
      }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"]
  },
  {
    title: "Weekend Coders",
    description: "Weekend coding classes for students by Daat Studios. Learn from industry experts.",
    details: ["Full Stack Development", "Mobile App Development", "Python Programming", "Industry Mentorship"],
    id: "education",
    fullDescription: "Weekend Coders is our initiative to nurture the next generation of developers. Learn practical coding skills from industry professionals in a supportive, hands-on environment.",
    features: [
      {
        name: "Full Stack Development",
        desc: "Master both frontend and backend development with modern frameworks and best practices."
      },
      {
        name: "Mobile App Development",
        desc: "Build real mobile applications for iOS and Android using industry-standard tools and frameworks."
      },
      {
        name: "Python Programming",
        desc: "Learn Python from basics to advanced topics including data science, automation, and web development."
      },
      {
        name: "Industry Mentorship",
        desc: "Get guidance from experienced developers working on real-world projects at leading companies."
      }
    ],
    technologies: ["JavaScript", "Python", "React", "Node.js", "Git", "Databases"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          What We <span className="text-brand-neon">Do Best</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-xl hover:border-brand-neon/50 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-neon transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.details.map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setSelectedService(service)}
                className="text-sm font-bold text-white border-b border-brand-neon pb-1 hover:text-brand-neon transition-colors"
              >
                LEARN MORE
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={selectedService !== null} 
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        {selectedService && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Service Details */}
            <div className="space-y-4 overflow-y-auto max-h-[calc(85vh-120px)]">
              <p className="text-sm leading-relaxed">{selectedService.fullDescription}</p>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-3">What We Offer</h3>
                <div className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="glass p-3 rounded-lg">
                      <h4 className="font-bold text-brand-neon mb-1 text-xs">{feature.name}</h4>
                      <p className="text-[11px] text-gray-400 leading-tight">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Query Form */}
            <div className="glass p-5 rounded-xl border border-brand-purple/30 overflow-y-auto max-h-[calc(85vh-120px)]">
              <h3 className="text-lg font-bold text-white mb-3">Get a Quote</h3>
              <form className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded p-2 text-white text-xs focus:border-brand-neon focus:outline-none transition-colors" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-white/10 rounded p-2 text-white text-xs focus:border-brand-neon focus:outline-none transition-colors" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-black/50 border border-white/10 rounded p-2 text-white text-xs focus:border-brand-neon focus:outline-none transition-colors" 
                    placeholder="+1 234 567 8900" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Project Details</label>
                  <textarea 
                    rows="3" 
                    className="w-full bg-black/50 border border-white/10 rounded p-2 text-white text-xs focus:border-brand-neon focus:outline-none transition-colors resize-none" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full px-4 py-2.5 bg-brand-neon text-black font-bold text-sm rounded hover:bg-white transition-colors"
                >
                  {selectedService.id === 'education' ? 'APPLY NOW' : 'SEND INQUIRY'}
                </button>
              </form>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Services;
