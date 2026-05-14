import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Globe, User, Code2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-color-mix(in srgb, var(--card-bg) 30%, transparent)">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-[var(--text-muted)] mb-8">
                Feel free to reach out to me for any opportunities, collaborations, or just a friendly chat!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Email</p>
                    <a href="mailto:placeholder@email.com" className="text-[var(--text-color)] font-medium hover:text-[var(--accent-color)] transition-colors">
                      placeholder@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Location</p>
                    <p className="text-[var(--text-color)] font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-bold mb-4">Find Me Online</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[var(--text-color)]">
                    <User size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[var(--text-color)]">
                    <Globe size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[var(--text-color)]">
                    <Code2 size={20} /> {/* LeetCode/HackerRank icon placeholder */}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <form className="glass p-8 rounded-2xl space-y-6 glow-effect">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full py-4 bg-[var(--accent-color)] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent-color)]/30"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
