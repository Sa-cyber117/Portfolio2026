import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-[var(--text-muted)] mb-4"
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-cyan)]">
                Sabauddin
              </span>
            </motion.h1>

            {/* <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-color)]"
            >
              Associate Software Engineer
            </motion.h3> */}
            <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-color)]"
          >
            I am{" "}
            <span className="text-[var(--color-neon-cyan)]">
              <Typewriter
                words={[
                  'a Developer',
                  'an Engineer',
                  // 'a Data Engineer',
                  // 'Backend Enthusiast'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about data engineering, backend systems, and crafting modern integrations. 
              Currently exploring cloud data engineering and building scalable ETL pipelines.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                to="contact"
                smooth={true}
                className="group relative px-8 py-3 bg-[var(--accent-color)] text-white rounded-full font-medium overflow-hidden shadow-[0_0_20px_color-mix(in_srgb,var(--accent-color)_40%,transparent)] hover:shadow-[0_0_30px_color-mix(in_srgb,var(--accent-color)_60%,transparent)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              </Link>
              
              {/* <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-3 glass rounded-full font-medium hover:bg-[var(--card-border)] transition-colors flex items-center gap-2"
              >
                Download Resume <Download size={18} />
              </a> */}
              <a 
                href="https://docs.google.com/document/d/1qx5i1RLcANWyMpGupjbbbLNOMEk28HPk/edit?usp=sharing&ouid=111956796379955505748&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 glass rounded-full font-medium hover:bg-[var(--card-border)] transition-colors flex items-center gap-2"
              >
                Download Resume <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative glow-effect rounded-full">
              <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-[var(--accent-color)] p-2">
                <div className="w-full h-full bg-[var(--card-bg)] rounded-full flex items-center justify-center text-[var(--text-muted)] text-4xl">
                  {/* Placeholder for Profile Image */}
                  👨‍💻
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
