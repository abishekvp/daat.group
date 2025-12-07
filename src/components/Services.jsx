import { motion } from 'framer-motion';

const services = [
  {
    title: "Website Development",
    description: "Custom, responsive websites that drive results. From landing pages to complex web applications.",
    details: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "Progressive Web Apps"],
    id: "web"
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    details: ["iOS & Android Apps", "Cross-Platform Solutions", "App Maintenance", "UI/UX Design"],
    id: "app"
  },
  {
    title: "Weekend Coders",
    description: "Weekend coding classes for students by Daat Studios. Learn from industry experts.",
    details: ["Full Stack Development", "Mobile App Development", "Python Programming", "Industry Mentorship"],
    id: "education"
  }
];

const Services = () => {
  return (
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
            <a href={`#${service.id}`} className="text-sm font-bold text-white border-b border-brand-neon pb-1 hover:text-brand-neon transition-colors">
              LEARN MORE
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
