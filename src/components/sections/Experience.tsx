"use client";
import { motion } from "framer-motion";

interface ProjectEntry {
  name: string;
  points: string[];
}

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  projects?: ProjectEntry[];
  points?: string[];
}

const experiences: Experience[] = [
  {
    company: "CARECLOUD",
    location: "NJ · Remote",
    role: "Software Engineer",
    period: "May 2025 — Present",
    current: true,
    projects: [
      {
        name: "Fox Trax — Backend API (Fox Rehabilitation)",
        points: [
          "Built & scaled APIs powering 10,000+ clinicians, regional directors, and account managers",
          "Integrated AI-powered smart provider assignment and intelligent case suggestions",
          "ASP.NET (.NET Framework) Web API — scheduling, clinician assignment, visit management",
          "Optimized MS SQL Server queries/stored procedures via EF Core and ADO.NET",
          "Domain rules, role-based access, and automated report generation",
        ],
      },
      {
        name: "Hidayah — Full-Stack (Qur'an Learning Platform)",
        points: [
          "ASP.NET Core APIs + Angular reactive forms for lesson progression & instructor dashboards",
          "SQL Server schema design with performant queries and data integrity",
          "Role-based authorization, input validation, and robust error handling",
        ],
      },
    ],
  },
  {
    company: "FAST NUCES",
    location: "Islamabad",
    role: "Teaching Assistant — SCD",
    period: "Jan 2025 — Jul 2025",
    current: false,
    points: [
      "Guided students on Jenkins, GitHub Actions, Docker, and Kubernetes",
      "Led hands-on CI/CD pipeline and containerization labs",
      "Code reviews with best-practice feedback",
    ],
  },
  {
    company: "INSPIROVIX",
    location: "Islamabad",
    role: "AI Intern",
    period: "Oct 2024 — Dec 2024",
    current: false,
    points: [
      "Built AI-driven solutions for data analysis and NLP tasks",
      "Worked on LLMs for text comprehension and generation",
      "Data preparation and feature selection for ML algorithms",
    ],
  },
  {
    company: "NADRA HQ",
    location: "Islamabad",
    role: "Network Security Intern",
    period: "Jul 2024 — Sep 2024",
    current: false,
    points: [
      "Firewall, router, and switch configuration in high-security environment",
      "Satchel integration and support within internal network",
      "Enterprise cybersecurity practices and incident response workflows",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-100/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] text-indigo-500 tracking-[0.35em] mb-3 font-semibold">
            03 / EXPERIENCE
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            WORK HISTORY
          </h2>
          <div className="neon-line w-20" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-400/60 via-violet-300/40 to-transparent hidden lg:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="lg:pl-14 relative"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-7 hidden lg:block w-4 h-4 rounded-full border-2 transition-all ${
                    exp.current
                      ? "border-indigo-500 bg-indigo-100 shadow-[0_0_14px_rgba(91,91,214,0.5)]"
                      : "border-slate-300 bg-white"
                  }`}
                />

                <div
                  className={`glass glass-hover p-8 ${
                    exp.current ? "border-indigo-200" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-slate-900">{exp.company}</h3>
                        {exp.current && (
                          <span className="font-mono text-[9px] px-2 py-0.5 bg-indigo-100 border border-indigo-200 text-indigo-600 tracking-widest">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="text-indigo-600 text-sm font-medium">{exp.role}</div>
                      <div className="text-slate-400 text-[11px] font-mono mt-1">
                        {exp.location}
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 text-right shrink-0">
                      {exp.period}
                    </div>
                  </div>

                  {exp.projects ? (
                    <div className="space-y-6">
                      {exp.projects.map((proj) => (
                        <div key={proj.name}>
                          <div className="font-mono text-[10px] text-indigo-400 mb-3 tracking-wide">
                            — {proj.name}
                          </div>
                          <ul className="space-y-2">
                            {proj.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-3 text-sm text-slate-500 leading-relaxed"
                              >
                                <span className="text-indigo-400/60 mt-1.5 shrink-0">▸</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {exp.points?.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-slate-500 leading-relaxed"
                        >
                          <span className="text-indigo-400/60 mt-1.5 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
