"use client";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    company: "CareCloud",
    location: "New Jersey · Remote",
    role: "Software Engineer",
    period: "May 2025 — Present",
    current: true,
    description: "Building scalable .NET APIs for Fox Trax serving 10,000+ clinicians. Integrated AI-powered provider assignment and case suggestions. Developing Hidayah LMS with Angular + ASP.NET Core.",
    icon: "🚀",
  },
  {
    company: "FAST NUCES",
    location: "Islamabad",
    role: "Teaching Assistant",
    period: "Jan 2025 — Jul 2025",
    current: false,
    description: "Teaching DevOps practices and modern software development workflows. Conducting hands-on labs for CI/CD pipelines, containerization with Docker & Kubernetes.",
    icon: "📚",
  },
  {
    company: "Inspirovix",
    location: "Islamabad",
    role: "AI Intern",
    period: "Oct 2024 — Dec 2024",
    current: false,
    description: "Developed AI-driven solutions for data analysis and NLP tasks. Worked with LLMs for text comprehension and generation.",
    icon: "🤖",
  },
  {
    company: "NADRA HQ",
    location: "Islamabad",
    role: "Network Security Intern",
    period: "Jul 2024 — Sep 2024",
    current: false,
    description: "Configured enterprise network infrastructure in high-security government environment. Managed firewall, router, and switch configurations.",
    icon: "🔒",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50/50 via-white to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-semibold text-orange-600">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Work </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building innovative solutions across multiple industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-10 w-6 h-6 rounded-full border-4 z-10 ${
                  exp.current 
                    ? "bg-orange-500 border-orange-400 shadow-lg shadow-orange-300" 
                    : "bg-white border-orange-300"
                } hidden md:block`}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
                  )}
                </div>

                {/* Content Card */}
                <div className="md:ml-24">
                  <div className={`bg-white border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                    exp.current ? "border-orange-300 shadow-lg shadow-orange-100/50" : "border-gray-200 hover:border-orange-200"
                  }`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-5xl">
                          {exp.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {exp.company}
                            </h3>
                            {exp.current && (
                              <span className="px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-xs font-bold text-orange-600">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-orange-600 mb-1">
                            {exp.role}
                          </p>
                          <p className="text-sm text-gray-500">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg font-medium">
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative md:ml-24 mt-12"
          >
            <div className="absolute left-6 md:left-[-62px] w-6 h-6 rounded-full bg-orange-200/50 border-2 border-orange-300 hidden md:block"></div>
            <div className="text-center md:text-left">
              <span className="inline-block px-6 py-3 rounded-full bg-orange-50 border border-orange-200 text-sm text-gray-600 font-medium">
                🎓 Started Journey — 2024
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
