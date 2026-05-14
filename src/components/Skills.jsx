import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Informatica PowerCenter", "IICS", "Snowflake", "SQL", "Unix/Linux", "Shell Scripting", "Data Warehousing", "ETL Development", "API Integration", "Python", "Git & GitHub", "Power BI", "Excel", "REST APIs", "Debugging & Troubleshooting"]
  },
  {
    title: "Development Skills",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js (Beginner)"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Collaboration", "Agile Methodology", "Quick Learning", "Critical Thinking"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-color-mix(in srgb, var(--card-bg) 30%, transparent) relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-neon">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl glow-effect hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-color)] text-center border-b border-[var(--card-border)] pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-[var(--bg-color)] border border-[var(--card-border)] rounded-full text-sm font-medium text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
