"use client";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "EMAIL",
    value: "harrissaif01@gmail.com",
    href: "mailto:harrissaif01@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "/in/harris-saif-863a84246",
    href: "https://www.linkedin.com/in/harris-saif-863a84246/",
  },
  {
    label: "PHONE",
    value: "+92 317 046 8116",
    href: "tel:+923170468116",
  },
];

const certifications = [
  { name: "AWS Cloud Foundation", issuer: "AWS Academy", date: "May 2025" },
  { name: "Microservices CI/CD Pipeline Builder", issuer: "AWS", date: "May 2025" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(91,91,214,0.08),transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] text-indigo-500 tracking-[0.35em] mb-6 font-semibold">
            05 / CONTACT
          </div>
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)" }}
          >
            <span className="text-slate-900">{"LET'S"}</span>
            <br />
            <span className="gradient-text">CONNECT</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
            Open to full-time roles, interesting projects, or just a good
            conversation about tech.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-6 text-center group"
            >
              <div className="font-mono text-[9px] text-indigo-400 tracking-[0.35em] mb-2.5 font-semibold">
                {link.label}
              </div>
              <div className="text-slate-600 text-xs group-hover:text-indigo-600 transition-colors break-all leading-relaxed">
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14"
        >
          <div className="font-mono text-[9px] text-slate-400 tracking-[0.35em] mb-5 text-center">
            CERTIFICATIONS
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {certifications.map((cert) => (
              <div key={cert.name} className="glass px-6 py-4 flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 shrink-0 rounded-full" />
                <div>
                  <div className="text-slate-700 text-xs font-medium">{cert.name}</div>
                  <div className="font-mono text-[10px] text-slate-400 mt-0.5">
                    {cert.issuer} · {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-200"
        >
          <div className="font-mono text-[10px] text-slate-400 tracking-widest">
            HARRIS MAIZAN · SOFTWARE ENGINEER
          </div>
          <div className="font-mono text-[10px] text-slate-400 tracking-widest">
            FAST NUCES · BS SE · 2021–2025
          </div>
          <div className="font-mono text-[10px] text-slate-400 tracking-widest">
            ISLAMABAD, PK
          </div>
        </motion.div>
      </div>
    </section>
  );
}
