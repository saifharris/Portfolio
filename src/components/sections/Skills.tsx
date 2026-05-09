"use client";
import { motion } from "framer-motion";

const primarySkills = [
  {
    name: ".NET / ASP.NET",
    subtitle: "BACKEND CORE",
    level: 90,
    color: "indigo" as const,
    desc: "Production-grade APIs on .NET Framework & .NET Core. ASP.NET Web API, EF Core, ADO.NET — shipped at scale for 10,000+ users at CareCloud.",
    tags: ["ASP.NET Core", ".NET Framework", "EF Core", "ADO.NET", "Web API", "C#"],
  },
  {
    name: "ANGULAR",
    subtitle: "FRONTEND CORE",
    level: 85,
    color: "violet" as const,
    desc: "Reactive Angular apps with RxJS, component-driven architecture, and clean form handling — dashboards and learning platforms.",
    tags: ["Angular 15+", "RxJS", "Reactive Forms", "TypeScript", "Angular Material"],
  },
];

const otherSkills = [
  { name: "React / Next.js", cat: "Frontend" },
  { name: "TypeScript", cat: "Language" },
  { name: "SQL Server", cat: "Database" },
  { name: "Node.js", cat: "Backend" },
  { name: "MongoDB", cat: "Database" },
  { name: "Docker", cat: "DevOps" },
  { name: "Kubernetes", cat: "DevOps" },
  { name: "GitHub Actions", cat: "DevOps" },
  { name: "Azure DevOps", cat: "DevOps" },
  { name: "C++", cat: "Language" },
  { name: "Python", cat: "Language" },
  { name: "Postman / Swagger", cat: "Tooling" },
];

function PrimaryCard({
  skill,
  index,
}: {
  skill: (typeof primarySkills)[0];
  index: number;
}) {
  const isIndigo = skill.color === "indigo";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.65 }}
      className="glass glass-hover p-8 relative overflow-hidden group"
    >
      {/* Corner glow */}
      <div
        className={`absolute -top-8 -right-8 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-18 transition-opacity pointer-events-none ${
          isIndigo ? "bg-indigo-400" : "bg-violet-400"
        }`}
      />

      <div
        className={`font-mono text-[10px] tracking-[0.35em] mb-3 font-semibold ${
          isIndigo ? "text-indigo-500" : "text-violet-500"
        }`}
      >
        {skill.subtitle}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3">{skill.name}</h3>

      {/* Progress */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.15, duration: 1.1, ease: "easeOut" }}
            className={`h-full rounded-full ${
              isIndigo
                ? "bg-gradient-to-r from-indigo-500 to-indigo-400"
                : "bg-gradient-to-r from-violet-500 to-violet-400"
            }`}
          />
        </div>
        <span
          className={`font-mono text-xs shrink-0 font-semibold ${
            isIndigo ? "text-indigo-500" : "text-violet-500"
          }`}
        >
          {skill.level}%
        </span>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6">{skill.desc}</p>

      <div className="flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-[10px] px-2.5 py-1 rounded border ${
              isIndigo
                ? "border-indigo-200 text-indigo-600 bg-indigo-50"
                : "border-violet-200 text-violet-600 bg-violet-50"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] text-indigo-500 tracking-[0.35em] mb-3 font-semibold">
            02 / SKILLS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            TECH STACK
          </h2>
          <div className="neon-line w-20" />
        </motion.div>

        {/* Primary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {primarySkills.map((skill, i) => (
            <PrimaryCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Secondary grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="font-mono text-[10px] text-slate-400 tracking-[0.3em] mb-5">
            ADDITIONAL SKILLS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {otherSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass glass-hover px-4 py-3 text-center group cursor-default"
              >
                <div className="text-slate-600 text-xs font-medium mb-1 group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </div>
                <div className="font-mono text-[9px] text-slate-400">{skill.cat}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
