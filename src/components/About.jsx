import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-neon">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="glass p-8 rounded-2xl relative glow-effect">
              <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
                Hello! I'm <span className="text-[var(--accent-color)] font-semibold">Sabauddin</span>, a passionate software engineer based in Bangalore, India. 
                I started my career as a fresher in July 2024 and currently work as an Associate Software Engineer at Capgemini.
              </p>
              <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
                My primary expertise lies in working with <span className="font-semibold">Informatica</span> and <span className="font-semibold">Snowflake</span> technologies. 
                I am actively learning cloud data engineering and modern data integration to build efficient, scalable solutions.
              </p>
              <p className="text-lg text-[var(--text-color)] leading-relaxed">
                I have a strong interest in automation, backend systems, data pipelines, AI tools, and smart technologies. 
                I enjoy problem-solving, debugging, and continuously learning new technologies to improve systems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 grid grid-cols-2 gap-6"
          >
            <div className="glass p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-neon mb-2">2</h3>
              <p className="text-[var(--text-muted)] font-medium">Years Experience</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-neon mb-2">Capgemini</h3>
              <p className="text-[var(--text-muted)] font-medium">Current Company</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-neon mb-2">B.Tech</h3>
              <p className="text-[var(--text-muted)] font-medium">ECE Degree</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-neon mb-2">Data</h3>
              <p className="text-[var(--text-muted)] font-medium">Engineering Focus</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
