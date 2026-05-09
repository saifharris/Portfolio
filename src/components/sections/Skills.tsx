"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: ".NET Core", level: 95 },
      { name: "ASP.NET", level: 93 },
      { name: "C#", level: 92 },
      { name: "EF Core", level: 90 },
    ],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "Angular", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 83 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: "🗄️",
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 78 },
      { name: "Azure DevOps", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
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
            <span className="text-2xl">💡</span>
            <span className="text-sm font-semibold text-orange-600">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Technical </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastering modern technologies to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-white border-2 border-orange-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 font-semibold">{skill.name}</span>
                        <span className="text-sm font-bold text-orange-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: categoryIndex * 0.15 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 font-medium">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["MongoDB", "Node.js", "Python", "GitHub Actions", "Jenkins", "Postman"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-lg bg-orange-50 border border-orange-200 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:border-orange-300 hover:scale-105 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
