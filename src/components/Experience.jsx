import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-neon">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[var(--card-border)] rounded-full"></div>

          {/* Timeline Item */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center w-full"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center z-10 shadow-[0_0_15px_var(--accent-color)] border-4 border-[var(--bg-color)]">
              <Briefcase size={18} className="text-white" />
            </div>

            {/* Content Box */}
            <div className="w-full md:w-1/2 ml-12 md:ml-0 md:pr-12 md:text-right mb-8 md:mb-0">
              <div className="glass p-6 rounded-2xl glow-effect text-left md:text-right relative">
                <span className="inline-block px-3 py-1 bg-[var(--accent-color)]/20 text-[var(--accent-color)] text-sm font-semibold rounded-full mb-3">
                  July 2024 - Present
                </span>
                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-1">Associate Software Engineer</h3>
                <h4 className="text-lg text-[var(--text-muted)] font-medium mb-4">Capgemini</h4>
                <ul className="text-[var(--text-color)] space-y-2 text-sm leading-relaxed text-left md:text-right list-disc md:list-none pl-5 md:pl-0">
                  <li>Working on Informatica-based ETL pipelines.</li>
                  <li>Supporting data integration and transformation workflows.</li>
                  <li>Debugging production issues and analyzing logs.</li>
                  <li>Handling data mapping and validation tasks.</li>
                  <li>Working in Agile environments & cross-functional teams.</li>
                  <li>Learning Snowflake and cloud-based integrations.</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-1/2 pl-12"></div>
          </motion.div>
          {/* Internship Timeline Item */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center w-full mt-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center z-10 shadow-[0_0_15px_var(--accent-color)] border-4 border-[var(--bg-color)]">
              <Briefcase size={18} className="text-white" />
            </div>

            {/* Alternate Side */}
            <div className="hidden md:block w-full md:w-1/2 pr-12"></div>

            {/* Content Box */}
            <div className="w-full md:w-1/2 ml-12 md:ml-0 md:pl-12 mb-8 md:mb-0">
              <div className="glass p-6 rounded-2xl glow-effect relative">
                <span className="inline-block px-3 py-1 bg-[var(--accent-color)]/20 text-[var(--accent-color)] text-sm font-semibold rounded-full mb-3">
                  Jan 2024 - Mar 2024
                </span>

                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-1">
                  Web Development Intern
                </h3>

                <h4 className="text-lg text-[var(--text-muted)] font-medium mb-4">
                  Premiere EdTech
                </h4>

                <ul className="text-[var(--text-color)] space-y-2 text-sm leading-relaxed list-disc pl-5">
                  <li>Developed responsive UI components using React.js.</li>
                  <li>Developed a fully responsive E-commerce website.</li>
                  <li>Integrated Authentication, multi sign-up/sign-in, and Payment gateway.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
