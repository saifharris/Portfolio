"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Fox Trax API Platform",
    tag: "BACKEND · API",
    year: "2025",
    desc: "Production .NET APIs serving 10,000+ clinicians. AI-powered provider assignment, scheduling, and visit management at enterprise scale.",
    tech: ["ASP.NET", "SQL Server", "EF Core", "ADO.NET", ".NET Framework"],
    wide: true,
    accent: "indigo",
  },
  {
    name: "Hidayah LMS",
    tag: "FULL STACK",
    year: "2025",
    desc: "Qur'an learning platform — lesson progression, instructor dashboards, student onboarding, and role-based access.",
    tech: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript"],
    wide: false,
    accent: "violet",
  },
  {
    name: "AI Case Intelligence",
    tag: "AI · ML",
    year: "2025",
    desc: "Smart provider-to-case matching and intelligent case suggestions using LLM integration inside the Fox Trax ecosystem.",
    tech: ["LLM Integration", ".NET", "SQL Server"],
    wide: false,
    accent: "sky",
  },
  {
    name: "CI/CD Pipeline Labs",
    tag: "DEVOPS",
    year: "2024–25",
    desc: "Designed and taught containerized CI/CD pipelines covering GitHub Actions, Jenkins, Docker, and Kubernetes at FAST NUCES.",
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    wide: false,
    accent: "indigo",
  },
];

const accentMap = {
  indigo: {
    tag: "text-indigo-500",
    heading: "group-hover:text-indigo-600",
    tech: "border-indigo-100 text-indigo-500 bg-indigo-50",
    glow: "bg-indigo-200",
    border: "border-indigo-200/60",
  },
  violet: {
    tag: "text-violet-500",
    heading: "group-hover:text-violet-600",
    tech: "border-violet-100 text-violet-500 bg-violet-50",
    glow: "bg-violet-200",
    border: "border-violet-200/60",
  },
  sky: {
    tag: "text-sky-500",
    heading: "group-hover:text-sky-600",
    tech: "border-sky-100 text-sky-500 bg-sky-50",
    glow: "bg-sky-200",
    border: "border-sky-200/60",
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-indigo-100/50 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] text-indigo-500 tracking-[0.35em] mb-3 font-semibold">
            04 / PROJECTS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            SELECTED WORK
          </h2>
          <div className="neon-line w-20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => {
            const a = accentMap[proj.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className={`glass glass-hover p-7 relative group overflow-hidden flex flex-col ${
                  proj.wide ? `lg:col-span-2 ${a.border}` : ""
                }`}
              >
                {proj.wide && (
                  <div
                    className={`absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${a.glow}`}
                  />
                )}

                <div className="flex items-start justify-between mb-4">
                  <span className={`font-mono text-[9px] tracking-[0.3em] font-semibold ${a.tag}`}>
                    {proj.tag}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">{proj.year}</span>
                </div>

                <h3
                  className={`font-bold text-slate-800 mb-3 transition-colors duration-300 ${a.heading} ${
                    proj.wide ? "text-xl" : "text-base"
                  }`}
                >
                  {proj.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{proj.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-[9px] px-2.5 py-1 rounded border ${a.tech}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
