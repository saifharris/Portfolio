"use client";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "CareCloud",
    location: "New Jersey · Remote",
    role: "Software Engineer",
    period: "May 2025 — Present",
    current: true,
    description: "Building scalable .NET APIs for Fox Trax serving 10,000+ clinicians. Integrated AI-powered provider assignment and case suggestions. Developing Hidayah LMS with Angular + ASP.NET Core.",
  },
  {
    company: "FAST NUCES",
    location: "Islamabad",
    role: "Teaching Assistant",
    period: "Jan 2025 — Jul 2025",
    current: false,
    description: "Teaching DevOps practices and modern software development workflows. Conducting hands-on labs for CI/CD pipelines, containerization with Docker & Kubernetes.",
  },
  {
    company: "Inspirovix",
    location: "Islamabad",
    role: "AI Intern",
    period: "Oct 2024 — Dec 2024",
    current: false,
    description: "Developed AI-driven solutions for data analysis and NLP tasks. Worked with LLMs for text comprehension and generation.",
  },
  {
    company: "NADRA HQ",
    location: "Islamabad",
    role: "Network Security Intern",
    period: "Jul 2024 — Sep 2024",
    current: false,
    description: "Configured enterprise network infrastructure in high-security government environment. Managed firewall, router, and switch configurations.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 lg:py-40 relative flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
            Experience
          </h2>
          <p className="text-lg text-neutral-600">
            My professional journey in software development.
          </p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-neutral-200 pl-8 pb-8 relative"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-black border-black"
                    : "bg-white border-neutral-300"
                }`}
              />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-1">
                    {exp.company}
                  </h3>
                  <div className="text-lg text-neutral-700 mb-1">{exp.role}</div>
                  <div className="text-sm text-neutral-500">{exp.location}</div>
                </div>

                <div className="text-sm text-neutral-500">{exp.period}</div>
              </div>

              <p className="text-neutral-600 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

