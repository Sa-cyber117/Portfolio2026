import { motion } from 'framer-motion';
import { ExternalLink, Database, LayoutDashboard, Cpu, Terminal } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ETL Data Integration Pipeline",
    description: "Developed ETL workflows using Informatica and SQL for processing and validating enterprise data.",
    features: ["Data transformation", "Workflow automation", "Error handling", "Data validation"],
    tech: ["Informatica", "SQL", "Unix"],
    icon: <Database className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Power BI Gender Analytics Dashboard",
    description: "Created a dashboard to analyze gender distribution across job roles and departments.",
    features: ["Interactive charts", "Department-wise analysis", "KPI metrics", "Dynamic filtering"],
    tech: ["Power BI", "Excel"],
    icon: <LayoutDashboard className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Red Bus Ticket Booking Analysis",
    description: "Designed Mappings and applied necessary transformation to dimention tables and fact tables.",
    features: ["Automatic tracking", "Proper ETL logic", "BI Dashboard"],
    tech: ["ETL Concepts","Informatica PowerCenter", "Power BI"],
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Linux Recovery & Troubleshooting Toolkit",
    description: "Worked on Linux-based recovery and troubleshooting concepts including storage recovery and system utilities.",
    features: ["Recovery tools", "Disk utilities", "Command-line operations", "System troubleshooting"],
    tech: ["Linux", "Bash"],
    icon: <Terminal className="w-8 h-8" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-color-mix(in srgb, var(--card-bg) 30%, transparent) relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--accent-color)_20%,transparent)] border border-[var(--card-border)] hover:border-[var(--accent-color)]/50"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4 scale-150 text-[var(--accent-color)]">
                {project.icon}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[var(--accent-color)]/10 text-[var(--accent-color)] rounded-xl">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-color)]">{project.title}</h3>
                </div>
                
                <p className="text-[var(--text-muted)] mb-6 h-16 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--text-color)] mb-2 uppercase tracking-wider">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-[var(--text-muted)]">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[var(--bg-color)] rounded-md text-xs font-medium text-[var(--accent-color)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
