"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const techs = [
  { name: "Flutter", color: "#54C5F8" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "FastAPI", color: "#009688" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "OpenAI", color: "#74AA9C" },
  { name: "Python", color: "#3776AB" },
];

export default function TechBadges() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[#A0A8C0] uppercase tracking-widest text-sm mb-10">
          Technologies We Use
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
          {techs.map(({ name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group px-7 py-3 rounded-xl bg-[#111827]/80 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 cursor-default"
            >
              <span
                className="font-mono text-sm text-[#A0A8C0]/70 group-hover:text-[#F5F5F5] transition-colors duration-300 font-semibold tracking-wide"
                style={{ "--tech-color": color } as React.CSSProperties}
              >
                <span className="group-hover:text-[var(--tech-color)] transition-colors duration-300">
                  {name}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
