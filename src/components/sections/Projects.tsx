"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Fox Trax API Platform",
    year: "2025",
    desc: "Production .NET APIs serving 10,000+ clinicians with AI-powered provider assignment and intelligent visit management system.",
    tech: ["ASP.NET", "SQL Server", "EF Core", ".NET Framework"],
    icon: "🦊",
    featured: true,
  },
  {
    name: "Hidayah LMS",
    year: "2025",
    desc: "Comprehensive Qur'an learning platform with lesson progression tracking, instructor dashboards, and role-based access control.",
    tech: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript"],
    icon: "📖",
    featured: true,
  },
  {
    name: "AI Case Intelligence",
    year: "2025",
    desc: "Smart provider-to-case matching system using LLM integration for intelligent case suggestions and automated assignments.",
    tech: ["LLM", ".NET", "SQL Server", "AI/ML"],
    icon: "🧠",
    featured: false,
  },
  {
    name: "CI/CD Pipeline Labs",
    year: "2024",
    desc: "Educational containerized CI/CD pipelines covering modern DevOps practices including GitHub Actions, Jenkins, Docker, and Kubernetes.",
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    icon: "⚡",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-50 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-semibold text-orange-600">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Selected </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting innovative solutions that make a real impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-white border-2 border-orange-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {proj.icon}
                  </div>
                  <div className="text-right">
                    {proj.featured && (
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-xs font-bold text-orange-600 mb-2">
                        ⭐ Featured
                      </span>
                    )}
                    <div className="text-sm text-gray-500 font-medium">{proj.year}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {proj.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {proj.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-xs font-medium text-gray-700 hover:bg-orange-100 hover:border-orange-300 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
