"use client";

import { motion, type Variants } from "framer-motion";
import { Brain, Zap, MessageSquare, Code2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  {
    icon: Brain,
    title: "AI-First Approach",
    desc: "We integrate AI at the core of every solution, not as an afterthought.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Agile development cycles mean you see results quickly without sacrificing quality.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "No middlemen — work directly with the people building your product.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    desc: "We use the latest, most reliable technologies in every project we take on.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ValuesSection() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-3">
            Our Values
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Us
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-[#111827] border border-white/5 hover:border-[#D4AF37]/20 rounded-xl p-7 text-center transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/15 flex items-center justify-center transition-colors duration-300">
                <Icon className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3
                className="font-semibold text-lg text-[#F5F5F5] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#A0A8C0] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
