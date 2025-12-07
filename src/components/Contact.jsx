import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 pb-32">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-2xl border border-brand-neon/30">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
                <p className="text-gray-400">Let's discuss how we can help transform your business.</p>
            </div>
            
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-brand-neon focus:outline-none transition-colors" placeholder="Abiraj Vikramadhithyan" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-brand-neon focus:outline-none transition-colors" placeholder="abiraj@daat.group" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-brand-neon focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-brand-neon text-black font-bold py-4 rounded hover:bg-white transition-colors">
                    SEND MESSAGE
                </button>
            </form>

            <div className="mt-12 text-center border-t border-white/10 pt-8">
                <p className="text-gray-400 mb-4">Or email us directly</p>
                <a href="mailto:info@daat.group" className="text-2xl font-bold text-white hover:text-brand-purple transition-colors">
                    info@daat.group
                </a>
            </div>
        </div>
    </section>
  );
};

export default Contact;
