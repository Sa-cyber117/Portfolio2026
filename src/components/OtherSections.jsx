import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy, Layers } from 'lucide-react';

const certifications = [
  "DP-900",
  "Informatica",
  "Snowflake",
  "SQL",
  "PowerBi",
  "Linux/Unix"
];

const achievements = [
  "Successfully transitioned into corporate IT as a fresher.",
  "Worked on enterprise data integration systems.",
  "Continuously learning cloud and modern technologies.",
  "Building expertise in ETL and data engineering."
];

const services = [
  "ETL Development",
  "Data Integration",
  "Dashboard Creation",
  "SQL Query Optimization",
  "Automation Concepts",
  "Technical Troubleshooting"
];

export default function OtherSections() {
  return (
    <div className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 space-y-32">
        
        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-8 h-8 text-[var(--accent-color)]" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="glass p-8 rounded-2xl glow-effect border-l-4 border-[var(--accent-color)]">
              <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">B.Tech in Electronics and Communication Engineering (ECE)</h3>
              <p className="text-[var(--text-muted)] font-medium text-lg">Graduated in 2024</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-8 h-8 text-[var(--accent-color)]" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass p-4 rounded-xl flex items-center gap-3 hover:-translate-y-1 transition-transform border border-transparent hover:border-[var(--accent-color)]/50">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-color)] shadow-[0_0_8px_var(--accent-color)]"></div>
                  <span className="font-medium text-[var(--text-color)]">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements & Services Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="w-8 h-8 text-[var(--accent-color)]" />
              <h2 className="text-3xl font-bold">Achievements</h2>
            </div>
            <div className="glass p-8 rounded-2xl relative">
              <ul className="space-y-6">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-color)]/20 flex items-center justify-center text-[var(--accent-color)] text-sm font-bold mt-1">
                      {index + 1}
                    </span>
                    <span className="text-[var(--text-color)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Layers className="w-8 h-8 text-[var(--accent-color)]" />
              <h2 className="text-3xl font-bold">Services</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="glass p-6 rounded-xl text-center hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 group cursor-default">
                  <span className="font-medium group-hover:text-white transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
