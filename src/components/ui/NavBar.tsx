"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "HOME", href: "#home" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-indigo-100 shadow-sm shadow-indigo-100/50"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="font-mono text-base font-bold tracking-widest cursor-pointer gradient-text-indigo"
          whileHover={{ scale: 1.05 }}
        >
          HM<span className="text-slate-300">_</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="text-[11px] font-mono tracking-[0.22em] text-slate-400 hover:text-indigo-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-indigo-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="mailto:harrissaif01@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:block text-[11px] font-mono px-4 py-2 border border-indigo-300 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all tracking-widest"
        >
          HIRE ME
        </motion.a>
      </div>
    </motion.header>
  );
}
