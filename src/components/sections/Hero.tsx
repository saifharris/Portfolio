"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("../3d/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

const stackBadges = [
  ".NET Core",
  "ASP.NET",
  "Angular",
  "C#",
  "SQL Server",
  "TypeScript",
  "EF Core",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Scanline sweep */}
      <div className="scanline" />

      {/* Top radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(91,91,214,0.1),transparent)] pointer-events-none" />

      {/* Bottom-right accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.07),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
        {/* Left — text */}
        <div className="flex flex-col justify-center py-32 lg:py-0">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 pulse-dot" />
            <span className="font-mono text-[11px] text-indigo-500 tracking-[0.32em]">
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.85 }}
            className="font-bold leading-[0.88] tracking-tight mb-6"
            style={{ fontSize: "clamp(3.4rem, 9vw, 6.5rem)" }}
          >
            <span className="block text-slate-900">HARRIS</span>
            <span className="block gradient-text">MAIZAN</span>
          </motion.h1>

          {/* Role line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.56 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-14 h-px bg-gradient-to-r from-indigo-500 to-violet-400/50" />
            <span className="font-mono text-sm text-slate-400 tracking-[0.2em]">
              SOFTWARE ENGINEER
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.66 }}
            className="text-slate-500 max-w-[340px] leading-relaxed text-sm mb-10"
          >
            Shipping scalable .NET APIs and reactive Angular frontends.
            Full-stack across legacy and modern systems — currently at{" "}
            <span className="text-indigo-600 font-medium">CareCloud</span>.
          </motion.p>

          {/* Stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {stackBadges.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white text-[11px] font-mono font-bold tracking-[0.2em] hover:bg-indigo-500 transition-all active:scale-95 shadow-md shadow-indigo-200"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-indigo-300 text-indigo-600 text-[11px] font-mono tracking-[0.2em] hover:bg-indigo-50 hover:border-indigo-400 transition-all"
            >
              CONTACT
            </a>
          </motion.div>
        </div>

        {/* Right — 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.3, ease: "easeOut" }}
          className="h-[520px] lg:h-screen relative"
        >
          <HeroScene />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 right-2 font-mono text-[10px] text-slate-300 text-right leading-5"
          >
            <div>THREE.JS / WEBGL</div>
            <div>REAL-TIME RENDER</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-indigo-400/60 to-transparent origin-top"
      />
    </section>
  );
}
