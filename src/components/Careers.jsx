import { motion } from 'framer-motion';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote / India",
    experience: "2-4 years",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    description: "We're looking for a talented Full Stack Developer to join our team and work on exciting client projects."
  },
  {
    id: 2,
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Remote / India",
    experience: "3-5 years",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description: "Join us to build cutting-edge mobile applications for clients across India and USA."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote / India",
    experience: "2-3 years",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    description: "Create stunning user experiences and interfaces for web and mobile applications."
  },
  {
    id: 4,
    title: "Coding Instructor",
    type: "Part-time",
    location: "Weekend Classes",
    experience: "1-2 years",
    skills: ["Teaching", "JavaScript", "Python", "Communication"],
    description: "Teach weekend coding classes to students and share your passion for programming."
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section id="careers" className="min-h-screen py-20 px-6 bg-black/20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-brand-neon">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover:border-brand-neon/50 transition-all group cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-1.5"></span>
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-1.5"></span>
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-1.5"></span>
                      {job.experience}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-brand-neon/10 border border-brand-neon/30 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="text-sm font-bold text-white border-b border-brand-neon pb-1 hover:text-brand-neon transition-colors">
                APPLY NOW
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="glass border border-brand-neon/30 rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-hidden relative z-10"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-brand-neon/20 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-2 text-white pr-8">{selectedJob.title}</h2>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-6">
                <span>{selectedJob.type}</span>
                <span>•</span>
                <span>{selectedJob.location}</span>
                <span>•</span>
                <span>{selectedJob.experience}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Side - Basic Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="Your full name" 
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
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Portfolio / LinkedIn</label>
                    <input 
                      type="url" 
                      className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors" 
                      placeholder="https://..." 
                    />
                  </div>
                </div>

                {/* Right Side - Cover Letter & Submit */}
                <div className="space-y-4 flex flex-col">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Cover Letter</label>
                    <textarea 
                      rows="10" 
                      className="w-full h-[calc(100%-2rem)] bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors resize-none" 
                      placeholder="Tell us why you'd be a great fit for this role..."
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="w-full px-6 py-3 bg-brand-neon text-black font-bold rounded hover:bg-white transition-colors"
                  >
                    SUBMIT APPLICATION
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
