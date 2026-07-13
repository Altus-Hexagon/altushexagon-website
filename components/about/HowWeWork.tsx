"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Code, Rocket } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Discovery Call",
    desc: "We start by understanding your goals, audience, and vision in depth.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Proposal & Timeline",
    desc: "Clear scope, transparent pricing, and realistic delivery milestones.",
  },
  {
    num: "03",
    icon: Code,
    title: "Build & Update",
    desc: "Regular progress updates throughout the entire development process.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Delivery & Support",
    desc: "Final handoff plus post-launch support to ensure lasting success.",
  },
];

export default function HowWeWork() {
  return (
    <SectionWrapper id="how-we-work" className="bg-charcoal-mid">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-off-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How We Work
          </h2>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-between relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />

          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative flex flex-col items-center text-center w-1/4 px-3"
            >
              {/* Step number */}
              <p className="text-gold/40 text-xs font-mono mb-2">{num}</p>
              {/* Circle */}
              <div className="w-16 h-16 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center relative z-10 mb-6 shadow-lg shadow-gold/10">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h3
                className="font-semibold text-off-white mb-2 text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="text-xs text-silver-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-8 md:hidden relative max-w-sm mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/60 to-gold/20" />
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-6 items-start pl-2"
            >
              <div className="w-12 h-12 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg shadow-gold/10">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div className="pt-2">
                <p className="text-gold/40 text-xs font-mono mb-1">{num}</p>
                <h3
                  className="font-semibold text-off-white mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-silver-muted leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-14 text-silver-muted text-sm italic">
          Available for calls across UK/US business hours
        </p>
      </div>
    </SectionWrapper>
  );
}
