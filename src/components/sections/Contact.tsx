"use client";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "harrissaif01@gmail.com",
    href: "mailto:harrissaif01@gmail.com",
    icon: "📧",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/harris-saif",
    href: "https://www.linkedin.com/in/harris-saif-863a84246/",
    icon: "💼",
  },
  {
    label: "Phone",
    value: "+92 317 046 8116",
    href: "tel:+923170468116",
    icon: "📱",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50/50 via-white to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
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
            <span className="text-2xl">🤝</span>
            <span className="text-sm font-semibold text-orange-600">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about technology
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-white border-2 border-orange-100 rounded-2xl p-8 text-center hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {link.icon}
                </div>
                <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">
                  {link.label}
                </h3>
                <p className="text-gray-900 font-semibold text-lg break-all group-hover:text-orange-600 transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <a
            href="mailto:harrissaif01@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-orange-200 hover:shadow-2xl hover:shadow-orange-300 hover:scale-105 transition-all duration-300"
          >
            <span>📬</span>
            <span>Send Me a Message</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t-2 border-orange-100 text-center"
        >
          <p className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Harris Maizan · Software Engineer · Built with Next.js & Three.js
          </p>
          <p className="text-gray-500 text-xs mt-2">
            FAST NUCES · BS Software Engineering · 2021–2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
